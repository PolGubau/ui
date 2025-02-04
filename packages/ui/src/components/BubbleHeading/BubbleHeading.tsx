"use client";

import React from "react";
import { cn, mergeDeep } from "../../helpers";
import { getTheme } from "../../theme-store";
import type { DeepPartial, HeadingLevel } from "../../types";
import { DynamicHeading } from "../DynamicHeading";
import type { BubbleHeadingTheme } from "./theme";
export interface BubbleHeadingProps {
  children: string;
  minWeight?: number;
  maxWeight?: number;
  step?: number;

  /**
   * If true, the text will be bold when not hovered
   */
  opposite?: boolean;
  as?: HeadingLevel;
  className?: string;
  theme?: DeepPartial<BubbleHeadingTheme>;
  transitionDuration?: number;
}

/**
 * BubbleHeading component
 * @description The BubbleHeading component is used to create an important text that changes it's weight when hovered over with a smooth transition. Useful for titles and headings.
 *
 */
export const BubbleHeading: React.FC<BubbleHeadingProps> = ({
  children,
  minWeight = 100,
  maxWeight = 900,
  step = 100,
  as = "h2",
  opposite,
  transitionDuration = 0.25,
  className,
  theme: customTheme = {},
}: BubbleHeadingProps) => {
  const theme = mergeDeep(getTheme().bubbleHeading, customTheme);

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const weights = React.useMemo(() => {
    return Array.from(children).map((_, idx) => {
      if (hoveredIndex === null) {
        return opposite ? maxWeight : minWeight;
      }
      const distance = Math.abs(hoveredIndex - idx);
      return opposite
        ? Math.min(maxWeight, minWeight + distance * step)
        : Math.max(minWeight, maxWeight - distance * step);
    });
  }, [hoveredIndex, children, minWeight, maxWeight, step, opposite]);

  return (
    <DynamicHeading as={as} className={cn(theme.base, className)}>
      {Array.from(children).map((char, idx) => (
        <span
          style={{
            transition: `font-weight ${transitionDuration} ease-in-out`,
            willChange: "font-weight",
            fontWeight: weights[idx],
          }}
          onMouseEnter={() => {
            setHoveredIndex(idx);
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
          }}
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={idx}
        >
          {char}
        </span>
      ))}
    </DynamicHeading>
  );
};
