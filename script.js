
var defaultData = {
    name: "Amaya Zaheer",
    role: "BSIT Student | Aspiring Web Developer",

    about: "I am Amaya Zaheer, a BSIT student at Superior University, currently studying in my 7th semester. I am interested in web development, programming, databases and modern technologies. I enjoy learning new concepts, practicing my skills and creating user-friendly websites. My goal is to gain practical experience and build a career in IT.",

    email: "amaya@example.com",

    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "React Basics",
        "PHP Basics",
        "SQL",
        "Python Basics",
        "Computer Networks",
        "Responsive Web Design"
    ],

    projects: [
        {
            title: "Simple Calculator",
            description: "A calculator project developed using HTML, CSS and JavaScript to perform basic mathematical operations."
        },
        {
            title: "Personal Portfolio Website",
            description: "A personal website displaying my education, technical skills, projects and contact information."
        },
        {
            title: "Web Development Practice",
            description: "Practice tasks involving website layouts, navigation bars, CSS styling and JavaScript functionality."
        }
    ]
};

// Get data from Local Storage
function getData() {
    var savedData = localStorage.getItem("portfolioData");

    if (savedData == null) {
        localStorage.setItem(
            "portfolioData",
            JSON.stringify(defaultData)
        );

        return defaultData;
    }

    return JSON.parse(savedData);
}

// Display portfolio information
function showPortfolio() {
    var data = getData();

    document.getElementById("name").innerText = data.name;
    document.getElementById("role").innerText = data.role;
    document.getElementById("aboutText").innerText = data.about;
    document.getElementById("email").innerText =
        "Email: " + data.email;

    // Display skills
    var skillsHTML = "";

    for (var i = 0; i < data.skills.length; i++) {
        skillsHTML +=
            '<div class="skill">' +
            data.skills[i] +
            '</div>';
    }

    document.getElementById("skillsList").innerHTML = skillsHTML;

    // Display projects
    var projectsHTML = "";

    for (var j = 0; j < data.projects.length; j++) {
        projectsHTML +=
            '<div class="project-card">' +
                '<h3>' + data.projects[j].title + '</h3>' +
                '<p>' + data.projects[j].description + '</p>' +
            '</div>';
    }

    document.getElementById("projectsList").innerHTML =
        projectsHTML;
}

// Run when the portfolio page opens
showPortfolio();