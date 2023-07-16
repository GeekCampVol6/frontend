import { css } from '@emotion/react';
import SeatDescription from './SeatCard/SeatDescription';
import SeatTable from './SeatCard/SeatTable';

const styles = {
  container: css`
    padding: 1rem;
    width: 100%;
    height: 100%;
    background-color: white;
    border: 2px solid #1cc18e;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    color: #333;
  `,
  description: css`
    width: fit-content;
  `,
};

const SeatCard = () => {
  return (
    <div css={styles.container}>
      <div css={styles.description}>
        <SeatDescription />
      </div>
      <SeatTable />
    </div>
  );
};

export default SeatCard;
