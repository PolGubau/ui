import { TbLoader2 } from "react-icons/tb";
import { Color } from "../../../../../types";
import { applyColor } from "../../../../../style";
import { Icon } from "../../../../Base/Icon";

const Spinner = ({
	className,
	size,
	color,
}: {
	className?: string;
	size?: number;
	color: Color;
}) => {
	return (
		<div className={`flex justify-center items-center w-fit scale-150 ${applyColor(color)}`}>
			<Icon
				icon={<TbLoader2 size={size} />}
				size={size}
				color={color}
				className={` animate-spin animate-infinite animate-duration-[1400ms] animate-ease-in-out animate-fill-forwards ${className}`}
			/>
		</div>
	);
};

export default Spinner;
