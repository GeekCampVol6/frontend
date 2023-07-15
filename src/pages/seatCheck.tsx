import Navbar from '@/components/elements/Navbar';
import SubjectPullDawn from '@/components/seatCheck/SubjectPullDawn';
import { css } from '@emotion/react';

const styles = {
  container: css`
    padding: 2rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background-color: white;
    display: flex;
  `,
  leftContainer: css`
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  rightContainer: css`
    flex: 7;
    background-color: #666666;
  `,
};

const SeatCheck = () => {
  return (
    <main>
      <Navbar />
      <div css={styles.container}>
        <div css={styles.leftContainer}>
          <SubjectPullDawn />
        </div>
        <div css={styles.rightContainer}></div>
      </div>
    </main>
  );
};

export default SeatCheck;
