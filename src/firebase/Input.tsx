import { useState } from "react";
import { db, au, storage } from "./firebase";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import { async } from "@firebase/util";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";
import { error } from "console";
import { Upload } from "@mui/icons-material";

const Input:React.FC = ()=>{

    const [inputMail, setMail] = useState("");
    const [inputName, setName] = useState("");
    const [inputPass, setPass] = useState("");
    const [reInputPass, setRePass] = useState("");
    const [inputClass, setClass] = useState("");
    const [inputNum, setNum] = useState("26");
    const [inputIcon, setIcon] = useState<File | null>(null);
    const [iconName, setIconName] = useState("")
    const [inputRoll, setRoll] = useState("adomin");

    const [passBool, checkPass ] = useState(false);     // 登録フォーム　パスワード再入力確認フラグ
    const [loginBool, checkLogin] = useState(false);    // ログインフォーム　ログイン確認フラグ
    const [upload, setUpload] = useState(false);


    // ログイン
    const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        

        signInWithEmailAndPassword(
            au,
            inputMail,
            inputPass
        ).then((userCredential)=>{
            const user = userCredential.user;
            checkLogin(true);
            // ログイン後の処理
        }).catch((error)=>{
            alert('Don\'t Login ...');
            console.log("err:" + error);
            return
        })

    }

    // 登録
    const onSubmitAdd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (inputPass != reInputPass) {
            checkPass(true);
            return
        }

        try {
            await createUserWithEmailAndPassword(
                au,
                inputMail,
                inputPass
            ).then((userCredential)=>{
                const user = userCredential.user;
                // 登録後の処理
            })
        }catch(err){
            alert('regist error')
            console.log("err:" + err);
            return
        }

        // 画像のアップ
        try {
            console.log('koko')

            setUpload(true);

            // const mountRef = ref(storage, 'test.jpeg')
            // const mountImagesRef = ref(storage, 'test.jpg')

            // mountRef.name === mountImagesRef.name           // true
            // mountRef.fullPath === mountImagesRef.fullPath   // false

            // const storageRef = ref(storage, "some-child");

            
            if (inputIcon !== undefined && inputIcon !== null) {

                const fileExtension = inputIcon.name.substring(inputIcon.name.lastIndexOf('.') + 1);

                const filename:string = inputClass + inputNum + '.' + fileExtension;

                const storageRef = ref(storage, 'images/' + filename);

                setIconName(filename);
                // setIconName
                await uploadBytes(storageRef, inputIcon).then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                    setUpload(false)

                    // ユーザ情報をStoreに登録
                    try {
                        console.log(iconName)
                        addDoc(collection(db, 'Users'),{
                            mail: inputMail,
                            name: inputName,
                            pass: inputPass,
                            class: inputClass,
                            number: inputNum,
                            Roll: inputRoll,
                            iconName: filename
                        }).then(()=>{
                            alert("登録完了")
                        }).catch(()=>{
                            alert("登録失敗")
                        })
                    }
                    catch(err){
                        alert('regist error')
                        console.log("err:" + err);
                        return
                    }
                  });
            }

        }catch{
            alert("サムネイルの登録に失敗しました")
        }

        
        setMail('');
        setName('');
        setPass('');
        setRePass('');
        setClass('');
        setNum('');
        setRoll('');
    };

    return(
        <>
        REGIST FORM<br />
            <form onSubmit={onSubmitAdd}>
                DEMO<br />
                Mail:<input onChange={(e) => setMail(e.target.value)} value={inputMail}/><br />
                Name:<input onChange={(e) => setName(e.target.value)} value={inputName}/><br />
                Pass:<input onChange={(e) => setPass(e.target.value)} value={inputPass}/><br />
                RePass:<input onChange={(e) => setRePass(e.target.value)} value={reInputPass}/><br />
                Class:<input onChange={(e) => setClass(e.target.value)} value={inputClass}/><br />
                Num:<input type="Number" onChange={(e) => setNum(e.target.value)} value={inputNum}/><br />
                Icon:<input type="file" onChange={(e) => {
                    if (e.target.files !== null && e.target.files.length > 0) {
                        setIcon(e.target.files[0]);
                      }
                }} accept="image/jpeg" />{upload && <><br /><p> Upload Now!</p></>}<br />
                Roll:<input onChange={(e) => setRoll(e.target.value)} value={inputRoll}/><br />
                <button>Regist</button>
                {passBool && <p>Password Miss match</p>}
            </form>

        LOGIN FORM<br />
            <form onSubmit={onSubmitLogin}>
                Mail:<input onChange={(e)=> setMail(e.target.value)} value={inputMail} /><br />
                Pass:<input onChange={(e)=> setPass(e.target.value)} value={inputPass} /><br />
                <button>Login</button>
                {loginBool && <p>success!</p>}
            </form>
        </>
    );

};

export default Input;
