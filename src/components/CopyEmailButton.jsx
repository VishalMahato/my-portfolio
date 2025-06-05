import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
	const [copied, setCopied] = useState(false);
	const email = "mailmevishalmahato@gmail.com";
	const copyToClipboard = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};
	return (
		<motion.button
			onClick={copyToClipboard}
			className=" rounded-full font-text-center cursor-pointer w-[12rem] overflow-hidden extralight  text-sm relative px-1 py-4 bg-primary  "
            whileHover={{y:-3}}
            whileTap={{scale:1.1}}
        >
			<AnimatePresence mode="wait">
				{!copied ? (
					<motion.p
						className="flex items-center justify-center gap-2"
						initial={{ opacity: 0, y: -10 }}
						exit={{ opacity: 0, y: -10 }}
						animate={{ opacity: 100, y: 0 }}
						transition={{ duration: 0.1, ease: "easeInOut" }}
						key="copy"
					>
						<img src="assets/copy.svg" alt="copy" className="w-5" />
						Copy Email Address
					</motion.p>
				) : (
					<motion.p
						className="flex items-center justify-center gap-2"
						initial={{ opacity: 0, y: -10 }}
						exit={{ opacity: 0, y: -10 }}
						animate={{ opacity: 100, y: 0 }}
						transition={{ duration: 0.1, ease: "easeInOut" }}
						key="copied"
					>
						<img src="assets/copy-done.svg" alt="copy" className="w-5" />
						Email has copied
					</motion.p>
				)}
			</AnimatePresence>
		</motion.button>
	);
};

export default CopyEmailButton;
