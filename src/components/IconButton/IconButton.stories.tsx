import type { Meta, StoryFn } from '@storybook/react'
import { IconButton, type IconButtonProps } from './IconButton'
import { theme } from '../../theme'
import { TbSearch, TbTrash } from 'react-icons/tb'
import { ColorsEnum } from '../../types/enums'
import type { MainSizes, Colors, RoundedSizes } from '../../types'

export default {
  title: 'Components/IconButton',
  decorators: [
    Story => (
      <div className="flex p-6 flex-col justify-center items-center min-h-40 bg-secondary-50 dark: dark:bg-secondary-900">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },

  component: IconButton,
  tags: ['button', 'autodocs'],
  argTypes: {
    color: {
      options: Object.keys(theme.iconButton.color),
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
    fullSized: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    rounded: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full', 'none'],
      control: { type: 'inline-radio' },
    },
    href: {
      control: { type: 'text' },
    },
    target: {
      control: { type: 'text' },
    },
  },
} as Meta

const Template: StoryFn<IconButtonProps> = args => <IconButton {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.storyName = 'Default'
DefaultButton.parameters = {
  docs: {
    description: {
      story: 'The default for displaying icons as button',
    },
  },
}
DefaultButton.args = {
  children: <TbSearch />,
  label: 'Search',
}
export const WithMotion = Template.bind({})
WithMotion.parameters = {
  docs: {
    description: {
      story: 'The default for displaying icons as button',
    },
  },
}
WithMotion.args = {
  children: <TbSearch />,
  hasMotion: true,
  label: 'Search',
}

export const OutlineButton = Template.bind({})
OutlineButton.storyName = 'Outline'
OutlineButton.args = {
  ...DefaultButton.args,
  outline: true,
}
export const WithoutTooltip = Template.bind({})
WithoutTooltip.parameters = {
  docs: {
    description: {
      story: 'You can add a tooltip to the button by adding a `label` prop',
    },
  },
}
WithoutTooltip.args = {
  ...DefaultButton.args,
  label: undefined,
}
export const Processing = Template.bind({})
Processing.args = {
  ...DefaultButton.args,
  loading: true,
}
export const Disabled = Template.bind({})
Disabled.args = {
  ...DefaultButton.args,
  disabled: true,
}

export const Transparent = Template.bind({})
Transparent.args = {
  ...DefaultButton.args,
  rounded: 'xl',
  className: 'bg-secondary-50 text-black dark:text-white',
}
export const Link = Template.bind({})
Link.args = {
  ...DefaultButton.args,
  href: 'https://www.polgubau.com',
  target: '_blank',
}

export const Rounded = (args: IconButtonProps) => (
  <div className="flex gap-3 flex-wrap">
    {Object.keys(theme.button.rounded).map(v => (
      <div className="flex flex-col gap-4" key={v}>
        <span>{v}</span>
        <IconButton {...args} rounded={v as RoundedSizes}>
          <TbTrash />
        </IconButton>
      </div>
    ))}
  </div>
)
export const Sizes = (args: IconButtonProps) => (
  <div className="flex gap-3 flex-wrap items-start text-center">
    {Object.keys(theme.button.size).map(size => (
      <div className="flex flex-col gap-4" key={size}>
        <span>{size}</span>
        <IconButton {...args} size={size as MainSizes}>
          <TbTrash />
        </IconButton>
      </div>
    ))}
  </div>
)
export const AllColors = (args: IconButtonProps) => (
  <section className="flex gap-12 flex-wrap">
    <div className="flex gap-3 flex-col bg-secondary-50 p-4 rounded-xl">
      <h3 className="text-black text-xl">Light Mode</h3>
      <div className="flex gap-3 flex-wrap">
        {Object.keys(ColorsEnum).map(v => (
          <div className="flex flex-col gap-4" key={v}>
            <span>{v}</span>
            <IconButton {...args} color={v as Colors}>
              <TbTrash />
            </IconButton>
          </div>
        ))}
      </div>{' '}
    </div>
    <div className="flex gap-3 flex-col bg-secondary-900 p-4 rounded-xl">
      <h3 className="text-white text-xl">Dark Mode</h3>
      <div className="flex gap-3 flex-wrap">
        {Object.keys(ColorsEnum).map(v => (
          <div className="flex flex-col gap-4" key={v}>
            <span className="text-secondary-200">{v}</span>
            <IconButton {...args} color={v as Colors}>
              <TbTrash size={20} />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  </section>
)
