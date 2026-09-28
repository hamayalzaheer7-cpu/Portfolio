// External JavaScript for Editorial Navigation and LocalStorage Management

const defaultSkills = [
    { id: 1, name: "Flutter & Dart", level: "Advanced" },
    { id: 2, name: "HTML5 / CSS3 / Bootstrap", level: "Advanced" },
    { id: 3, name: "JavaScript & React", level: "Intermediate" },
    { id: 4, name: "Cisco Packet Tracer / Networking", level: "Intermediate" },
    { id: 5, name: "DevOps & Deployment Basics", level: "Beginner" }
];

const defaultProjects = [
    { id: 1, title: "PING - Offline LAN Chat App", description: "Local area network chat application functioning without active internet connectivity." },
    { id: 2, title: "RENEW • RELAX • REWIRE", description: "University social entrepreneurship project centered on Progressive Muscle Relaxation and student wellness." }
];

// Initialize LocalStorage Data
function initializeStorage() {
    if (!localStorage.getItem('skills')) {
        localStorage.setItem('skills', JSON.stringify(defaultSkills));
    }
    if (!localStorage.getItem('projects')) {
        localStorage.setItem('projects', JSON.stringify(defaultProjects));
    }
    if (!localStorage.getItem('messages')) {
        localStorage.setItem('messages', JSON.stringify([]));
    }
}

// Page Router / Switcher for Editorial Layout
function switchPage(pageId) {
    const pages = document.querySelectorAll('.page-view');
    pages.forEach(page => {
        page.classList.add('d-none');
    });

    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.remove('d-none');
    }

    // Update active state in editorial navigation
    const navLinks = document.querySelectorAll('.nav-link-editorial');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    // Refresh data displays when switching to respective pages
    if (pageId === 'skills') renderPublicSkills();
    if (pageId === 'experience') renderPublicProjects();
    if (pageId === 'admin') renderAdminDashboard();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Public Skills
function renderPublicSkills() {
    const container = document.getElementById('skills-container');
    const skills = JSON.parse(localStorage.getItem('skills')) || [];
    
    container.innerHTML = '';
    if (skills.length === 0) {
        container.innerHTML = '<p class="text-muted">No skills added yet.</p>';
        return;
    }

    skills.forEach(skill => {
        container.innerHTML += `
            <div class="col-md-6">
                <div class="editorial-card p-4 h-100">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="font-serif fw-bold mb-0 text-dark">${skill.name}</h5>
                        <span class="badge bg-light text-dark border rounded-0 px-3 py-2 text-uppercase tracking-wider small">${skill.level}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

// Render Public Projects/Experience
function renderPublicProjects() {
    const container = document.getElementById('experience-container');
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    
    container.innerHTML = '';
    if (projects.length === 0) {
        container.innerHTML = '<p class="text-muted">No projects added yet.</p>';
        return;
    }

    projects.forEach(proj => {
        container.innerHTML += `
            <div class="col-md-6">
                <div class="editorial-card p-4 h-100">
                    <h4 class="font-serif fw-bold mb-2 text-dark">${proj.title}</h4>
                    <p class="text-muted fw-light mb-0">${proj.description}</p>
                </div>
            </div>
        `;
    });
}

// Handle Contact Form Submission
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-msg').value;

    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ id: Date.now(), name, email, message });
    localStorage.setItem('messages', JSON.stringify(messages));

    document.getElementById('contact-form').reset();
    const alertBox = document.getElementById('contact-alert');
    alertBox.classList.remove('d-none');
    setTimeout(() => {
        alertBox.classList.add('d-none');
    }, 4000);
}

// Run on window load
window.addEventListener('DOMContentLoaded', () => {
    initializeStorage();
    switchPage('home');
});