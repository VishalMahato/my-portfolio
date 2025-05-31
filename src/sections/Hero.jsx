import React from "react";
import HeroText from "../components/HeroText";
import { Canvas } from "@react-three/fiber";
import ParalaxBackground from "../components/ParalaxBackground";
import Astronaut from "../components/Astronaut.jsx";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
	return (
		<section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
			<HeroText  />
			<ParalaxBackground />
			<figure
				className=" absolute inset-0 "
				style={{ width: "100vw", height: "100vh" }}
			>
				<Canvas camera={{ position:[0,1,3]}}>
					<Astronaut scale={0.23} position={[0,-1.5,0]} />
					<OrbitControls  />

				</Canvas>
			</figure>
		</section>
	);
};

export default Hero;
