import { HabitDay } from "./HabitDay";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { api } from "../lib/axios";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateDatesFromYearBeginning();
const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;
type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];
export function SumaryTable() {
  const [summary, setSummary] = useState<Summary>([]);
  useEffect(() => {
    api.get("summary").then((response) => {
      setSummary(response.data);
    });
  }, []);
  return (
    <div className="w-full flex sm:flex-col">
      <div className="grid grid-rows-7 sm:grid-rows-1 sm:grid-cols-[repeat(7,40px)] grid-flow-row gap-3 sm:m-auto md:gap-1">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl h-10 w-10 font-bold flex-items-center justify-center"
            >
              {weekDay}
            </div>
          );
        })}
      </div>
      <div className="grid grid-rows-7 sm:grid-flow-row grid-flow-col sm:grid-cols-[repeat(7,40px)] gap-3 md:gap-1 sm:m-auto">
        {summary.length > 0 &&
          summaryDates.map((date) => {
            const dayInSummary = summary.find((day) => {
              return dayjs(date).isSame(day.date, "day");
            });
            return (
              <HabitDay
                date={date}
                amount={dayInSummary?.amount}
                defaultCompleted={dayInSummary?.completed}
                key={date.toString()}
              />
            );
          })}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </div>
  );
}
