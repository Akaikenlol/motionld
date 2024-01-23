"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Body = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
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
		</>
	);
};

export default Body;
