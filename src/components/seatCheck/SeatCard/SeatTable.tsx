import { classroomSeats } from '@/demoData/classroomSeats';
import { subjects } from '@/demoData/subjects';
import { subjectState } from '@/recoil/subjectAtom';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import ChairCard from './ChairCard';
import { seatState } from '@/recoil/seatAtom';
import { useEffect } from 'react';

const styles = {
  container: css`
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  `,
};

const SeatTable = () => {
  const [subject, setSubject] =
    useRecoilState(subjectState);
  // 座席情報の状態
  //   const [seat, setSeat] = useRecoilState(seatState);

  //subjectから現在の教室名を取得する
  const crrSubject = subjects.find(
    (data) => data.name === subject
  );

  // subectから現在の教室名を取得する
  const classroomSeatList = classroomSeats.classrooms.find(
    (data: { name: string | undefined }) =>
      data.name === crrSubject?.rooms[0].name
  );

  //   useEffect(() => {
  //     // 座席情報の初期化
  //     setSeat(classroomSeats);
  //   }, []);

  return (
    <div css={styles.container}>
      {classroomSeatList?.seats?.map((seat) => (
        <div key={seat.id}>
          <ChairCard state={seat.status} />
        </div>
      ))}
    </div>
  );
};

export default SeatTable;
