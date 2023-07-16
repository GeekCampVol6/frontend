import { attends } from '@/demoData/attends';
import { css } from '@emotion/react';

const styles = {
  container: css`
    padding: 1rem;
    width: 80%;
    background-color: white;
    border: 2px solid #c11c1c;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    color: #333;
  `,
  latecomersWrapper: css`
    border: 2px solid #c1b61c;
    padding: 5px;
    border-radius: 10px;
  `,
  absenteesWrapper: css`
    border: 2px solid #c11c1c;
    padding: 5px;
    border-radius: 10px;
  `,
  latecomers_attendText: css`
    font-size: 1rem;
    color: #333;
    padding: 0 1rem;
    height: 34px;
    padding: 5px 0 3px 0px;
    border-bottom: 1px solid #c1b61c;
  `,
  absentees_attendText: css`
    font-size: 1rem;
    color: #333;
    padding: 0 1rem;
    height: 34px;
    padding: 5px 0 3px 0px;
    border-bottom: 1px solid #c11c1c;
  `,
};

const AttendCard = () => {
  const attendList = attends;
  return (
    <div css={styles.container}>
      <h2>遅刻・欠席</h2>
      <div css={styles.latecomersWrapper}>
        <h4>遅刻</h4>
        {attendList.latecomers?.map((latecomer, index) => (
          <p css={styles.latecomers_attendText} key={index}>
            {latecomer.attendance_number}: {latecomer.name}
          </p>
        ))}
      </div>
      <div css={styles.absenteesWrapper}>
        <h4>欠席</h4>
        {attendList.absentees.map((absentees, index) => (
          <p css={styles.absentees_attendText} key={index}>
            {absentees.attendance_number}: {absentees.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AttendCard;
