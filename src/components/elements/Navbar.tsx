import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const styles = {
  container: css`
    width: 100%;
    background-color: white;
  `,
  navbar: css`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  leftNav: css`
    display: flex;
    align-items: center;
    gap: 50px;
  `,
  logoWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1.7rem;
    font-weight: bold;
  `,
  buttonList: css`
    color: #333333;
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 1rem;
    font-weight: bold;
  `,
  link: css`
    transition: all 0.3s ease-in-out;
    /* hover */
    &:hover {
      color: #1cc18e;
    }
  `,
  rightNav: css`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  dateText: css`
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  dateTextLeft: css`
    color: #333333;
    font-size: 2.2rem;
  `,
  dateTextRight: css`
    color: #666666;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    line-height: 1rem;
  `,
  profileLink: css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
  `,
};

const Navbar = () => {
  // 現在の日付を取得
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  // 英語の略語の曜日を取得
  const dayOfWeek = today.toLocaleDateString('en-US', {
    weekday: 'short',
  });

  return (
    <div css={styles.container}>
      <div css={styles.navbar}>
        <div css={styles.leftNav}>
          <Link href={'/'} css={styles.logoWrapper}>
            <Image
              src={'/images/icon.png'}
              alt={'icon'}
              width={80}
              height={80}
            />
            <p>ClassMate</p>
          </Link>
          <div css={styles.buttonList}>
            <Link href={'/seatCheck'} css={styles.link}>
              座席
            </Link>
            <Link href={'/'} css={styles.link}>
              カレンダー
            </Link>
          </div>
        </div>

        <div css={styles.rightNav}>
          <div css={styles.dateText}>
            <p css={styles.dateTextLeft}>
              {month}.{date}
            </p>
            <div css={styles.dateTextRight}>
              <p>{dayOfWeek}</p>
              <p>{year}</p>
            </div>
          </div>
          <Link href={'/profile'} css={styles.profileLink}>
            <Image
              src={'/images/ka.png'}
              alt={'user icon'}
              width={80}
              height={80}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
