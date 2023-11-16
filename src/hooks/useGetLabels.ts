import { SelectOption } from "../types";
import { arrayToString } from "../utils/arrayUtils/limitArray";
interface GetProperLabelProps {
	options: SelectOption[];
	keyField?: string;
	limit?: number;
	and?: string;
	placeholder?: string;
}

export const useGetLabels = () => {
	/*
    
    Custom hook to save logic from Select components
    
    we will get an array of selected options, that could be an array of strings, an array of numbers or an array of objects, if it's an object we just want to get the keyField property (if it exists, if not we will get the first property of the object that it's not undefined or null)
    
    */

	const getFirstValueItsNotUndefinedOrNull = (object: object): string | null => {
		const firstProperty = Object.values(object).find(
			(value) => value !== undefined && value !== null
		);

		return firstProperty;
	};

	const getLabelFromOption = (option: SelectOption, keyField?: string): string => {
		let label: string = "";

		if (typeof option === "string" || typeof option === "number") {
			label = option.toString();
		} else if (typeof option === "object") {
			if (keyField && option[keyField]) {
				label = option[keyField]?.toString() ?? "Not found";
			} else {
				const firstValue = getFirstValueItsNotUndefinedOrNull(option);
				if (!firstValue) throw new Error("The option object doesn't have any valid value");
				label = firstValue.toString();
			}
		}

		return label.length > 0 ? label : "No value";
	};

	const getLabelsFromOptions = (options: SelectOption[], keyField?: string): string[] => {
		const allLabels = options.map((option) => getLabelFromOption(option, keyField));
		const labels = allLabels.filter((label) => label !== null) as string[];

		return labels;
	};

	const getProperLabel = ({
		options,
		keyField,
		limit,
		and,
		placeholder,
	}: GetProperLabelProps): string => {
		const labels = getLabelsFromOptions(options, keyField);

		if (labels.length === 0) return placeholder ?? "No value";

		const string = arrayToString(labels, limit, and);

		return string;
	};

	return { getLabelFromOption, getLabelsFromOptions, getProperLabel };
};