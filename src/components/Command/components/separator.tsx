import React from 'react'
import { cn, mergeDeep } from '../../../helpers'
import { mergeRefs } from '../../../helpers/mergeRefs/mergeRefs'
import { getTheme } from '../../../theme-store'
import { useCmdk } from '../hooks'
import type { SeparatorProps } from '../types'

/**
 * A visual and semantic separator between items or groups.
 * Visible when the search query is empty or `alwaysRender` is true, hidden otherwise.
 */
export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>((props, forwardedRef) => {
  const { alwaysRender, theme: customTheme = {}, ...etc } = props
  const ref = React.useRef<HTMLDivElement>(null)
  const render = useCmdk(state => !state.search)
  const theme = mergeDeep(getTheme().divider, customTheme)

  if (!alwaysRender && !render) return null
  return (
    <div
      ref={mergeRefs([ref, forwardedRef])}
      {...etc}
      data-command-separator=""
      role="separator"
      className={cn('h-px dark:bg-secondary-800 bg-secondary-200', props.className)}
    />
  )
})
Separator.displayName = 'Separator'
