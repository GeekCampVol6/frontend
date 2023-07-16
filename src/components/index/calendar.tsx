import React, { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocals from '@fullcalendar/core/locales/ja';
import { css } from '@emotion/react';
import interactionPlugin from '@fullcalendar/interaction';

import { useRef, useState } from 'react';
import { db } from '@/firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';

const styles = {
  wrap: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  containar: css `
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;


  `,
  titleBox: css`
    flex: 1;
    height: 10vh;
    margin: 2vh 1.5vw;
    border: 2px solid #1cc18e;
    border-radius: 10px;
    padding: 1vh 1vw;
  `,

  calendar: css`
    width: 80vw;
    padding: 3vh 3vw;
    margin: 2vh 1.5vw;
    border: 2px solid #1cc18e;
    border-radius: 10px;
  `,
  form: css`
  flex: 1;
  margin: 2vh 1.5vw;
  border: 2px solid #1cc18e;
  border-radius: 10px;
  padding: 1vh 1vw;

  `,
  btnDesign: css`

    padding: 0;
    font-family: inherit;
    appearance: none;
    cursor: pointer;
    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 320px;
    height: 3vh;
    padding: 8px 24px;
    font-family: sans-serif;
    font-size: 16px;
    color: #fff;
    text-align: center;
    overflow-wrap: anywhere;
    background-color: #1cc18e;
    border-radius: 10px; /* (buttonの高さ / 2) の値 */
  `
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


  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault(); // フォームの送信をキャンセル
    // handleSelectを呼び出すなどの追加の処理を行う
    // 例: handleSelect({ view: { calendar: null }, startStr: '', endStr: '', allDay: false });
    
    //   // ユーザ情報をStoreに登録
    //   console.log(1)
    //   try {

    //   console.log(2)
    //     await addDoc(collection(db, 'Users'),{
    //       class: MyClass,
    //       title: title,
    //       color: color,
    //       detail:{
    //         startDate: startTime,
    //         endDate: endTime,
    //         description: description
    //       }
    //     }).then(()=>{
    //         alert("登録完了")
    //     }).catch(()=>{
    //         alert("登録失敗")
    //     })
    // }
    // catch(err){
    //     alert('regist error')
    //     console.log("err:" + err);
    //     return
    // }


  };


  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description,setDescription] = useState('');
  const [MyClass, setClass] = useState('IH13A');


  return (
    <>
      <div css={styles.wrap}>

        <div css={styles.containar}>
          <div>
            <div css={styles.titleBox}>
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
                    onChange={(e)=>setTitle(e.target.value)} value={title}
                    css={"border: 2px solid #1cc18e; padding: 1vh 1vw; border-radius: 10px; margin: 1vh 0;"}
                  />
                  <br />
                  色選択
                  <input
                    type="text"
                    name="formcolor"
                    alt="色選択"
                    ref={eventColorRef}
                    onChange={(e)=>setColor(e.target.value)} value={color}
                    css={"border: 2px solid #1cc18e; padding: 1vh 1vw; border-radius: 10px; margin: 1vh 0"}
                  />
                  <br />
                  開始時間
                  <input
                    type="date"
                    name="formstart"
                    alt="開始時間"
                    ref={eventStartRef}
                    onChange={(e)=>setStartTime(e.target.value)} value={startTime}
                    css={"border: 2px solid #1cc18e; padding: 1vh 1vw; border-radius: 10px; margin: 1vh 0"}
                  />
                  <br />
                  終了時間
                  <input
                    type="date"
                    name="formend"
                    alt="終了時間"
                    ref={eventEndRef}
                    onChange={(e)=>setEndTime(e.target.value)} value={endTime}
                    css={"border: 2px solid #1cc18e; padding: 1vh 1vw; border-radius: 10px; margin: 1vh 0;"}
                  />
                  <br />
                  詳細情報
                  <input
                    type="text"
                    name="formdescription"
                    alt="詳細情報"
                    ref={eventDescriptionRef}
                    onChange={(e)=>setDescription(e.target.value)} value={description}
                    css={"border: 2px solid #1cc18e; padding: 1vh 1vw; border-radius: 10px; margin: 1vh 0;"}
                  />
                  <br />
                </label>
                <br />
                {/* <input type="button" value="submit" /> */}
                <button css={styles.btnDesign}>登録</button>
              </form>
            </div>
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
      </div>
    </>
  );
}
