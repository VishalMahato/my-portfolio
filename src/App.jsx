import { useState } from "react";

import "./App.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";

function App() {
	return (
		<div className="container mx-auto max-w-7xl">
			<Navbar />
			<Hero />
            <About/>
            <Projects/>
            <Experiences/>
            <section className="h-screen"></section>
		</div>
	);
}

export default App;
