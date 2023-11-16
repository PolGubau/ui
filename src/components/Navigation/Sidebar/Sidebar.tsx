import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { useMediaQuery } from "../../../hooks";
import { IconButton, Link } from "../../Buttons";
import { Icon, IconNames } from "../../Base";
import { Text } from "../../Text";
import { JustifyContents, Sizes, SizesComplete, Variants } from "../../../types";

interface SidebarProps {
	brandName?: string;
	brandLogo?: React.ReactNode;
	links?: { label: string; href: string; icon: IconNames }[];
	rounded?: SizesComplete;
}

const Sidebar: React.FC<SidebarProps> = ({
	brandName = "Acme",
	rounded = Sizes.lg,
	brandLogo = (
		<svg
			width="218"
			height="40"
			viewBox="0 0 218 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect y="1.51123" width="37.8008" height="37.8008" rx="8.35124" fill="#F29946" />
			<path
				d="M12.4016 11.6353V22.1512C12.4016 23.2028 12.6603 24.0124 13.1778 24.5799C13.6953 25.1475 14.4547 25.4312 15.4563 25.4312C16.4578 25.4312 17.2256 25.1475 17.7598 24.5799C18.2939 24.0124 18.561 23.2028 18.561 22.1512V11.6353H22.8425V22.1262C22.8425 23.6952 22.5086 25.0223 21.841 26.1072C21.1733 27.1922 20.2719 28.0101 19.1369 28.561C18.0185 29.1118 16.7666 29.3872 15.3811 29.3872C13.9957 29.3872 12.7522 29.1202 11.6505 28.586C10.5655 28.0352 9.70586 27.2173 9.07156 26.1323C8.43727 25.0306 8.12012 23.6952 8.12012 22.1262V11.6353H12.4016Z"
				fill="#FAF0F0"
			/>
			<path d="M29.8801 11.6353V29.212H25.5986V11.6353H29.8801Z" fill="#FAF0F0" />
			<path
				d="M49.6971 30.9116V9.09344H58.305C59.9599 9.09344 61.3697 9.40949 62.5344 10.0416C63.6992 10.6666 64.587 11.5366 65.1978 12.6517C65.8157 13.7596 66.1246 15.038 66.1246 16.4869C66.1246 17.9358 65.8121 19.2142 65.1871 20.3221C64.5621 21.4301 63.6566 22.293 62.4705 22.9109C61.2915 23.5288 59.864 23.8378 58.1879 23.8378H52.7013V20.141H57.4421C58.3299 20.141 59.0614 19.9883 59.6367 19.6829C60.2191 19.3704 60.6523 18.9407 60.9364 18.3939C61.2276 17.8399 61.3732 17.2042 61.3732 16.4869C61.3732 15.7625 61.2276 15.1304 60.9364 14.5906C60.6523 14.0437 60.2191 13.6211 59.6367 13.3228C59.0543 13.0174 58.3157 12.8647 57.4208 12.8647H54.31V30.9116H49.6971ZM76.1655 31.2312C74.5107 31.2312 73.0795 30.8797 71.8722 30.1765C70.6719 29.4663 69.745 28.4791 69.0916 27.2149C68.4382 25.9436 68.1115 24.4699 68.1115 22.7937C68.1115 21.1034 68.4382 19.6261 69.0916 18.3619C69.745 17.0906 70.6719 16.1034 71.8722 15.4003C73.0795 14.69 74.5107 14.3349 76.1655 14.3349C77.8203 14.3349 79.2479 14.69 80.4482 15.4003C81.6555 16.1034 82.5859 17.0906 83.2393 18.3619C83.8928 19.6261 84.2195 21.1034 84.2195 22.7937C84.2195 24.4699 83.8928 25.9436 83.2393 27.2149C82.5859 28.4791 81.6555 29.4663 80.4482 30.1765C79.2479 30.8797 77.8203 31.2312 76.1655 31.2312ZM76.1868 27.7156C76.9396 27.7156 77.5682 27.5025 78.0724 27.0764C78.5767 26.6432 78.9567 26.0537 79.2124 25.3079C79.4751 24.5622 79.6065 23.7135 79.6065 22.7618C79.6065 21.8101 79.4751 20.9613 79.2124 20.2156C78.9567 19.4699 78.5767 18.8804 78.0724 18.4471C77.5682 18.0139 76.9396 17.7973 76.1868 17.7973C75.4268 17.7973 74.7876 18.0139 74.2692 18.4471C73.7578 18.8804 73.3707 19.4699 73.108 20.2156C72.8523 20.9613 72.7244 21.8101 72.7244 22.7618C72.7244 23.7135 72.8523 24.5622 73.108 25.3079C73.3707 26.0537 73.7578 26.6432 74.2692 27.0764C74.7876 27.5025 75.4268 27.7156 76.1868 27.7156ZM91.7088 9.09344V30.9116H87.1705V9.09344H91.7088ZM104.847 8.07071L97.8159 34.1929H93.9061L100.937 8.07071H104.847ZM117.527 23.9443V14.548H122.066V30.9116H117.708V27.9393H117.538C117.169 28.8981 116.554 29.6687 115.695 30.2511C114.843 30.8335 113.802 31.1247 112.574 31.1247C111.48 31.1247 110.517 30.8761 109.686 30.379C108.855 29.8818 108.206 29.1751 107.737 28.2589C107.275 27.3427 107.041 26.2454 107.034 24.967V14.548H111.572V24.1574C111.579 25.1233 111.838 25.8868 112.35 26.4478C112.861 27.0089 113.547 27.2895 114.406 27.2895C114.953 27.2895 115.464 27.1652 115.94 26.9166C116.416 26.6609 116.799 26.2845 117.091 25.7873C117.389 25.2902 117.534 24.6758 117.527 23.9443ZM125.696 30.9116V14.548H130.234V30.9116H125.696ZM127.976 12.4386C127.301 12.4386 126.722 12.2149 126.239 11.7674C125.763 11.3129 125.525 10.7696 125.525 10.1375C125.525 9.51247 125.763 8.97625 126.239 8.52881C126.722 8.07426 127.301 7.84699 127.976 7.84699C128.65 7.84699 129.226 8.07426 129.702 8.52881C130.184 8.97625 130.426 9.51247 130.426 10.1375C130.426 10.7696 130.184 11.3129 129.702 11.7674C129.226 12.2149 128.65 12.4386 127.976 12.4386Z"
				fill="#2A2945"
			/>
		</svg>
	),
	links = [],
}) => {
	let isTabletMid = useMediaQuery(768);

	const [open, setOpen] = useState(!isTabletMid);
	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isTabletMid) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	}, [isTabletMid]);

	const Nav_animation = isTabletMid
		? {
				open: {
					x: 0,
					width: "16rem",
					transition: {
						damping: 40,
					},
				},
				closed: {
					x: -250,
					width: 0,
					transition: {
						damping: 40,
						delay: 0.15,
					},
				},
		  }
		: {
				open: {
					width: "16rem",
					transition: {
						damping: 40,
					},
				},
				closed: {
					width: "4rem",
					transition: {
						damping: 40,
					},
				},
		  };

	return (
		<div>
			<motion.div
				ref={sidebarRef}
				variants={Nav_animation}
				initial={{ x: isTabletMid ? -250 : 0 }}
				animate={open ? "open" : "closed"}
				className="shadow-xl z-[999] overflow-hidden md:relative min-h-screen "
			>
				<div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
					<div className="w-[50px] max-w-[50px]">{brandLogo}</div>

					{open && <span className="text-xl whitespace-pre">{brandName}</span>}
				</div>

				<div className="flex flex-col  h-full">
					<ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
						{links.map((link) => (
							<li key={link.label}>
								<Link
									href={link.href}
									fullWidth
									variant={Variants.text}
									justify={JustifyContents.start}
								>
									<Icon icon={IconNames.apps} />
									{open && <Text>{link.label}</Text>}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<motion.div
					onClick={() => {
						setOpen(!open);
					}}
					animate={
						open
							? {
									x: 0,
									rotate: 0,
							  }
							: {
									x: -10,
									rotate: 180,
							  }
					}
					transition={{ duration: 0 }}
					className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
				>
					<Icon icon={IconNames.arrowleft} size={35} />
				</motion.div>
			</motion.div>

			<IconButton
				className="m-3 md:hidden"
				variant={Variants.text}
				icon={IconNames.arrowBarRight}
				onClick={() => setOpen(true)}
			/>
		</div>
	);
};

export default Sidebar;
