import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { PropsWithChildren } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { describe, expect, it, vi } from 'vitest'
import { PoluiProvider, type CustomPoluiTheme } from '../PoluiProvider'
import { IconButton } from './IconButton'

describe('Components / IconButton', () => {
  describe('A11y', () => {
    it('should have `role="IconButton"` by default', () => {
      render(<IconButton>Hi there</IconButton>)

      expect(iconButton()).toBeInTheDocument()
    })

    it('should be able to use any other role permitted for `<IconButton>`s', () => {
      render(<IconButton role="menuitem">Hi there</IconButton>)

      expect(screen.getByRole('menuitem')).toBeInTheDocument()
    })
  })

  describe('Keyboard interactions', () => {
    it('should trigger `onClick` when `Space` is pressed', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()

      render(<IconButton onClick={onClick}>Hi there</IconButton>)

      await user.click(IconButton())

      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('should focus when `Tab` is pressed', async () => {
      const user = userEvent.setup()
      render(<IconButton>Hi there</IconButton>)

      await user.tab()

      expect(iconButton()).toHaveFocus()
    })

    describe('Props', () => {
      it('should allow HTML attributes for `<IconButton>`s', () => {
        render(
          <IconButton formAction="post.php" type="submit">
            Hi there
          </IconButton>,
        )

        expect(iconButton()).toHaveAttribute('formAction', 'post.php')
        expect(iconButton()).toHaveAttribute('type', 'submit')
      })

      it('should be disabled when `disabled={true}`', () => {
        render(<IconButton disabled>Hi there</IconButton>)

        expect(iconButton()).toBeDisabled()
      })

      it('should show <Loader /> when `isProcessing={true}`', () => {
        render(<IconButton isProcessing>Hi there</IconButton>)

        expect(screen.getByText(/Hi there/)).toBeInTheDocument()
        expect(screen.getByRole('IconButton')).toBeInTheDocument()
      })

      it('should show custom Loader when `isProcessing={true}` and `processingLoader` is present', () => {
        render(
          <IconButton isProcessing processingLoader={<AiOutlineLoading data-testid="Loader" />}>
            Hi there
          </IconButton>,
        )

        expect(screen.getByText(/Hi there/)).toBeInTheDocument()
        expect(screen.getByTestId('Loader')).toBeInTheDocument()
      })
    })

    describe('Rendering', () => {
      it('should render when `children={0}`', () => {
        render(<IconButton>0</IconButton>)

        expect(iconButton()).toHaveTextContent('0')
      })

      it('should render when `children={undefined}`', () => {
        render(<IconButton label="Something or other" />)

        expect(iconButton()).toHaveTextContent('Something or other')
      })

      describe('`as` and `href` props', () => {
        it('should render an anchor `<a>` when `href=".."`', () => {
          render(<IconButton href="#" label="Something or other" />)

          expect(iconButtonLink()).toBeInTheDocument()
        })

        it('should render component defined in `as`', () => {
          const CustomComponent = ({ children }: PropsWithChildren<{ uniqueProp: boolean }>) => {
            return <li>{children}</li>
          }

          render(
            <ul>
              <IconButton as={CustomComponent} uniqueProp>
                Something or other
              </IconButton>
            </ul>,
          )

          const iconButton = iconButtonListItem()

          expect(iconButton).toBeInTheDocument()
          expect(iconButton).toHaveTextContent('Something or other')
        })

        it('should render component defined in `as` prop even though `href` is defined', () => {
          const CustomComponent = ({ children }: PropsWithChildren) => {
            return <li>{children}</li>
          }

          render(
            <ul>
              <IconButton href="#" as={CustomComponent} label="Something or other" />
            </ul>,
          )

          expect(iconButtonListItem()).toBeInTheDocument()
        })

        it('should render tag element defined in `as`', () => {
          render(
            <ul>
              <IconButton as="li" label="Something or other" />
            </ul>,
          )

          expect(iconButtonListItem()).toBeInTheDocument()
        })

        it('should render as IconButton `as={null}`', () => {
          render(
            <ul>
              <IconButton as={null} label="Something or other" />
            </ul>,
          )

          expect(iconButton()).toBeInTheDocument()
        })
      })
    })

    describe('Theme', () => {
      it('should use `base` classes', () => {
        const theme: CustomPoluiTheme = {
          iconButton: {
            base: 'font-extralight',
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <IconButton />
          </PoluiProvider>,
        )

        expect(iconButton()).toHaveClass('font-extralight')
      })

      it('should use `color` classes', () => {
        const theme: CustomPoluiTheme = {
          iconButton: {
            color: {
              primary: 'bg-red-300',
            },
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <IconButton color="primary" />
          </PoluiProvider>,
        )

        expect(iconButton()).toHaveClass('bg-red-300')
      })

      it('should use `disabled` classes', () => {
        const theme: CustomPoluiTheme = {
          iconButton: {
            disabled: 'opacity-10',
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <IconButton disabled />
          </PoluiProvider>,
        )

        expect(iconButton()).toHaveClass('opacity-10')
      })

      it('should use `inner` classes', () => {
        const theme: CustomPoluiTheme = {
          iconButton: {
            inner: {
              base: 'font-extralight',
            },
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <IconButton>Hi there</IconButton>
          </PoluiProvider>,
        )

        const iconButtonInnerContent = screen.getByText('Hi there')

        expect(iconButtonInnerContent).toHaveClass('font-extralight')
      })

      it('should use `label` classes', () => {
        const theme: CustomPoluiTheme = {
          iconButton: {
            label: 'font-extralight',
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <IconButton label="Hi there" />
          </PoluiProvider>,
        )

        const iconButtonLabel = screen.getByText('Hi there')

        expect(iconButtonLabel).toHaveClass('font-extralight')
      })

      it('should use `rounded` classes', () => {
        const theme: CustomPoluiTheme = {
          iconButton: {
            rounded: {
              xs: 'rounded-sm',
            },
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <IconButton label="Normal IconButton" />
            <IconButton label="full" rounded="full" />
          </PoluiProvider>,
        )

        const normalIconButton = iconButtons()[0]
        const full = iconButtons()[1]

        expect(normalIconButton).toHaveClass('rounded-md')
        expect(full).toHaveClass('rounded-full')
      })

      it('should use `size` classes', () => {
        const theme: CustomPoluiTheme = {
          iconButton: {
            size: {
              xl: 'font-extrabold',
            },
          },
        }

        render(
          <PoluiProvider theme={{ theme }}>
            <IconButton size="xxl">Hello</IconButton>
          </PoluiProvider>,
        )

        const iconButton = screen.getByText('Hello')

        expect(iconButton).toHaveClass('font-extrabold')
      })
    })
  })

  const iconButton = () => screen.getByRole('IconButton')

  const iconButtonLink = () => screen.getByRole('link')

  const iconButtonListItem = () => screen.getByRole('listitem')

  const iconButtons = () => screen.getAllByRole('IconButton')
})