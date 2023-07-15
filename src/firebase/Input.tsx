import { useState } from "react";
import { db, au } from "./fairebase";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import { async } from "@firebase/util";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { error } from "console";

const Input:React.FC = ()=>{

    const [inputMail, setMail] = useState("");
    const [inputName, setName] = useState("");
    const [inputPass, setPass] = useState("");
    const [reInputPass, setRePass] = useState("");
    const [inputClass, setClass] = useState("");
    const [inputNum, setNum] = useState("26");
    const [inputIcon, setIcon] = useState("Demo");
    const [inputRoll, setRoll] = useState("adomin");

    const [passBool, checkPass ] = useState(false);     // 登録フォーム　パスワード再入力確認フラグ
    const [loginBool, checkLogin] = useState(false);    // ログインフォーム　ログイン確認フラグ

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

        try {
            await addDoc(collection(db, 'todos'),{
                mail: inputMail,
                name: inputName,
                pass: inputPass,
                class: inputClass,
                number: inputNum,
                icon: inputIcon,
                inputRoll: inputRoll
            })
        }catch(err){
            alert('regist error')
            console.log("err:" + err);
            return
        }

        
        setMail('');
        setName('');
        setPass('');
        setRePass('');
        setClass('');
        setNum('');
        setIcon('');
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
                Icon:<input onChange={(e) => setIcon(e.target.value)} value={inputIcon}/><br />
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
