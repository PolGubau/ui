import type { ColorsType, IBoolean, MainSizesType, RoundedSizesTypes } from '../../types'
import type { PositionInButtonGroup } from '../ButtonGroup'

export interface ButtonTheme {
  base: string
  fullSized: string
  color: ColorsType
  disabled: string
  loading: string
  loaderSlot: string
  loaderLeftPosition: MainSizesType
  inner: ButtonInnerTheme
  label: string
  outline: ButtonOutlineTheme
  rounded: RoundedSizesTypes
  size: MainSizesType
}

export interface ButtonInnerTheme {
  base: string
  position: PositionInButtonGroup
  outline: string
  loadingPadding: MainSizesType
}

export interface ButtonOutlineTheme extends IBoolean {
  outlineBase: string
  color: ColorsType
}

export const buttonTheme: ButtonTheme = {
  base: 'group flex items-stretch outline-none items-center justify-center text-center w-auto relative focus:z-10 focus:outline-none transition-all focus:ring-offset-0 focus:ring-2 ',
  fullSized: 'w-full',
  color: {
    error:
      'text-error-50 dark:text-error-900 bg-error enabled:hover:brightness-90  enabled:focus:ring-error-700 focus:bg-error-600',
    info: 'text-info-50 dark:text-info-900 bg-info   enabled:hover:brightness-90  enabled:focus:ring-info-700  ',
    success:
      'text-success-50 dark:text-success-900 bg-success  enabled:hover:brightness-90  enabled:focus:ring-success-700  ',
    warning:
      'text-warning-50 dark:text-warning-900 bg-warning enabled:hover:brightness-90  enabled:focus:ring-warning-700',
    primary:
      'text-primary-50 dark:text-primary-900 bg-primary enabled:hover:brightness-90  enabled:focus:ring-primary-700',
    secondary:
      'text-secondary-50 dark:text-secondary-900 bg-secondary enabled:hover:brightness-90  focus:ring-secondary',
  },
  disabled: 'cursor-not-allowed opacity-50',
  loading: 'cursor-wait',
  loaderSlot: 'absolute h-full top-0 flex items-center animate-fade-in',
  loaderLeftPosition: {
    xs: 'left-2',
    sm: 'left-3',
    md: 'left-4',
    lg: 'left-5',
    xl: 'left-6',
  },
  inner: {
    base: 'flex gap-1 items-stretch items-center transition-all duration-200',
    position: {
      none: '',
      start: 'rounded-r-none',
      middle: 'rounded-none',
      end: 'rounded-l-none',
    },
    outline: 'border border-transparent',
    loadingPadding: {
      xs: 'pl-8',
      sm: 'pl-10',
      md: 'pl-12',
      lg: 'pl-16',
      xl: 'pl-20',
    },
  },
  label:
    'ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800',
  outline: {
    outlineBase:
      'enabled:hover:brightness-90  dark:enabled:hover:brightness-125 ring ring-1 focus:ring-4 focus:ring-offset-2',
    color: {
      error: 'text-error-900 dark:text-error-50  ring-error',
      info: 'text-info-900 dark:text-info-50  ring-info',
      success: 'text-success-900 dark:text-success-50  ring-success',
      warning: 'text-warning-900 dark:text-warning-50  ring-warning',
      primary: 'text-primary-900 dark:text-primary-50  ring-primary',
      secondary: 'text-secondary-900 dark:text-secondary-50  ring-secondary',
    },
    off: '',
    on: 'flex justify-center bg-transparent  transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit w-full',
  },

  rounded: {
    xs: 'rounded-sm',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
    none: 'rounded-none',
  },
  size: {
    xs: 'text-xs px-1.5 py-0.5',
    sm: 'text-sm px-2 py-1',
    md: 'text-sm px-3 py-2',
    lg: 'text-base px-4 py-2.5',
    xl: 'text-base px-6 py-3.5',
  },
}
