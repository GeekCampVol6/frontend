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
    </>
  );
}
