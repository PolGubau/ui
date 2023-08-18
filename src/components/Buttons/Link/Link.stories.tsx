import type { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";

const meta = {
	title: "Buttons/Link",
	component: Link,
	tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: "https://polgubau.com",
		children: "I'm a normal Link",
		iconPosition: "left",
		rounded: true,
		autoFocus: false,
		fullWidth: false,
		type: "normal",
		size: "md",
		disabled: false,
		id: "Link",
	},
};
export const Outlined: Story = {
	args: {
		...Default.args,
		children: "I have an outline",
		type: "outlined",
	},
};
export const Text: Story = {
	args: {
		...Default.args,

		children: "More discreet",
		type: "text",
	},
};
export const Main: Story = {
	args: {
		...Default.args,

		children: "The important one",
		type: "main",
	},
};
export const Disabled: Story = {
	args: {
		...Default.args,

		children: "Not here anymore",
		disabled: true,
	},
};

export const SmallButton: Story = {
	args: {
		...Default.args,

		children: "Small",
		size: "sm",
	},
};
export const NormalButton: Story = {
	args: {
		...Default.args,

		children: "Normal",
		size: "md",
	},
};
export const LargeButton: Story = {
	args: {
		...Default.args,

		children: "The big one",
		size: "lg",
	},
};
export const SquareButton: Story = {
	args: {
		...Default.args,

		children: "I'm a rectangle",
		rounded: false,
	},
};
export const WithIcon: Story = {
	args: {
		...Default.args,

		children: "I have an icon",
		icon: "check",
		iconPosition: "left",
	},
};
export const MainWithIcon: Story = {
	args: {
		...Default.args,

		type: "main",
		iconPosition: "left",
		children: "I have an icon",
		icon: "check",
	},
};
export const WithIconRight: Story = {
	args: {
		...Default.args,

		children: "I have an icon",
		icon: "check",
		iconPosition: "right",
	},
};
export const WithIconOnly: Story = {
	args: {
		...Default.args,
		children: "",
		onlyIcon: true,
		icon: "check",
		iconPosition: "left",
	},
};
export const AllSizes: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2">
			<Link {...args} size="xs" children="Extra Small" />
			<Link {...args} size="sm" children="Small" />
			<Link {...args} size="md" children="Normal" />
			<Link {...args} size="lg" children="Large" />
			<Link {...args} size="xl" children="Extra Large" />
		</div>
	),
	args: {
		...Default.args,
		children: "I'm a Link",
	},
};
