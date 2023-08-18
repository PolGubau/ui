import React from "react";
import "../../../style/baseTheme.scss";
import { IconType } from "../../Icon";
import { Button } from "../Button";
import { Sizes } from "../../../common";
interface Props {
	onClick?: () => void;
	id?: string;
	className?: string;
	ariaLabel?: string;
	disabled?: boolean;
	type?: "main" | "normal" | "outlined" | "text";
	size?: Sizes;
	icon?: IconType;
	rounded?: boolean;
}

const IconButton: React.FC<Props> = ({
	className,
	id,
	onClick,
	disabled = false,
	ariaLabel = "Icon Button",
	type = "normal",
	size = "md",
	icon,
	rounded = true,
}) => {
	return (
		<Button
			aria-label={ariaLabel}
			disabled={disabled || !onClick}
			id={id}
			onClick={onClick}
			className={className}
			type={type}
			size={size}
			rounded={rounded}
			onlyIcon
			icon={icon}
		/>
	);
};
export default IconButton;