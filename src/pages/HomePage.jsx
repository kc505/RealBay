import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Components/Logo.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import ProjectListings from "./Components/ProjectListings.jsx";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectListings />
      <Footer />
    </div>
  );
}
