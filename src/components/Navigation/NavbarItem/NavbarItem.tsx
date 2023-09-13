import { Side } from "../../../types";
import { Link } from "../../Buttons";
import { ButtonVariant } from "../../Buttons/Button/Button";

interface Props {
	href: string;
	variant?: ButtonVariant;
	className?: string;
	id?: string;
	label: string;
	icon?: string;
	iconPosition?: Side;
	active?: boolean;
}
const NavbarItem: React.FC<Props> = ({
	href,
	variant = "text",
	className = "",
	id = "",
	label,
	icon = "",
	iconPosition = "left",
	active = false,
}) => {
	return (
		<Link
			href={href}
			variant={variant}
			className={`${className} ${active ? "bg-accent/20" : ""}`}
			icon={icon}
			iconPosition={iconPosition}
			id={id}
		>
			{label}
		</Link>
	);
};

export default NavbarItem;