import "./styles/global.css";
import "./lib/dayjs";
import { Header } from "./components/Header";
import { SumaryTable } from "./components/SumaryTable";
//import { Habit } from "./components/Habit"

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center sm:items-stretch sm:mt-12 sm:w-full">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16 md:gap-6">
        <Header />
        <SumaryTable />
      </div>
    </div>
  );
}
