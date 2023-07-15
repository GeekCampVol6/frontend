import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocals from '@fullcalendar/core/locales/ja';
import { css } from '@emotion/react';
import interactionPlugin from '@fullcalendar/interaction';

const styles = {
  calendar: css`
    max-width: 1200px;
    width: 50vw;
    height: 10vh;
    background-color: #ffffff;
  `,
};

export default function Calendar() {
  const handleSelect = (info: any) => {
    const eventName = prompt('イベントを入力してください');
    const eventDescription = prompt(
      'イベントの説明を入力してください'
    );
    const eventColor = prompt(
      'イベントの色を入力してください'
    );
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

  return (
    <>
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
    </>
  );
}
