import React, { useState, useEffect } from 'react';
import './App.css'; 

function Navbar() {
    const[ activepart,setactivepart]=useState("about");
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setactivepart(entry.target.id);
        }
    });
}, { threshold: 0.6 });
        observer.observe(document.getElementById("about"));
        observer.observe(document.getElementById("skills"));
        observer.observe(document.getElementById("projects"));
        observer.observe(document.getElementById("experience"));
        observer.observe(document.getElementById("contact"));
        return () => {
            observer.disconnect();
        };
    }, []);
  return (
    <nav className="navbar">
      <span className="logo">Laxman</span>
      <ul>
        <li><a href="#about" className={activepart === "about" ? "active" : ""} onClick={() => setactivepart("about")}>About</a></li>
        <li><a href="#skills" className={activepart === "skills" ? "active" : ""} onClick={() => setactivepart("skills")}>Skills</a></li>
        <li><a href="#projects" className={activepart === "projects" ? "active" : ""} onClick={() => setactivepart("projects")}>Projects</a></li>
        <li><a href="#experience" className={activepart === "experience" ? "active" : ""} onClick={() => setactivepart("experience")}>Experience</a></li>
        <li><a href="#contact" className={activepart === "contact" ? "active" : ""} onClick={() => setactivepart("contact")}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;