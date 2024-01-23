"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
	return (
		<header className="border-b w-full ">
			<div className="flex-between wrapper">
				<Link href={"/"}>
					<Image
						src={"/assets/icons/logo.svg"}
						alt="logo"
						width={138}
						height={38}
						className="object-contain cursor-pointer"
					/>
				</Link>

				<nav className="md:flex-between hidden w-full max-w-xs">
					<NavItem />
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
