"use client";
import React, { useMemo } from "react";
import TabBar from "./TabBar/TabBar";
import { SizesWithFull, SizesWithNone } from "../../../common";
import { applyMaxWidth, applyPadding, applyRoundessSizes } from "../../../style";
import { tabStyles } from "./tab.styles";

export interface TabsItemProps {
	title: string;
	content: string | React.ReactNode;
	icon?: string | React.ReactNode;
	className?: string;
}

interface Props {
	defaultOpenedIndex?: number;
	data: TabsItemProps[];
	hasDivider?: boolean;
	hasBorder?: boolean;
	className?: string;
	padding?: SizesWithNone;
	rounded?: SizesWithNone;
	maxWidth?: SizesWithFull;
}

const Tabs: React.FC<Props> = ({
	data,
	defaultOpenedIndex,
	className,
	hasBorder,
	hasDivider,
	padding = "md",
	rounded = "none",
	maxWidth = "full",
}) => {
	const [activeTab, setActiveTab] = React.useState(defaultOpenedIndex ?? 0);
	const selectedContent = useMemo(() => data[activeTab].content, [data, activeTab]);

	return (
		<section
			className={`${tabStyles({ hasBorder, hasDivider })} ${applyRoundessSizes({
				rounded,
			})} 
			
			${applyMaxWidth({ maxWidth })}
			${className}`}
		>
			<TabBar data={data} activeTab={activeTab} setActiveTab={setActiveTab} padding={padding} />
			<main
				className={`${applyPadding({
					padding,
				})}`}
			>
				{selectedContent}
			</main>
		</section>
	);
};

export default Tabs;
