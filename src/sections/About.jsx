import React, { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { motion } from "motion/react";

const About = () => {
	const grid2Container = useRef();
	return (
		<section id="about" className="c-space section-spacing ">
			<h2 className="text-heading">About Me</h2>
			<div className="grid grid-cols-1 gap-4  md:grid-cols-6 md:auto-rows-[18rem] mt-12 ">
				{/* about me */}
				<div className="flex items-end grid-default-color grid-1">
					<img
						src="assets/coding-pov.png"
						className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
					/>
					<div className="z-10">
						<div>
							<p className="headtext">Hi, I'm Vishal Mahato</p>
							<p className="subtext">
								With expertise in backend development, DevOps, and cloud
								technologies, I build reliable and scalable software and
								infrastructure solutions.
							</p>
						</div>
					</div>
					{/* <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-950  " /> */}
				</div>

				{/* Code is craft box*/}
				<div className="grid-default-color grid-2">
					<div
						ref={grid2Container}
						className="flex items-center justify-center w-full h-full"
					>
						<p className="flex items-end text-5xl text-gray-500">
							CODE IS CRAFT
						</p>
						<Card
							style={{ rotate: "75deg", top: "30%", left: "20%" }}
							text="AWS"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "-30deg", top: "60%", left: "45%" }}
							text="DevOps"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
							text="NodeJS"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "-45deg", top: "55%", left: "0%" }}
							text="OpenAI"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "20deg", top: "10%", left: "38%" }}
							text="Cloud"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "30deg", top: "70%", left: "70%" }}
							image="assets/logos/Node.js.svg"
							containerRef={grid2Container}
						/>
						<Card
							style={{
								rotate: "-45deg",
								top: "70%",
								left: "25%",
							}}
							image="assets/logos/AWS.svg"
							containerRef={grid2Container}
						/>
						<Card
							style={{ rotate: "-45deg", top: "5%", left: "10%" }}
							image="assets/logos/Kubernetes.svg"
							containerRef={grid2Container}
						/>
					</div>
				</div>

				{/*My Location*/}
				<div className="grid-black-color grid-3">
					<div className="z-10 w-[50%]">
						<p className="headtext">Time Zone</p>
						<p className="subtext">
							I'm based in <span className="text-white">India</span>, and open
							to remote work worldwide
						</p>
					</div>
					<figure className="absolute left-[30%] top-[10%]">
						<Globe />
					</figure>
				</div>

				{/* Grid4*/}
				<div className="grid-special-color grid-4">
					<div className="flex h-full flex-col items-center justify-around ">
						<p className="text-center headtext">Do You Wanna Connect?</p>
						<div>
							{/* <CopyEmailButton /> */}
							<a href="mailto:mailmevishalmahato@gmail.com">
							<motion.button
								className=" rounded-full font-text-center cursor-pointer w-[12rem] overflow-hidden extralight  text-sm relative px-1 py-4 bg-primary  "
								whileHover={{ y: -3 }}
								whileTap={{ scale: 1.1 }}
								
							>
								<motion.p
									className="flex items-center justify-center gap-2"
									initial={{ opacity: 0, y: -10 }}
									exit={{ opacity: 0, y: -10 }}
									animate={{ opacity: 100, y: 0 }}
									transition={{ duration: 0.1, ease: "easeInOut" }}
									key="copy"
								>
									<img src="assets/email.svg" alt="copy" className="w-5" />

									Email Here
								</motion.p>
							</motion.button>
							</a>
						</div>
					</div>
				</div>

				{/* Grid5*/}
				<div className="grid-default-color grid-5">
					<div className="z-10 w-[50%] h-full flex flex-col justify-center gap-6">
						<p className="headText sm:text-2xl text-xl text-white">
							Tech Stack
						</p>
						<p className="subText ">
							I specialize in a variety of languages, frameworks, and tools that
							allow me to build robust and scalable applications
						</p>
					</div>
					<div className="absolute inset-y-0 md:inset-y-9 w-full h-full  start-[50%] md:scale-125 ">
						<Frameworks />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
