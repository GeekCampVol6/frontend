import { atom } from 'recoil';

interface ClassroomSeat {
  name: string;
  seats: {
    id: string;
    status: boolean;
  }[];
}

interface ClassroomSeats {
  classrooms: ClassroomSeat[];
}

export const seatState = atom<ClassroomSeats>({
  key: 'seatState',
});
