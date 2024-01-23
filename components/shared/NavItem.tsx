"use client";

import { headerLinks } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = () => {
	const pathname = usePathname();
	return (
		<ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
			{headerLinks.map((link) => {
				const isActive = pathname === link.route;

				return (
					<li
						key={link.route}
						className={`${
							isActive && "text-primary-500"
						} flex-center whitespace-nowrap`}
					>
						<motion.div whileHover={{ scale: 1.1 }}>
							<Link href={link.route}>{link.label}</Link>
						</motion.div>
					</li>
				);
			})}
		</ul>
	);
};

export default NavItem;
