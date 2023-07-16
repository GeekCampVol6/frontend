import Navbar from "@/components/elements/Navbar";
import Calendar from "@/components/index/calendar";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const styles = {
    titleBox: css`
    border: 2px solid #1cc18e;
    width: 10vw;
    height: 3vh;
    `,
  };

export default function CalendarPage() {

  const router = useRouter();
  const {key} = router.query;

  const [loginStatus, setStatus] = useState(false)

  useEffect(() => {
    if (key == undefined || key == null){
      router.push("./signin");
    }

  }, []); // countが変更されたときのみ副作用を実行


    return (
      <>
        <main>

        <Navbar />
        <Calendar />
        </main>
      </>
    );
}