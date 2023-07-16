import React, { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocals from '@fullcalendar/core/locales/ja';
import { css } from '@emotion/react';
import interactionPlugin from '@fullcalendar/interaction';

const styles = {
  wrap: css`
    max-width: 1500px;
    width: 100vw;
    height: 80vh;
    display: flex;
    margin: auto;
    background-color: #62111176;
  `,
  calendar: css`
    max-width: 1200px;
    width: 100%;
    height: 80vh;
    background-color: #ffffff;
  `,
  event: css`
    max-width: 1200px;
    width: 100%;
    height: 20vh;
    background-color: #ffffff;
  `,
  form: css`
    max-width: 1200px;
    width: 100%;
    height: 20vh;
    background-color: #e13333;
  `,
};

export default function Calendar() {
  const eventNameRef = useRef(null);
  const eventColorRef = useRef(null);
  const eventStartRef = useRef(null);
  const eventEndRef = useRef(null);
  const eventDescriptionRef = useRef(null);
  const calendarRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // JSON ファイルを読み込む関数
    const fetchEvents = async () => {
      try {
        const response = await fetch('events.json');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (info: any) => {
    setSelectedEvent(info.event);
  };

  const handleSelect = (info: any) => {
    const eventName = eventNameRef.current.value;
    const eventDescription =
      eventDescriptionRef.current.value;
    const eventColor = eventColorRef.current.value;
    if (eventName) {
      const calendarApi = calendarRef.current.getApi();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventName = eventNameRef.current.value;
    const eventDescription =
      eventDescriptionRef.current.value;
    const eventColor = eventColorRef.current.value;
    const calendarApi = calendarRef.current.getApi();
    if (eventName && calendarApi) {
      calendarApi.addEvent({
        title: eventName,
        color: eventColor,
        description: eventDescription,
        start: eventStartRef.current.value,
        end: eventEndRef.current.value,
      });
      e.currentTarget.reset();
    }
  };

  return (
    <>
      <div css={styles.wrap}>
        <div css={styles.event}>
          {selectedEvent && (
            <div>
              <h3>イベント情報</h3>
              <p>イベント名: {selectedEvent.title}</p>
              <p>
                説明:{' '}
                {selectedEvent.extendedProps.description}
              </p>
              <p>
                期間: {selectedEvent.startStr} 〜{' '}
                {selectedEvent.endStr}
              </p>
            </div>
          )}
        </div>
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
              <button type="submit">挿入</button>
            </label>
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
            events={events}
            eventClick={handleEventClick}
            eventTextColor="black"
            ref={calendarRef}
          />
        </div>
      </div>
    </>
  );
}
