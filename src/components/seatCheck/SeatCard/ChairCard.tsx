import { css } from '@emotion/react';
import { useState } from 'react';

const styles = {
  chairCard: css`
    width: 50px;
    height: 50px;
  `,
  trueAttend: css`
    background-color: #1cc18e;
  `,
  falseAttend: css`
    background-color: #ccc;
  `,
};

type Props = {
  state: boolean;
};

const ChairCard = ({ state }: Props) => {
  const [isAttend, setIsAttend] = useState<boolean>(state);
  return (
    <div
      css={[
        styles.chairCard,
        isAttend ? styles.trueAttend : styles.falseAttend,
      ]}
      onClick={() => setIsAttend(!isAttend)}
    ></div>
  );
};

export default ChairCard;
