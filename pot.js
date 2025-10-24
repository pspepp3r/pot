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
for (let i = 0; i < projects.length; i++) {
    document.querySelector(".projects-container").innerHTML += `
    <div class="project-item" id="${projects[i].id}">
        <div class="project-image">
            <img
                src="${projects[i].image}"
                alt="Project ${projects[i].id}"
            />
        </div>
        <div class="project-info">
            <h3>${projects[i].title}</h3>
            <p>
            ${projects[i].desc}
            </p>
            <div class="project-tags">
            </div>
            <a href="#" class="btn">View Project</a>
        </div>
    </div>
`
}

const projectTags = document.querySelectorAll(".project-tags");
projectTags.forEach((projectTag, idx) => {
    for (let i = 0; i < projects.length; i++) {
        projects[idx].tools.forEach(tool => {
            projectTag.innerHTML += `<span>${tool}</span>`
        })
        break;
    }
});
