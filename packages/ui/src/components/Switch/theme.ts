import type { ColorsType, IBoolean, MainSizesType } from "../../types"

export interface SwitchTheme {
  root: SwitchRootTheme
  toggle: SwitchToggleTheme
}

export interface SwitchRootTheme {
  base: string
  active: IBoolean
  label: string
}

export interface SwitchToggleTheme {
  base: string
  sizes: MainSizesType
  color: ColorsType
  checked: IBoolean
  handler: SwitchHandlerTheme
}

export interface SwitchHandlerTheme {
  base: string
}

export const switchTheme: SwitchTheme = {
  root: {
    /**
     * @name Base of the whole swithc component (selector + label)
     */
    base: "group relative flex items-center rounded-lg focus:outline-none transition-all",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50",
    },
    label:
      "ml-3 text-sm font-medium text-secondary-900 dark:text-secondary-300",
  },
  toggle: {
    base: "rounded-full border group-focus:ring-2 group-focus:ring-primary/25  flex items-center transition-all overflow-hidden",
    color: {
      error: "bg-error border-error-900",
      success: "bg-success border-success-500",
      warning: "bg-warning border-warning-600",
      info: "bg-info border-info-600",
      primary: "bg-primary border-primary-600",
      secondary: "bg-secondary border-secondary-400",
    },
    checked: {
      on: "justify-end",
      off: "justify-start	border-secondary-800 bg-transparent dark:border-secondary-600  opacity-50",
    },
    sizes: {
      xs: "w-8 h-5 p-px",
      sm: "w-9 h-6 p-[2px]",
      md: "w-12 h-7 p-[4px]",
      lg: "w-14 h-8 p-1",
      xl: "w-16 h-9 p-1",
    },
    handler: {
      base: "shadow-sm bg-secondary-50 rounded-full flex h-full aspect-square",
    },
  },
}
