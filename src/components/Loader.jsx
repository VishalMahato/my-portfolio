import { Html, useProgress } from "@react-three/drei";
import { progress } from "motion";
import React from "react";

const Loader = () => {
	const { progress } = useProgress();

	return <Html center className="text-center font-medium text-2xl">{progress}% Loaded</Html>;
};

export default Loader;
