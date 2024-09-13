import { isSameDay } from "date-fns"

import { cn } from "../../../helpers"
import { DayOfMonth } from "../../../helpers/dates"
import { Button } from "../../Button"
import { Event } from "../types"

interface DayProps {
  day: DayOfMonth
  selected: Date
  setSelected: (date: Date) => void
  events?: Event[]
}
const Day = ({ day, selected, setSelected, events }: DayProps) => {
  return (
    <Button
      className={cn(
        "p-4 flex flex-col items-center justify-center rounded-lg",
        {
          "bg-primary-500 text-white": isSameDay(day.dateObj, selected),
          "opacity-50": !day.inCurrentMonth,
        }
      )}
      variant={"ghost"}
      data-active-month={day.inCurrentMonth}
      data-selected={isSameDay(day.dateObj, selected)}
      onClick={(): void => {
        setSelected(day.dateObj)
      }}
    >
      <span>{day.dateObj.getDate()}</span>
      <ul>{events?.map((event, i) => <li key={i}>{event.name}</li>)}</ul>
    </Button>
  )
}

export default Day