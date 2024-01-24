"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";

const Body = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="gap-5">
			<AnimatePresence>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 100 }}
					transition={{ delay: 0.5 }}
					className="flex-center flex-col mt-10"
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default Body;
