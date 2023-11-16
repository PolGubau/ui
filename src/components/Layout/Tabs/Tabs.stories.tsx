import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
import { Button } from "../../Buttons";
import { defaultData, tooManyTabs } from "./Story/tabData";
import { Checkbox, Field, Radio, Switch } from "../../Inputs";
import { IconNames } from "../../Base/Icon";
import { Sizes } from "../../../types";
import { Text } from "../../Text";
import { Card } from "../Card";
const meta = {
	title: "Layout/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	decorators: [
		(Story: any) => (
			<div className="bg-background dark:bg-background-inverted p-8">
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
			},
			{
				title: "Our Values",
				content: "Our values are to make the world a better place.",
			},
		],
	},
};
export const DefaultOpened: Story = {
	args: {
		defaultOpenedIndex: 1,
		data: [
			{
				title: "Our Mission",
				content: "Our mission is to make the world a better place.",
			},
			{
				title: "Our Vision",
				content: "Our vision is to make the world a better place.",
			},
			{
				title: "Our Values",
				content: "Our values are to make the world a better place.",
			},
		],
	},
};
export const Borderless: Story = {
	args: {
		hasBorder: false,
		data: defaultData,
	},
};
export const WithoutDivider: Story = {
	args: {
		hasDivider: false,
		data: defaultData,
	},
};
export const Minimalist: Story = {
	args: {
		hasDivider: false,
		hasBorder: false,
		data: defaultData,
	},
};
export const Complex: Story = {
	args: {
		rounded: Sizes.xl,
		data: [
			{
				title: "Login",
				content: (
					<div className="flex gap-4 flex-col">
						<h3>Already have an account? Login.</h3>
						<Field label="Email" fullWidth />
						<Field label="password" type="password" fullWidth />
						<Switch label="Remember me" checked={true} onChange={() => {}} />
						<Button icon={IconNames.arrow} color="accent" iconPosition="right">
							Login
						</Button>
					</div>
				),
			},
			{
				title: "Create Account",
				content: (
					<div className="flex gap-4 flex-col">
						<h3>First time here? Create an account.</h3>
						<div className="flex gap-4">
							<Field label="Email" fullWidth />
							<Field label="Username" fullWidth />
						</div>
						<Field label="password" type="password" fullWidth />
						<Button icon={IconNames.arrow} color="accent" iconPosition="right">
							Create an account
						</Button>
					</div>
				),
			},
		],
	},
};
export const MaxWidthXs: Story = {
	args: {
		maxWidth: "xs",
		hasDivider: false,
		data: defaultData,
	},
};
export const ScrollTabs: Story = {
	args: {
		maxWidth: "xs",
		hasDivider: false,
		data: tooManyTabs,
	},
};
export const RoundedXL: Story = {
	args: {
		maxWidth: "md",
		rounded: "xl",
		data: defaultData,
	},
};
export const CustomMovementAmount: Story = {
	args: {
		contentMovementAmount: -20,
		data: defaultData,
	},
};
export const NoFluent: Story = {
	args: {
		fluent: false,
		data: defaultData,
	},
};
export const DarkMode: Story = {
	args: {
		rounded: Sizes.xl,
		data: [
			{
				title: "Login",
				content: (
					<div className="flex gap-4 flex-col">
						<Text as="h3">Already have an account? Login.</Text>
						<Field label="Email" fullWidth />
						<Field label="password" type="password" fullWidth />
						<Radio label="Remember me" value={true} onChange={() => {}} />
						<Checkbox label="Remember me" value={true} onChange={() => {}} />
						<Switch label="Remember me" checked={true} onChange={() => {}} />
						<Button icon={IconNames.arrow} color="accent" iconPosition="right">
							Login
						</Button>
					</div>
				),
			},
			{
				title: "Create Account",
				content: (
					<div className="flex gap-4 flex-col">
						<Text as="h3">First time here? Create an account.</Text>

						<div className="flex gap-4">
							<Field label="Email" fullWidth />
							<Field label="Username" fullWidth />
						</div>
						<Field label="password" type="password" fullWidth />
						<Button icon={IconNames.arrow} color="accent" iconPosition="right">
							Create an account
						</Button>
					</div>
				),
			},
		],
	},

	render: (args) => (
		<div className="dark">
			<div className="bg-background dark:bg-background-inverted p-8">
				<Tabs {...args} />
			</div>
		</div>
	),
};

export const InCard: Story = {
	args: {
		...DarkMode.args,
	},
	render: (args) => (
		<section className="flex gap-8 flex-col">
			{" "}
			<div className="bg-background dark:bg-background-inverted p-8">
				<Card padding="none">
					<Tabs {...args} hasBorder={false} />
				</Card>
			</div>
			<div className="dark">
				<div className="bg-background dark:bg-background-inverted p-8">
					<Card padding="none">
						<Tabs {...args} hasBorder={false} />
					</Card>
				</div>
			</div>
		</section>
	),
};