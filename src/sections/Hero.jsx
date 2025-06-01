import React, { Suspense } from "react";
import HeroText from "../components/HeroText";
import { Canvas, useFrame } from "@react-three/fiber";
import ParalaxBackground from "../components/ParalaxBackground";
import Astronaut from "../components/Astronaut.jsx";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader.jsx";

const Hero = () => {
	const isMobile = useMediaQuery({ maxWidth: 853 });
	return (
		<section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
			<HeroText />
			<ParalaxBackground />
			<figure
				className=" absolute inset-0 "
				style={{ width: "100vw", height: "100vh" }}
			>
				<Canvas camera={{ position: [0, 1, 3] }}>
					<Suspense fallback={<Loader/>}>
						<Float>
							<Astronaut
								scale={isMobile ? 0.45 : undefined}
								position={isMobile ? [0.1, -1.2, 0] : undefined}
							/>
						</Float>
						<Rig />
						{/* <OrbitControls /> */}
					</Suspense>
				</Canvas>
			</figure>
		</section>
	);
};

function Rig() {
	return useFrame((state, delta) => {
		easing.damp3(
			state.camera.position,
			[state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
			0.5,
			delta
		);
	});
}
export default Hero;
