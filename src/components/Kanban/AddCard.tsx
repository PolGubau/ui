import type { FormEvent } from 'react'
import { useState } from 'react'
import type {} from './Card'
import { motion } from 'framer-motion'
import { TbPlus } from 'react-icons/tb'
import { Textarea } from '../Textarea'
import { Button } from '../Button'
import { ColorsEnum } from '../../types'
import type { KanbanProps } from './Kanban'

export type AddCardProps = {
  column: string
  labels: KanbanProps['labels']
  onCreate?: ({ column, title }: { column: string; title: string }) => void
  theme: KanbanProps['theme']
}

export const AddKanbanCard = ({
  column,
  onCreate,
  labels = { add: 'Add', cancel: 'Cancel' },

  theme = {},
}: AddCardProps) => {
  const [text, setText] = useState('')
  const [adding, setAdding] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!text.trim().length) return

    onCreate?.({ column, title: text.trim() })

    setAdding(false)
    setText('')
  }

  const MotionButton = motion(Button)

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit} className={theme.add?.form}>
          <Textarea
            onChange={e => setText(e.target.value)}
            placeholder={labels.placeholder}
            className={theme.add?.textarea}
          />
          <div className={theme.add?.buttonGroup}>
            <Button color={ColorsEnum.secondary} type="button" onClick={() => setAdding(false)} size="sm">
              <span className="first-letter:uppercase">{labels.cancel}</span>
            </Button>
            <Button color={ColorsEnum.primary} type="submit" size="sm" disabled={!text.trim().length}>
              <span className="first-letter:uppercase">{labels.add}</span>
              <TbPlus />
            </Button>
          </div>
        </motion.form>
      ) : (
        <MotionButton
          layout
          color={ColorsEnum.primary}
          type="submit"
          size="sm"
          onClick={() => setAdding(true)}
          variant={'ghost'}
        >
          <span className="first-letter:uppercase">{labels.add}</span>
          <TbPlus />
        </MotionButton>
      )}
    </>
  )
}
