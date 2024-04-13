import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { mergeDeep } from '../../../helpers/merge-deep/merge-deep'
import { useDatePickerContext } from '../DatepickerContext'
import { Views, addYears, isDateInDecade, isDateInRange, startOfYearPeriod } from '../helpers'
import { Button } from '../../Button'
import type { IBoolean } from '../../../types'

export interface DatepickerViewsDecadesTheme {
  items: {
    base: string
    item: {
      base: string
      selected: IBoolean
      disabled: string
    }
  }
}

export interface DatepickerViewsDecadesProps {
  theme?: DatepickerViewsDecadesTheme
}

export const DatepickerViewsDecades: FC<DatepickerViewsDecadesProps> = ({ theme: customTheme = {} }) => {
  const { theme: rootTheme, selectedDate, viewDate, setViewDate, setView, minDate, maxDate } = useDatePickerContext()

  const theme = mergeDeep(rootTheme.views.decades, customTheme)

  return (
    <div className={theme.items.base}>
      {[...Array(12)].map((_year, index) => {
        const first = startOfYearPeriod(viewDate, 100)
        const year = first - 10 + index * 10

        const isSelected = isDateInDecade(viewDate, year)
        const isDisabled = !isDateInRange(viewDate, minDate, maxDate)

        return (
          <Button
            disabled={isDisabled}
            key={index}
            type="button"
            className={twMerge(
              theme.items.item.base,
              theme.items.item.selected[isSelected ? 'on' : 'off'],
              isDisabled && theme.items.item.disabled,
            )}
            onClick={() => {
              if (isDisabled) return

              setViewDate(addYears(viewDate, year - selectedDate.getFullYear()))
              setView(Views.Years)
            }}
          >
            {year}
          </Button>
        )
      })}
    </div>
  )
}
