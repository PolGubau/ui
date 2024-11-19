import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Card } from "./Card"

describe("Components / Card", () => {
  describe("A11y", () => {
    it("should allow `aria-label`", () => {
      render(<Card aria-label="My card" />)

      expect(card()).toHaveAccessibleName("My card")
    })
  })
})

const card = () => screen.getByTestId("ui-card")
