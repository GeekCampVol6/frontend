import WaveAnimation from '@/components/signin/WaveAnimation';
import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';

const styles = {
  container: css`
    width: 100%;
    background-color: white;
    display: flex;
    height: 100vh;
    overflow-y: hidden;
  `,
  leftContainer: css`
    position: relative;
    flex: 4;
    height: 100vh;
    overflow-y: hidden;
  `,
  absLeftContainer: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: #1cc18e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    color: white;
  `,
  catchCopy: css`
    font-size: 1rem;
    font-weight: bold;
    color: white;
  `,
  waveWrapper: css`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  `,
  rightContainer: css`
    position: relative;
    flex: 6;
    background-color: white;
    overflow-y: scroll;
    height: 100%;
    color: #333333;
    /* スクロールバーカスタマイズ */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #1cc18e;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #1cc18e;
    }
  `,
  signInWrapper: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    min-height: 50%;
    margin: 0 auto;
    padding: 2rem 0;
    border: 2px solid #1cc18e;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  `,
  signUpWrapper: css`
    width: 80%;
    min-height: 50%;
    margin: 50px auto;
    padding: 2rem 0;
    border: 2px solid #1cc18e;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  `,
  title: css`
    font-size: 2rem;
    font-weight: bold;
    color: #1cc18e;
  `,
  inputWrapper: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 80%;
    input {
      width: 100%;
      height: 2.5rem;
      border: 1px solid #1cc18e;
      border-radius: 5px;
      padding: 0 0.5rem;
      font-size: 1rem;
    }
  `,
  signInButton: css`
    width: 80%;
    height: 2.5rem;
    border: 1px solid #1cc18e;
    border-radius: 5px;
    background-color: #1cc18e;
    color: white;
    font-size: 1rem;
    font-weight: bold;
  `,
  imageInputWrapper: css`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  iconImage: css`
    padding: 5px;
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
  `,
  label: css`
    padding: 10px 40px;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    background-color: #1cc18e;
    cursor: pointer;
  `,
  inputFile: css`
    display: none;
  `,
  bottomButton: css`
    width: 100%;
    height: 2.5rem;
    border: 1px solid #1cc18e;
    border-radius: 5px;
    background-color: white;
    color: #1cc18e;
    font-size: 1rem;
    font-weight: bold;
  `,
  bottomBox: css`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  `,
  or: css`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 1.2rem;
    align-items: center;
  `,
  bar: css`
    flex: auto;
    border: none;
    height: 1px;
    background: #1cc18e;
  `,
  span: css`
    color: #1cc18e;
    padding: 0 0.8rem;
  `,
};

const Signin = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  return (
    <div css={styles.container}>
      <div css={styles.leftContainer}>
        <div css={styles.absLeftContainer}>
          <p>ClassMate</p>
          <p css={styles.catchCopy}>
            すべての出席が、ここに。
          </p>
          <div css={styles.waveWrapper}>
            <WaveAnimation />
          </div>
        </div>
      </div>
      <div css={styles.rightContainer}>
        {/* サインイン */}
        {isSignIn && (
          <div css={styles.signInWrapper}>
            <h1 css={styles.title}>Sign In</h1>
            <div css={styles.inputWrapper}>
              <p>Email</p>
              <input type="text" />
            </div>
            <div css={styles.inputWrapper}>
              <p>Password</p>
              <input type="password" />
            </div>
            <button css={styles.signInButton}>
              Sign in
            </button>
            <div css={styles.bottomBox}>
              <div css={styles.or}>
                <hr css={styles.bar} />
                <span css={styles.span}>OR</span>
                <hr css={styles.bar} />
              </div>
              <button
                css={styles.bottomButton}
                onClick={() => setIsSignIn(false)}
              >
                Create an account
              </button>
            </div>
          </div>
        )}
        {/* サインアップ */}
        {!isSignIn && (
          <div css={styles.signUpWrapper}>
            <h1 css={styles.title}>Sign Up</h1>
            <div css={styles.inputWrapper}>
              <p>Name</p>
              <input type="text" />
            </div>

            <div css={styles.inputWrapper}>
              <p>Email</p>
              <input type="text" />
            </div>
            <div css={styles.inputWrapper}>
              <p>Password</p>
              <input type="password" />
            </div>
            <div css={styles.inputWrapper}>
              <p>クラス</p>
              <input type="text" />
            </div>
            <div css={styles.inputWrapper}>
              <p>出席番号</p>
              <input type="number" />
            </div>
            <div css={styles.inputWrapper}>
              <p>アイコン画像</p>
              <div css={styles.imageInputWrapper}>
                <Image
                  css={styles.iconImage}
                  src={'/images/default_user_icon.png'}
                  alt={'default_user_icon'}
                  width={100}
                  height={100}
                />

                <label css={styles.label}>
                  Click to Upload
                  <input
                    type="file"
                    css={styles.inputFile}
                  />
                </label>
              </div>
            </div>
            <button css={styles.signInButton}>
              Sign up
            </button>
            <div css={styles.bottomBox}>
              <div css={styles.or}>
                <hr css={styles.bar} />
                <span css={styles.span}>OR</span>
                <hr css={styles.bar} />
              </div>
              <button
                css={styles.bottomButton}
                onClick={() => setIsSignIn(true)}
              >
                Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signin;
