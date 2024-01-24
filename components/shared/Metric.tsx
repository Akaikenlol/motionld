"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MetricProps {
	imgUrl: string;
	alt: string;
	title: string;
}

const variants = {
	hidden: { opacity: 0, x: 30 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			staggerChildren: 0.5,
			duration: 1,
		},
	},
};

const Metric = ({ imgUrl, alt, title }: MetricProps) => {
	return (
		<motion.div
			variants={variants}
			initial="hidden"
			animate="show"
			className="group relative flex min-h-[380px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]"
		>
			<Image src={imgUrl} alt={alt} width={400} height={230} />
			<div className="flex-center min-h-[85px] flex-col gap-3 p-5 md:gap-4">
				<div className="flex gap-2">
					<motion.div whileHover={{ scale: 1.1 }}>
						<span className="w-min rounded-full bg-green-100 px-3 py-1 text-green-600">
							{title}
						</span>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default Metric;
