import type { Meta, StoryObj } from "@storybook/react";
import Menu from "../Menu";
import { mockmenu } from "./mockMenus";
import { Link } from "../../../Buttons/Link";

const meta = {
	title: "Selects/Menu",
	component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { label: "Menu", items: mockmenu, variant: "filled" },
};
export const WithoutLabel: Story = {
	args: { items: mockmenu, variant: "filled" },
};
export const CustomButton: Story = {
	args: { label: "Nice label", items: mockmenu, variant: "text" },
};
export const Dividers: Story = {
	args: { label: "Nice label", items: mockmenu, dividers: true },
};
export const ChangeIcon: Story = {
	args: { label: "Nice label", items: mockmenu, openIcon: "user", closeIcon: "world" },
};
export const NavIdea: Story = {
	render: (args) => (
		<div className="flex gap-2">
			<Menu {...args} label="About us" variant="text" items={mockmenu} />
			<Menu {...args} label="Our Products" variant="text" items={mockmenu} />
			<Link {...args} href="/ugly-blog" variant="text">
				Visit our blog
			</Link>
			<Menu {...args} openIcon="more" variant="text" items={mockmenu} />
		</div>
	),
	args: { items: mockmenu, variant: "filled" },
};
export const Directions: Story = {
	render: (args) => (
		<div className="flex gap-2 p-8">
			<Menu {...args} label="Bottom" items={mockmenu} direction="bottom" />
			<Menu {...args} label="Top" items={mockmenu} direction="top" />
			<Menu {...args} label="Right" items={mockmenu} direction="right" />
			<Menu {...args} label="Left" items={mockmenu} direction="left" />
		</div>
	),
	args: { items: mockmenu, variant: "filled" },
};
