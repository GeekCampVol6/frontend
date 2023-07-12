import Link from 'next/link';
import { css } from '@emotion/react';

const linkStyle = css`
  color: red;
  margin: auto;
  padding: 30px 0;
  vertical-align: middle;
  height: 100px;
  width: 150px;
  font-size: 25px;
  text-align: center;
  background-color: blue;
  border-radius: 10px;

  &:hover {
    color: white;
    background-color: darkblue;
  }
`;

const header = css`
  color: red;
  text-decoration: none;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: gray;
  display: flex;
`;

const body = css`
  color: red;
  text-decoration: none;
  align-items: center;
  height: 800px;
  width: 90%;
  background-color: yellow;
  display: flex;
  margin: auto;
  text-align: center;
  overflow: auto;
  bottom: 0;
`;

const text = css`
  color: red;
  margin: auto;
  padding: 30px 0;
  vertical-align: middle;
  height: 100px;
  width: 150px;
  font-size: 25px;
  text-align: center;
  background-color: white;
  border-radius: 10px;

  &:hover {
    color: black;
    outline: solid 10px darkblue;
  }
`;
const btn = css`
  color: black;
  margin: auto;
  padding: 30px 0;
  vertical-align: middle;
  height: 100px;
  width: 150px;
  font-size: 25px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  outline: solid 5px darkblue;

  &:hover {
    color: black;
    outline: solid 10px darkblue;
  }
`;

export default function Setting() {
  return (
    <>
      <div id="header" css={header}>
        <Link href="/" passHref css={linkStyle}>
          イベント
        </Link>
        <Link href="/" passHref css={linkStyle}>
          予定表
        </Link>
        <Link href="/setting" passHref css={linkStyle}>
          設定
        </Link>
        <Link href="/" passHref css={linkStyle}>
          ログアウト
        </Link>
      </div>
      <div css={body}>
        <input type="text" name="masu" id="" css={text} />
        <input type="button" value="追加" css={btn} />
      </div>
    </>
  );
}
