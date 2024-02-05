import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { FC } from 'react'
import { HiChartPie, HiInbox, HiShoppingBag } from 'react-icons/hi'
import { describe, expect, it } from 'vitest'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'
import type { SidebarProps } from './Sidebar'
import { Sidebar } from './Sidebar'
import { SidebarItem } from './SidebarItem'

describe('Components / Sidebar', () => {
  describe('A11y', () => {
    it('should use `aria-label` if provided', () => {
      render(<TestSidebar aria-label="My differently labelled sidebar" />)

      const sidebar = screen.getByLabelText('My differently labelled sidebar')

      expect(sidebar).toHaveAccessibleName('My differently labelled sidebar')
    })

    it('should use text content as accessible name in `Sidebar.Logo`', () => {
      render(<TestSidebar />)

      expect(logo()).toHaveAccessibleName('PolUi')
    })

    it('should use `imgAlt` as alternative text for image in `Sidebar.Logo` given `img=".." and imgAlt=".."`', () => {
      render(<TestSidebar />)

      const logoImg = screen.getByAltText('PolUi logo')

      expect(logoImg).toHaveAccessibleName('PolUi logo')
    })
  })
})

describe('Keyboard interactions', () => {
  it('should expand/collapse when `Space` is pressed on a `Sidebar.Collapse`', async () => {
    const user = userEvent.setup()
    render(<TestSidebar />)

    const collapseButton = collapseButtons()[0]

    await user.click(collapseButton)

    const collapse = collapses()[0]

    expect(collapse).toBeVisible()
  })

  it('should follow link when `Space` is pressed on `SidebarItem` with `href=".."`', () => {
    render(<TestSidebar />)

    const link = screen.getAllByRole('link')[1]

    expect(link).toHaveAccessibleName('Dashboard')
    expect(link).toHaveAttribute('href', '#')
  })

  it('should be possible to `Tab` out', async () => {
    const user = userEvent.setup()
    render(
      <>
        <TestSidebar />
        {/* eslint-disable-next-line jsx-a11y/role-has-required-aria-props */}
        <button role="checkbox">Outside</button>
      </>,
    )

    const outside = screen.getByText('Outside')

    await waitFor(async () => {
      await user.tab()

      expect(outside).toHaveFocus()
    })
  })
})

describe('Props', () => {
  it("shouldn't display text content in `Sidebar.Logo` when `collapsed={true}`", () => {
    render(<TestSidebar collapsed />)

    expect(logo().lastElementChild).toHaveClass('hidden')
  })

  it('should use the HTML element provided in `SidebarItem as=".."`', () => {
    render(<TestSidebar />)

    const asItem = screen.getByLabelText('My heading')

    expect(asItem.tagName.toLocaleLowerCase()).toEqual('h3')
  })
})

describe('Theme', () => {
  it('should use custom classes', () => {
    const theme: CustomPoluiTheme = {
      sidebar: {
        root: {
          base: 'bg-gray-100',
          collapsed: {
            off: 'text-gray-200',
            on: 'text-gray-300',
          },
          inner: 'bg-gray-200',
        },
      },
    }

    const { getByLabelText } = render(
      <PoluiProvider theme={{ theme }}>
        <TestSidebar aria-label="not-collapsed" />
        <TestSidebar aria-label="collapsed" collapsed />
      </PoluiProvider>,
    )
    const sidebar = getByLabelText('not-collapsed')
    const inner = sidebar.firstElementChild
    const collapsedSidebar = getByLabelText('collapsed')

    expect(sidebar).toHaveClass('bg-gray-100')
    expect(sidebar).toHaveClass('text-gray-200')
    expect(inner).toHaveClass('bg-gray-200')
    expect(collapsedSidebar).toHaveClass('text-gray-300')
  })

  describe('`Sidebar.Collapse`', () => {
    it('should use custom classes', async () => {
      const user = userEvent.setup()
      const theme: CustomPoluiTheme = {
        sidebar: {
          collapse: {
            button: 'text-gray-100',
            icon: {
              base: 'text-gray-200',
              open: {
                off: 'bg-gray-100',
                on: 'bg-gray-200',
              },
            },
            label: {
              base: 'text-gray-300',
              icon: {
                base: 'text-gray-400',
                open: {
                  on: '',
                  off: '',
                },
              },
            },
            list: 'bg-gray-300',
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <TestSidebar />
        </PoluiProvider>,
      )
      const labelIcons = collapseLabels().map(label => label.nextElementSibling)

      collapseIcons().forEach(icon => expect(icon).toHaveClass('text-gray-200 bg-gray-100'))
      collapseLabels().forEach(label => expect(label).toHaveClass('text-gray-300'))
      labelIcons.forEach(labelicon => expect(labelicon).toHaveClass('text-gray-400'))

      for (const button of collapseButtons()) {
        await user.click(button)
      }

      collapseIcons().forEach(icon => expect(icon).toHaveClass('bg-gray-200'))
    })
  })

  describe('`SidebarItem`', () => {
    it('should use custom classes', () => {
      const theme: CustomPoluiTheme = {
        sidebar: {
          item: {
            active: 'text-gray-100',
            base: 'bg-gray-100',
            collapsed: {
              insideCollapse: 'text-gray-300',
            },
            content: {
              base: 'bg-gray-200',
            },
            icon: {
              base: 'text-gray-400',
              active: 'bg-gray-300',
            },
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <TestSidebar collapsed />
        </PoluiProvider>,
      )
      const theItems = items()
        .map(item => item.firstElementChild)
        .map(item => item?.firstElementChild)
        .filter(item => item?.tagName.toLocaleLowerCase() !== 'button') as HTMLElement[]
      const activeItems = screen.getAllByTestId('active-item')
      const activeIcons = activeItems.map(item => item.firstElementChild)
      const inactiveIcons = [...collapseIcons().filter(icon => !activeIcons.includes(icon))]
      const inactiveItems = [...theItems.filter(item => item !== null && !activeItems.includes(item))]

      activeIcons.forEach(icon => expect(icon).toHaveClass('bg-gray-300'))
      activeItems.forEach(item => expect(item).toHaveClass('text-gray-100'))
      itemContents().forEach(content => expect(content).toHaveClass('bg-gray-200'))
      inactiveIcons.forEach(icon => expect(icon).not.toHaveClass('bg-gray-300'))
      inactiveItems.forEach(item => expect(item).not.toHaveClass('text-gray-100'))
      icons().forEach(icon => expect(icon).toHaveClass('text-gray-400'))
    })
  })

  describe('`SidebarItems`', () => {
    it('should use custom classes', () => {
      const theme: CustomPoluiTheme = {
        sidebar: {
          items: {
            base: 'text-gray-100',
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <TestSidebar />
        </PoluiProvider>,
      )

      itemsContainers().forEach(container => expect(container).toHaveClass('text-gray-100'))
    })
  })

  describe('`SidebarItemGroup`', () => {
    it('should use custom classes', () => {
      const theme: CustomPoluiTheme = {
        sidebar: {
          itemGroup: {
            base: 'text-gray-100',
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <TestSidebar />
        </PoluiProvider>,
      ),
        itemGroups().forEach(group => expect(group).toHaveClass('text-gray-100'))
    })
  })

  describe('`Sidebar.Logo`', () => {
    it('should use custom classes', () => {
      const theme: CustomPoluiTheme = {
        sidebar: {
          logo: {
            base: 'text-gray-100',
            collapsed: {
              off: 'text-gray-300',
              on: 'text-gray-400',
            },
            img: 'text-gray-200',
          },
        },
      }

      render(
        <PoluiProvider theme={{ theme }}>
          <TestSidebar />
        </PoluiProvider>,
      ),
        expect(logo()).toHaveClass('text-gray-100')
    })
  })
})

const TestSidebar: FC<SidebarProps> = ({ ...props }) => (
  <Sidebar {...props}>
    <Sidebar.Logo href="#" img="favicon.svg" imgAlt="PolUi logo">
      PolUi
    </Sidebar.Logo>

    <SidebarItem active data-testid="active-item" href="#" icon={HiChartPie} label="3" labelColor="success">
      Dashboard
    </SidebarItem>
    <Sidebar.Collapse aria-label="E-commerce" icon={HiShoppingBag}>
      <SidebarItem href="#">Products</SidebarItem>
      <SidebarItem href="#">Services</SidebarItem>
    </Sidebar.Collapse>
    <SidebarItem href="#" icon={HiInbox}>
      Inbox
    </SidebarItem>
    <SidebarItem as="h3">My heading</SidebarItem>
  </Sidebar>
)

const collapseButtons = () => screen.getAllByRole('button')

const collapses = () => screen.getAllByRole('list').slice(1)

const collapseIcons = () => screen.getAllByTestId('ui-sidebar-collapse-icon')

const collapseLabels = () => screen.getAllByTestId('ui-sidebar-collapse-label')

const itemContents = () => screen.getAllByTestId('ui-sidebar-item-content')

const itemGroups = () => screen.getAllByTestId('ui-sidebar-item-group')

const icons = () => screen.getAllByTestId('ui-sidebar-item-icon')

const items = () => screen.getAllByRole('listitem')

const itemsContainers = () => screen.getAllByTestId('ui-sidebar-items')

const logo = () => screen.getByLabelText('PolUi')
