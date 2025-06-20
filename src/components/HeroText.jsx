import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";


const HeroText = () => {
	const variants = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
	};

	const words = ["Secure", "Scalable", "Modern", "Intellegent"];
	return (
		<div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text pointer-events-none ">
			{/* Desktop View */}
			<div className="flex-col hidden md:flex c-space">
				<motion.h1
					className="text-4xl font-medium"
					variants={variants}
					initial="hidden"
					animate="visible"
					transition={{ delay: 0.8 }}
				>
					Hi I'm Vishal
				</motion.h1>

				<motion.div className=" flex flex-col items-start">
					<motion.p
						className="text-5xl font font-medium text-neutral-300"
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 1.2 }}
					>
						A developer <br /> Dedicated to Crafting
					</motion.p>
					<motion.div
          				variants={variants}
					initial="hidden"
					animate="visible"
					transition={{ delay: 1.5 }}>
						<FlipWords
							words={words}
							className="text-white font-black text-8xl"
						/>
					</motion.div>
					<motion.p className="text-4xl font-medium text-neutral-300"
          				variants={variants}
					initial="hidden"
					animate="visible"
					transition={{ delay: 1.8 }}>

						Web Solutions
					</motion.p>
				</motion.div>
			</div>
			{/* Mobile view */}
			<div className=" flex flex-col space-y-6 md:hidden">
				<motion.p
					className="text-4xl font-medium"
					variants={variants}
					initial="hidden"
					animate="visible"
					transition={{ delay: 1 }}
				>
					Hi, I'm Vishal
				</motion.p>
				<div>
					<motion.p
						className="text-5xl font-black text-neutral-300 "
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 1.2 }}
					>
						Building
					</motion.p>
					<motion.div
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 1.5 }}
					>
						<FlipWords
							words={words}
							className="text-white font-black text-7xl"
						/>
					</motion.div>
					<motion.p
						className="text-4xl font-black text-neutral-300 "
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ delay: 1.8 }}
					>
						Web Application
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default HeroText;
