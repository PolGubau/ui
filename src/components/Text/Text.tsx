import React from "react";
import TextStyled from "./Styled";
import { shorterText } from "./text.functions";
import "../../style/baseTheme.css";
import { applyColor, applyInvertedColor } from "../../style";
import { Color } from "../../types";
import Markdown from "markdown-to-jsx";
interface Props {
	size?: number | string;
	isItalic?: boolean;
	color?: Color;
	value?: string;
	maxLines?: number;
	maxLength?: number;
	isMarkdown?: boolean;
	className?: string;
	centered?: boolean;
	weight?: number;
	role?: string;
	as?: "label" | "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	htmlFor?: string;
	disabled?: boolean;
	children?: string;
	id?: string;
	ariaLabel?: string;
	invertColor?: boolean;
	style?: React.CSSProperties;
}

const Text: React.FC<Props> = ({
	as = "p",
	value, // Text to be displayed
	size, // Size of the text
	color, // Color of the text
	maxLines = 99, // Max lines of the text
	maxLength = 999, // Max length of the text
	isMarkdown = false, // If the text is markdown
	className, // Class name of the text
	isItalic = false, // If the text is italic
	centered = false, // If the text is centered
	weight = 400, // Weight of the text
	role = "text", // Role of the text
	htmlFor,
	disabled = false,
	children,
	id,
	ariaLabel = "text",
	invertColor = false,
	style = {},
}): React.JSX.Element => {
	const properSize = typeof size === "number" ? `${size}px` : size ?? undefined;

	const properValue = value ?? children ?? "";

	if (!properValue) {
		throw new Error("Text component must have a value or children");
	}

	const shortedText = shorterText({ value: properValue, maxLength });

	return (
		<TextStyled
			as={as}
			style={style}
			id={id}
			aria-label={ariaLabel}
			className={` 
				w-fit 
				${!color && "text-background-inverted dark:text-background"}
 				${isItalic ? "italic" : ""}
				${centered ? "text-center" : "text-left"}
 				${disabled ? "cursor-not-allowed opacity-70" : ""}
				${invertColor ? applyInvertedColor(color) : applyColor(color)}
 		${className}
 			`}
			$size={properSize}
			role={role}
			$maxLines={maxLines}
			$weight={weight}
			htmlFor={htmlFor}
		>
			{isMarkdown ? <Markdown>{shortedText}</Markdown> : shortedText}
		</TextStyled>
	);
};
export default Text;
