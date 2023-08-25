import React from "react";
import { Icon, IconNames } from "../../Icon";
import { Button } from "../Button";
import { copyToClipboard } from "../../../utils";
import { Transition } from "@headlessui/react";
import ConfettiExplosion from "react-confetti-explosion";

interface Props {
	value?: string | number;
	valueToCopy: string | number | object;
	icon?: string;
	hasConfetti?: boolean;
}
const CopyButton: React.FC<Props> = ({
	value,
	valueToCopy,
	icon = IconNames.copy,
	hasConfetti = true,
	...props
}) => {
	const printableValueToCopy =
		typeof valueToCopy === "object" ? JSON.stringify(valueToCopy) : valueToCopy;

	const text = value ?? printableValueToCopy;

	const [copied, setCopied] = React.useState(false);
	return (
		<Button
			className={`truncate`}
			{...props}
			// iconPosition="right"
			// icon={copied ? IconNames.check : icon}
			onClick={() => {
				copyToClipboard(printableValueToCopy);
				setCopied(true);
			}}
		>
			{text}
			{!copied && <Icon className="ml-2" icon={icon} />}
			<Transition
				show={copied}
				enter="transition-opacity duration-300"
				enterFrom="opacity-0 scale-50"
				enterTo="opacity-100 scale-100"
				leave="transition-opacity duration-500"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-50"
			>
				{hasConfetti && (
					<ConfettiExplosion force={0.4} duration={2200} particleCount={15} width={200} />
				)}
				<Icon className="ml-2" icon={IconNames.check} />
			</Transition>
		</Button>
	);
};

export default CopyButton;