// External JavaScript for Admin Dashboard Operations & LocalStorage Management

// Render Admin Dashboard Data & Tables
function renderAdminDashboard() {
    const skills = JSON.parse(localStorage.getItem('skills')) || [];
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const messages = JSON.parse(localStorage.getItem('messages')) || [];

    // Stats Counters
    const statSkills = document.getElementById('stat-skills-count');
    const statProjects = document.getElementById('stat-projects-count');
    const statMessages = document.getElementById('stat-messages-count');

    if (statSkills) statSkills.innerText = skills.length;
    if (statProjects) statProjects.innerText = projects.length;
    if (statMessages) statMessages.innerText = messages.length;

    // Skills Table
    const skillsTable = document.getElementById('admin-skills-table');
    if (skillsTable) {
        skillsTable.innerHTML = skills.length ? '' : '<tr><td colspan="3" class="text-center text-muted py-4">No skills found.</td></tr>';
        skills.forEach(skill => {
            skillsTable.innerHTML += `
                <tr>
                    <td class="ps-4 fw-semibold text-dark">${skill.name}</td>
                    <td><span class="badge bg-light text-dark border rounded-0 px-2 py-1 text-uppercase small">${skill.level}</span></td>
                    <td class="text-end pe-4">
                        <button class="btn btn-sm btn-outline-danger rounded-0 px-3" onclick="deleteSkill(${skill.id})"><i class="fa-solid fa-trash me-1"></i>Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    // Projects Table
    const projectsTable = document.getElementById('admin-projects-table');
    if (projectsTable) {
        projectsTable.innerHTML = projects.length ? '' : '<tr><td colspan="3" class="text-center text-muted py-4">No projects found.</td></tr>';
        projects.forEach(proj => {
            projectsTable.innerHTML += `
                <tr>
                    <td class="ps-4 fw-semibold text-dark">${proj.title}</td>
                    <td class="text-muted fw-light">${proj.description}</td>
                    <td class="text-end pe-4">
                        <button class="btn btn-sm btn-outline-danger rounded-0 px-3" onclick="deleteProject(${proj.id})"><i class="fa-solid fa-trash me-1"></i>Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    // Messages Table
    const messagesTable = document.getElementById('admin-messages-table');
    if (messagesTable) {
        messagesTable.innerHTML = messages.length ? '' : '<tr><td colspan="4" class="text-center text-muted py-4">No messages in inbox.</td></tr>';
        messages.forEach(msg => {
            messagesTable.innerHTML += `
                <tr>
                    <td class="ps-4 fw-semibold text-dark">${msg.name}</td>
                    <td class="text-muted">${msg.email}</td>
                    <td class="text-muted fw-light">${msg.message}</td>
                    <td class="text-end pe-4">
                        <button class="btn btn-sm btn-outline-danger rounded-0 px-3" onclick="deleteMessage(${msg.id})"><i class="fa-solid fa-trash me-1"></i>Delete</button>
                    </td>
                </tr>
            `;
        });
    }
}

// Admin Add & Delete Operations
function handleAddSkill(event) {
    event.preventDefault();
    const name = document.getElementById('new-skill-name').value;
    const level = document.getElementById('new-skill-level').value;

    const skills = JSON.parse(localStorage.getItem('skills')) || [];
    skills.push({ id: Date.now(), name, level });
    localStorage.setItem('skills', JSON.stringify(skills));

    document.getElementById('new-skill-name').value = '';
    document.getElementById('new-skill-level').value = '';
    renderAdminDashboard();
}

function deleteSkill(id) {
    let skills = JSON.parse(localStorage.getItem('skills')) || [];
    skills = skills.filter(s => s.id !== id);
    localStorage.setItem('skills', JSON.stringify(skills));
    renderAdminDashboard();
}

function handleAddProject(event) {
    event.preventDefault();
    const title = document.getElementById('new-proj-title').value;
    const description = document.getElementById('new-proj-desc').value;

    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects.push({ id: Date.now(), title, description });
    localStorage.setItem('projects', JSON.stringify(projects));

    document.getElementById('new-proj-title').value = '';
    document.getElementById('new-proj-desc').value = '';
    renderAdminDashboard();
}

function deleteProject(id) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    projects = projects.filter(p => p.id !== id);
    localStorage.setItem('projects', JSON.stringify(projects));
    renderAdminDashboard();
}

function deleteMessage(id) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages = messages.filter(m => m.id !== id);
    localStorage.setItem('messages', JSON.stringify(messages));
    renderAdminDashboard();
}

function resetLocalStorage() {
    if (confirm('Are you sure you want to reset all data to default?')) {
        localStorage.clear();
        window.location.reload();
    }
}