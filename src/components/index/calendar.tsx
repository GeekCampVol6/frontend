import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocals from '@fullcalendar/core/locales/ja';
import { css } from '@emotion/react';
import interactionPlugin from '@fullcalendar/interaction';
import { useRef } from 'react';

const styles = {
  wrap: css`
    max-width: 1200px;
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #62111176;
  `,
  calendar: css`
    max-width: 1200px;
    width: 100vw;
    height: 50vh;
    background-color: #ffffff;
  `,
  form: css`
    max-width: 1200px;
    width: 100vw;
    height: 50vh;
    background-color: #e13333;
  `,
};

export default function Calendar() {
  const eventNameRef = useRef<HTMLInputElement | null>(
    null
  );
  const eventColorRef = useRef<HTMLInputElement | null>(
    null
  );
  const eventStartRef = useRef<HTMLInputElement | null>(
    null
  );
  const eventEndRef = useRef<HTMLInputElement | null>(null);
  const eventDescriptionRef =
    useRef<HTMLInputElement | null>(null);

  const handleSelect = (info: any) => {
    const eventName = eventNameRef.current?.value;
    const eventDescription =
      eventDescriptionRef.current?.value;
    const eventColor = eventColorRef.current?.value;
    if (eventName) {
      const calendarApi = info.view.calendar;
      calendarApi.addEvent({
        title: eventName,
        color: eventColor,
        description: eventDescription,
        start: info.startStr,
        end: info.endStr,
        allDay: info.allDay,
      });
    }
  };

  const handleEventClick = (info: any) => {
    alert(
      'イベント名' +
        info.event.title +
        '\n' +
        'イベント説明' +
        info.event.extendedProps.description +
        '\n' +
        '期間' +
        info.event.startStr +
        '~' +
        info.event.endStr +
        'まで\n'
    );
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault(); // フォームの送信をキャンセル
    // handleSelectを呼び出すなどの追加の処理を行う
    // 例: handleSelect({ view: { calendar: null }, startStr: '', endStr: '', allDay: false });
  };

  return (
    <>
      <div css={styles.wrap}>
        <div css={styles.form}>
          <form
            action=""
            method="post"
            id="form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="">
              タイトル
              <input
                type="text"
                name="formeventName"
                alt="タイトル"
                ref={eventNameRef}
              />
              <br />
              　色選択
              <input
                type="text"
                name="formcolor"
                alt="色選択"
                ref={eventColorRef}
              />
              <br />
              開始時間
              <input
                type="date"
                name="formstart"
                alt="開始時間"
                ref={eventStartRef}
              />
              <br />
              終了時間
              <input
                type="date"
                name="formend"
                alt="終了時間"
                ref={eventEndRef}
              />
              <br />
              詳細情報
              <input
                type="text"
                name="formdescription"
                alt="詳細情報"
                ref={eventDescriptionRef}
              />
              <br />
            </label>
            <br />
            <input type="button" value="submit" />
          </form>
        </div>
        <div css={styles.calendar}>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locales={[jaLocals]}
            locale="ja"
            selectable={true}
            editable={true}
            select={handleSelect}
            eventClick={handleEventClick}
            eventTextColor="black"
          />
        </div>
      </div>
    </>
  );
}
