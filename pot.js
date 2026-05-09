import skills from './data/skills.js';
import projects from './data/projects.js';

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Header scroll effect
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Scroll Reveal Animation
const revealElements = () => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
};

// Form submission
const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:prosperpepple12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.location.href = mailtoLink;

    contactForm.reset();
});

// Dynamic year
document.querySelector("#year").innerHTML = new Date().getFullYear();

// Load skills
const skillsContainer = document.querySelector(".skills-container");
skills.forEach(skill => {
    skillsContainer.innerHTML += `
    <div class="skill-item reveal" id="${skill.id}">
        <h3>${skill.title}</h3>
        <progress value="${skill.mastery}" max="100"></progress>
        <p>${skill.desc}</p>
    </div> `;
});

// Load projects
const projectsContainer = document.querySelector(".projects-container");
projects.forEach(project => {
    projectsContainer.innerHTML += `
    <div class="project-item reveal" id="${project.id}">
        <div class="project-image">
            <img
                src="${project.image || 'https://placehold.co/600x400/4a6cf7/FFFFFF?text=' + project.title}"
                alt="${project.title}"
            />
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <div class="project-tags" id="tags-${project.id}">
                ${project.tools.map(tool => `<span>${tool}</span>`).join('')}
            </div>
            <a target="_blank" href="${project.link}" class="btn">View Project</a>
        </div>
    </div>
`;
});

// Initialize reveal
revealElements();
