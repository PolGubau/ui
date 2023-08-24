import {
	Button,
	IconButton,
	Text,
	Icon,
	Field,
	Switch,
	Checkbox,
	Radio,
	RadioGroup,
	CheckboxGroup,
	ClickOutsideWrapper,
	Wrapper,
	Modal,
	Toast,
	PopupsProvider,
	Menu,
	Select,
	MultiSelect,
	Autocomplete,
	Image,
	Avatar,
	Badge,
	Tooltip,
	ProgessBar,
	Loader,
	Spinner,
	Bars,
	Dots,
	Pulse,
	Divider,
	GridItem,
	Grid,
	Card,
	Accordion,
	AccordionItem,
} from "./components";

import {
	getIcon,
	generateUUID,
	toCamelCase,
	toKebabCase,
	toUpperCase,
	toLowerCase,
	capitalize,
	removeWhitespace,
	reverseString,
	truncateString,
	formatString,
	randomString,
	lowerAndNoSpace,
	getLocalStorage,
	setToLocalStorage,
	removeFromLocalStorage,

	// sorters
	sortStrings,
	sortNumbers,
	sortDates,

	// dates
	dateTimeToDate,
	dateToDateTime,
	getToday,
} from "./utils";

import { useHover, useClickOutside } from "./hooks";
import { Identifier } from "./common.d";

export {
	//Hooks
	useHover,
	useClickOutside,

	// components
	Button,
	IconButton,
	Text,
	Icon,
	Field,
	Switch,
	Checkbox,
	Radio,
	CheckboxGroup,
	RadioGroup,
	Wrapper,
	ClickOutsideWrapper,
	Modal,
	Toast,
	PopupsProvider,
	Menu,
	Select,
	MultiSelect,
	Autocomplete,
	Image,
	Avatar,
	Badge,
	Tooltip,
	ProgessBar,
	Loader,
	Spinner,
	Bars,
	Dots,
	Pulse,
	Divider,
	GridItem,
	Grid,
	Card,
	Accordion,
	AccordionItem,

	// utils
	generateUUID,

	// string conversion
	getIcon,
	toCamelCase,
	toKebabCase,
	toUpperCase,
	toLowerCase,
	capitalize,
	removeWhitespace,
	reverseString,
	truncateString,
	formatString,
	randomString,
	lowerAndNoSpace,

	// storage functions
	getLocalStorage,
	setToLocalStorage,
	removeFromLocalStorage,

	// sorters
	sortStrings,
	sortNumbers,
	sortDates,

	// dates
	dateTimeToDate,
	dateToDateTime,
	getToday,
};

export type { Identifier };
