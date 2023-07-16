import Navbar from '@/components/elements/Navbar';
import CalendarPage from './calendar';

// import Signin from './signin';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <CalendarPage />
      </main>
    </>
  );
}
