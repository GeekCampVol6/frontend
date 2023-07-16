import Calendar from "@/components/index/calendar";
import { css } from "@emotion/react";

const styles = {
    titleBox: css`
    border: 2px solid #1cc18e;
    width: 10vw;
    height: 3vh;
    `,
  };

export default function CalendarPage() {
    return (
      <>
        <main>

          <Calendar />

        </main>
      </>
    );
}