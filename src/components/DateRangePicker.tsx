"use client"

import * as React from "react"
import { addDays, format, startOfMonth, endOfMonth } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  onUpdate?: (values: { range: DateRange }) => void;
  initialDateRange?: DateRange;
}

export default function DateRangePicker({
  className,
  onUpdate,
  initialDateRange,
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(initialDateRange);
  const [isOpen, setIsOpen] = React.useState(false);

  console.log('DateRangePicker loaded');

  React.useEffect(() => {
    if (date) {
      onUpdate?.({ range: date });
    }
  }, [date, onUpdate]);

  const handlePreset = (preset: 'today' | 'last7' | 'last30' | 'thisMonth') => {
    const now = new Date();
    let newDate: DateRange | undefined;
    switch (preset) {
      case 'today':
        newDate = { from: now, to: now };
        break;
      case 'last7':
        newDate = { from: addDays(now, -6), to: now };
        break;
      case 'last30':
        newDate = { from: addDays(now, -29), to: now };
        break;
      case 'thisMonth':
        newDate = { from: startOfMonth(now), to: endOfMonth(now) };
        break;
    }
    setDate(newDate);
    setIsOpen(false);
  };
  
  const handleDateSelect = (selectedDate: DateRange | undefined) => {
    setDate(selectedDate);
    if(selectedDate?.from && selectedDate?.to) {
        setIsOpen(false);
    }
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 flex" align="start">
          <div className="flex flex-col space-y-2 p-4 pr-2 border-r border-gray-200">
             <Button variant="ghost" className="justify-start" onClick={() => handlePreset('today')}>Today</Button>
             <Button variant="ghost" className="justify-start" onClick={() => handlePreset('last7')}>Last 7 Days</Button>
             <Button variant="ghost" className="justify-start" onClick={() => handlePreset('last30')}>Last 30 Days</Button>
             <Button variant="ghost" className="justify-start" onClick={() => handlePreset('thisMonth')}>This Month</Button>
          </div>
          <div className="p-2">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={handleDateSelect}
              numberOfMonths={2}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}