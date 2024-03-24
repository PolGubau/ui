'use client'

import * as React from 'react'

import type { ButtonProps } from '../Button'
import { Button } from '../Button'
import { TbCheck, TbChevronDown } from 'react-icons/tb'
import { cn } from '../../helpers'
import { Command } from '../Command'
import { useBoolean } from '../../hooks'
import { CommandGroup } from '../Command/Command'
import { Tooltip } from '../Tooltip'

// value + label compulsory, any other prop allowed but won't be used
export interface AutocompleteOption {
  value: string
  label: string
  [key: string]: unknown
}

export interface AutocompleteProps extends Omit<ButtonProps, 'onChange' | 'value'> {
  value?: AutocompleteOption
  onChange?: (value: AutocompleteOption | undefined) => void
  placeholder?: string
  noFoundText?: React.ReactNode
  options: AutocompleteOption[]
  trigger?: React.ReactNode
  popupClassName?: string
  className?: string
  closeOnSelect?: boolean
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  onChange,
  value: externalValue,
  placeholder,
  noFoundText = 'Nothing found...',
  options = [],
  trigger,
  popupClassName,
  className,
  closeOnSelect = true,
  ...props
}: AutocompleteProps) => {
  const { value: open, setFalse, setValue } = useBoolean(false)
  const [value, setState] = React.useState<AutocompleteOption | undefined>(externalValue)

  const handleSend = (newValue: AutocompleteProps['value']) => {
    setState(newValue)
    onChange?.(newValue)
  }

  React.useEffect(() => {
    setState(externalValue)
  }, [externalValue])

  const handleOnChange = (currentValue: string) => {
    const obj = options.find(x => x.value === currentValue) // find the object by value
    handleSend(obj === value ? undefined : obj) // if the same value is selected, set to undefined
    setFalse()
  }
  const popupRef = React.useRef<HTMLDivElement>(null)

  // focus the popup input when the popup is opened
  React.useEffect(() => {
    if (open) {
      popupRef.current?.querySelector('input')?.focus()
    }
  }, [open])

  return (
    <Tooltip
      open={open}
      setOpen={state => {
        closeOnSelect && setValue(state)
      }}
      trigger="click"
      className="p-0"
      content={
        <Command className={cn('bg-secondary-50 min-w-[200px]', popupClassName)} ref={popupRef}>
          <Command.Input placeholder={placeholder} className="h-10" />
          <Command.List>
            <Command.Empty>{noFoundText}</Command.Empty>

            <CommandGroup>
              {options.map(o => (
                <Command.Item
                  key={o.value}
                  value={o.value}
                  onSelect={handleOnChange}
                  className="
            aria-selected:bg-primary/30"
                >
                  {o.label}
                  <TbCheck className={cn('ml-auto h-4 w-4', value === o ? 'opacity-100' : 'opacity-0')} />
                </Command.Item>
              ))}
            </CommandGroup>
          </Command.List>
        </Command>
      }
    >
      {trigger ?? (
        <Button
          type="button"
          {...props}
          value={value?.value ?? ''}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          outline
          role="combobox"
          aria-expanded={open}
          className={cn('flex justify-between min-w-[200px]', className)}
          innerClassname="flex justify-between "
        >
          {value ? value.label : placeholder ?? 'Select'}
          <TbChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      )}
    </Tooltip>
  )
}
