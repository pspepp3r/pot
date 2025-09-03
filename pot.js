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

// Form submission
const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
});

// Calculate age
document.querySelector("#age").innerHTML =
    new Date().getFullYear() - 2005;

// Dynamic year
document.querySelector("#year").innerHTML = new Date().getFullYear();

// Load skills
skills.forEach(skill => {
    document.querySelector(".skills-container").innerHTML += `
    <div class="skill-item" id="${skill.id}">
        <!-- <i class="${skill.icon}"></i> -->
        <h3>${skill.title}</h3>
        <progress value="${skill.mastery}" max="100"></progress>
        <p>
        ${skill.desc}
        </p>
    </div> `;
});

// Load projects
projects.forEach(project => {
    document.querySelector(".projects-container").innerHTML += `
    <div class="project-item" id="${project.id}">
        <div class="project-image">
            <img
                src="${project.image}"
                alt="Project 1"
            />
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>
            ${project.desc}
            </p>
            <div class="project-tags">
            ${project.tools.forEach(tool => {
        `<span>${tool}</span>`
    })
        }
            </div>
            <a href="#" class="btn">View Project</a>
        </div>
    </div>
    `;
})
