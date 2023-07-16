import { css } from '@emotion/react';
import ChairCard from './ChairCard';

const styles = {
  container: css`
    padding: 0 20px 10px 20px;
    width: 100%;
    height: 100%;
    background-color: white;
    border-right: 2px solid #666;
    border-left: 2px solid #666;
    border-bottom: 2px solid #666;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    gap: 2rem;
    text-align: center;
    color: #333;
  `,
  chairInfo: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: #333;
  `,
};

const SeatDescription = () => {
  return (
    <div css={styles.container}>
      <div css={styles.chairInfo}>
        <ChairCard state={true} />
        <p>緑:着席</p>
      </div>
      <div css={styles.chairInfo}>
        <ChairCard state={false} />
        <p>灰:未着席</p>
      </div>
    </div>
  );
};

export default SeatDescription;
