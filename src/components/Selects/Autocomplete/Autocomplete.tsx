import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { Icon, IconNames } from "../../Base/Icon";
import { Variants, Colors, JustifyContents, SelectOption, Sizes } from "../../../types";
import { BaseButtonProps, labelClasses, popupStyles } from "../types";
import { selectStyles } from "../selectStyles";
import { useGetLabels } from "../../../hooks";

interface Props extends BaseButtonProps {
	value?: SelectOption;
	options: SelectOption[];
	keyField?: string;
	onChange?: (value: SelectOption) => void;
	noFoundMessage?: string;
}

export default function Autocomplete({
	variant = Variants.filled,
	color = Colors.primary,
	rounded = Sizes.lg,
	className = "",
	disabled = false,
	size = Sizes.md,
	centered = false,
	padding = { x: Sizes.md, y: Sizes.sm },
	justify = JustifyContents.center,
	position = "relative",
	label,
	placeholder = "Search",
	fullWidth = false,
	options = [],
	buttonIcon = IconNames.expandboth,
	keyField = "name",
	value,
	noFoundMessage = "Nothing found.",
	onChange,
}: Props) {
	const [selected, setSelected] = useState<undefined | SelectOption>(value ?? undefined);
	const { getLabelFromOption } = useGetLabels();

	const [query, setQuery] = useState<string>("");

	const filteredItems =
		query === ""
			? options
			: options.filter((item) =>
					getLabelFromOption(item)
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, ""))
			  );

	const handleChanges = (value: SelectOption) => {
		setSelected(value);
		onChange?.(value);
	};

	const buttonValue =
		(selected ? getLabelFromOption(selected, keyField) : placeholder) ?? placeholder;

	return (
		<Combobox value={selected} onChange={handleChanges}>
			<div className="relative mt-1">
				{label && <Combobox.Label className={labelClasses}>{label}</Combobox.Label>}

				<div
					className={`${selectStyles({
						rounded,
						size,
						fullWidth,
						disabled,
						centered,
						padding,
						variant,
						color,
						justify,
						className,
						position,
					})}
					
					
					`}
				>
					<Combobox.Input
						className={`p-1 w-full border-none focus:ring-0 focus:border-none bg-transparent focus:outline-none placeholder:text-current focus-within:ring-2 min-h-8`}
						displayValue={(item: SelectOption) => getLabelFromOption(item, keyField) ?? placeholder}
						onChange={(event) => setQuery(event.target.value)}
						placeholder={buttonValue}
					/>
					<Combobox.Button className="w-fuit px-3 justify- absolute inset-y-0 right-0 flex items-center ">
						<Icon icon={buttonIcon} aria-hidden="true" />
					</Combobox.Button>
				</div>

				<Transition
					as={Fragment}
					enter="transition-all duration-150"
					enterFrom="-translate-y-1 opacity-0"
					enterTo="translate-y-0 opacity-100"
					leave="transition-all duration-150"
					leaveFrom="opacity-100 translate-y-1"
					leaveTo="opacity-0 translate-y-0"
					afterLeave={() => setQuery("")}
				>
					<Combobox.Options className={`${popupStyles} ${fullWidth ? "w-full" : "w-fit"} `}>
						{filteredItems.length === 0 && query !== "" ? (
							<div className="relative cursor-default select-none py-2 px-4  text-primary/80">
								{noFoundMessage}
							</div>
						) : (
							filteredItems.map((item) => {
								// the key is used to identify the item in the list
								// it will be the keyField if it exists, otherwise the name or if there isn't name, the first value of the object
								const label = getLabelFromOption(item, keyField);
								return (
									<Combobox.Option
										key={label}
										className={({ active }) =>
											`relative select-none py-2 pl-10 pr-4 cursor-pointer ${
												active ? "bg-accent/20 " : ""
											}`
										}
										value={item}
									>
										{({ selected }) => (
											<>
												<span
													className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
												>
													{label}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer text-accent `}
													>
														<Icon icon={IconNames.check} aria-hidden="true" />
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								);
							})
						)}
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	);
}
