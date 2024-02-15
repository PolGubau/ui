import type { Meta, StoryFn } from '@storybook/react'
import type { ImageTrailProps } from './ImageTrail'
import { ImageTrail } from './ImageTrail'
import { TbMouse } from 'react-icons/tb'

export default {
  title: 'Components/ImageTrail',
  component: ImageTrail,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="flex p-6 flex-col w-full min-h-[400px] justify-center items-center bg-secondary-50">
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<ImageTrailProps> = args => <ImageTrail {...args} />

export const Default = Template.bind({})
Default.args = {
  renderImageBuffer: 50,
  rotationRange: 20,
  children: (
    <section className="flex h-[400px] w-full place-content-center bg-primary-200">
      <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black">
        <TbMouse />
        <span>Hover me</span>
      </p>
    </section>
  ),
  images: [
    'https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/59992/crocus-flower-spring-purple-59992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/139205/pexels-photo-139205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/45180/crocus-flowers-violet-spring-45180.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
}
