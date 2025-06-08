import React, { useState } from "react";
import { motion } from "motion/react";

const Navigation = () => {
	return (
		<>
			<ul className="nav-ul">
				<li className="nav-li">
					<a href="#home" className="nav-link">
						Home
					</a>
				</li>
				<li className="nav-li">
					<a href="#about" className="nav-link">
						About
					</a>
				</li>
				<li className="nav-li">
					<a href="#work" className="nav-link">
						Work
					</a>
				</li>
				<li className="nav-li">
					<a href="#contact" className="nav-link">
						Contact
					</a>
				</li>
			</ul>
		</>
	);
};

const Navbar = () => {
	const [isMenuOpen, setisMenuOpen] = useState(false);
	return (
		<div className="fixed inset-x-0  z-20 w-full backdrop-blur-lg bg-primary/40 ">
			<div className="mx-auto c-space max-w-7xl" >
				<div className="flex items-center justify-between py-2 sm:py-0 ">
					<a  href="#about" className=" text-xl font-bold transition-colors text-neutral-400  scroll-smooth">
						Vishal
					</a>
					<button
						className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden "
						aria-label="Open menu"
						onClick={() => {
							setisMenuOpen((prev) => !prev);
						}}
					>
						<img
							src={!isMenuOpen ? "assets/menu.svg" : "assets/close.svg"}
							alt="toggle"
							className="w-6 h-6"
						/>
					</button>
					<nav className="hidden sm:flex">
						<Navigation />
					</nav>
				</div>
			</div>
			{isMenuOpen && (
				<motion.div
					className="block overflow-hidden text-center sm:hidden"
					initial={{ opacity: 0, y: -10 }}
                    animate={{opacity:1, y:0}}
                    style={{maxHeight: "100vh"}}
                    transition={{duration:1}}
				>
					<nav className="pb-5">
						<Navigation />
					</nav>
				</motion.div>
			)}
		</div>
	);
};

export default Navbar;
