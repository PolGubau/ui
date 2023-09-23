import type { Meta, StoryObj } from "@storybook/react";
import Bottombar from "./Bottombar";
import { PiHouseFill } from "react-icons/pi";
import { TiUser } from "react-icons/ti";
import { RiSettings4Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const meta = {
	title: "Navigation/Bottombar",
	component: Bottombar,
} satisfies Meta<typeof Bottombar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: [
			{
				name: "Home",
				icon: <PiHouseFill />,
				active: true,

				link: "/?path=/story/navigation-bottombar--default",
			},
			{
				name: "Settings",
				icon: <RiSettings4Fill />,
				link: "/?path=/story/navigation-bottombar--default",
			},
			{
				name: "Profile",
				icon: <TiUser />,
				link: "/?path=/story/navigation-bottombar--default",
			},
			{
				name: "Search",
				icon: <FaSearch />,
				onClick: () => alert("Clicked!"),
			},
		],
	},
};
export const SmallRounded: Story = {
	args: {
		...Default.args,
		rounded: "sm",
	},
};
export const Filled: Story = {
	args: {
		...Default.args,
		fillEmptyWidth: true,
	},
};
export const FullWidth: Story = {
	args: {
		...Default.args,
		maxWidth: "full",
		itemRounded: "full",
	},
};
export const SquaredItems: Story = {
	args: {
		...Default.args,
		rounded: "none",
		maxWidth: "full",
		bottomMargin: "0",
	},
};
export const WithoutPadding: Story = {
	args: {
		...Default.args,
		padding: "none",
	},
};
export const BigPadding: Story = {
	args: {
		...Default.args,
		padding: "lg",
	},
};

export const DarkMode: Story = {
	args: { ...Default.args },
	render: (args) => (
		<div className="dark">
			<main className="dark:bg-background-inverted w-full h-screen ">
				<Bottombar {...args} />
			</main>
		</div>
	),
};
export const TrackUpTheme: Story = {
	args: { ...Default.args },
	render: (args) => (
		<div className="trackup ">
			<main className="bg-background dark:bg-background-inverted w-full h-screen ">
				<Bottombar {...args} />
			</main>
		</div>
	),
};
