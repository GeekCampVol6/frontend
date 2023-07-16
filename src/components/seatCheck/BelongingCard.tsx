import { belongings } from '@/demoData/belongings';
import { subjectState } from '@/recoil/subjectAtom';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

const styles = {
  container: css`
    padding: 1rem;
    width: 80%;
    background-color: white;
    border: 2px solid #1cc18e;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    color: #333;
  `,
  belongingText: css`
    font-size: 1rem;
    color: #333;
    padding: 0 1rem;
    height: 34px;
    padding: 5px 0 3px 0px;
    border-bottom: 1px solid #1cc18e;
  `,
};

type Belongings = {
  subject: string;
  detail: { object: string }[] | undefined;
};

const BelongingCard = () => {
  const [subject, setSubject] =
    useRecoilState<string>(subjectState);

  // subectと一致する持ち物を表示する
  const belongingList: Belongings[] = belongings.filter(
    (belonging) => belonging.subject === subject
  );

  return (
    <div css={styles.container}>
      <h2>持ち物</h2>
      <div>
        {belongingList[0] &&
          belongingList[0].detail &&
          belongingList[0].detail.map((detail) => (
            <p
              css={styles.belongingText}
              key={detail.object}
            >
              {' '}
              {detail.object}
            </p>
          ))}
        {belongingList[0]?.detail?.length === 0 && (
          <p css={styles.belongingText}>
            持ち物はありません
          </p>
        )}
      </div>
    </div>
  );
};

export default BelongingCard;
