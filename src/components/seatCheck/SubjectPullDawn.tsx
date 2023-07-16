import { subjects } from '@/demoData/subjects';
import { subjectState } from '@/recoil/subjectAtom';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

const styles = {
  container: css`
    width: 80%;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    &:before {
      position: absolute;
      top: 0.8em;
      right: 0.8em;
      width: 0;
      height: 0;
      padding: 0;
      content: '';
      border-left: 6px solid #ffffff;
      border-right: 6px solid #ffffff;
      border-top: 6px solid #333;
      pointer-events: none;
    }
  `,
  selectWrpper: css`
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    padding: 0 1rem;
    height: 34px;
    padding: 5px 0 5px 5px;
    background: transparent;
    -webkit-appearance: none;
    cursor: pointer;
  `,
};

const SubjectPullDawn = () => {
  const [subject, setSubject] =
    useRecoilState(subjectState);

  useEffect(() => {
    const firstSubject = subjects[0];
    setSubject(firstSubject.name);
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setSubject(selectedValue);
  };
  const subjectList = subjects.map((subject) => (
    <option key={subject.name} value={subject.name}>
      {subject.name} :{' '}
      {subject.rooms.map((room) => room.name).join(', ')}
    </option>
  ));
  console.log(subject);
  return (
    <div css={styles.container}>
      <select
        css={styles.selectWrpper}
        onChange={handleChange}
      >
        {subjectList}
      </select>
    </div>
  );
};

export default SubjectPullDawn;
