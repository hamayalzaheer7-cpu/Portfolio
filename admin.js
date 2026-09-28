
var adminPassword = "admin123";

// Default portfolio data
var defaultData = {
    name: "HAMAYAL ZAHEER",
    role: "BSIT Student | Aspiring Web Developer",

    about: " I'm an Information Technology student at Superior University in Faisalabad, currently in my 7th semester. I love turning ideas into functional digital experiences—whether I’m building cross-platform apps with Flutter, crafting responsive web applications, or designing local networking solutions. Beyond coding, I enjoy digital content creation and building projects that make a practical impact.",

    email: "hamayal@gmail.com",

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
            description: "A calculator project developed using HTML, CSS and JavaScript."
        },
        {
            title: "Personal Portfolio Website",
            description: "A personal website displaying education, skills, projects and contact information."
        },
        {
            title: "Web Development Practice",
            description: "Practice tasks involving website layouts, CSS styling and JavaScript functionality."
        }
    ]
};

// Read saved data
function getPortfolioData() {
    var savedData = localStorage.getItem("portfolioData");

    if (savedData == null) {
        return defaultData;
    }

    var data = JSON.parse(savedData);

    // Keep three project fields available
    if (!data.projects) {
        data.projects = defaultData.projects;
    }

    for (var i = 0; i < 3; i++) {
        if (!data.projects[i]) {
            data.projects[i] = defaultData.projects[i];
        }
    }

    return data;
}

// Admin login
document.getElementById("loginForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        var password = document.getElementById("password").value;

        if (password === adminPassword) {
            document.getElementById("loginBox").style.display = "none";
            document.getElementById("dashboard").style.display = "block";

            loadData();
        } else {
            document.getElementById("loginMessage").innerText =
                "Incorrect password. Please try again.";
        }
    }
);

// Load data into dashboard
function loadData() {
    var data = getPortfolioData();

    document.getElementById("nameInput").value = data.name;
    document.getElementById("roleInput").value = data.role;
    document.getElementById("aboutInput").value = data.about;
    document.getElementById("emailInput").value = data.email;

    document.getElementById("skillsInput").value =
        data.skills.join(", ");

    document.getElementById("project1Title").value =
        data.projects[0].title;

    document.getElementById("project1Description").value =
        data.projects[0].description;

    document.getElementById("project2Title").value =
        data.projects[1].title;

    document.getElementById("project2Description").value =
        data.projects[1].description;

    document.getElementById("project3Title").value =
        data.projects[2].title;

    document.getElementById("project3Description").value =
        data.projects[2].description;
}

// Save changes
document.getElementById("portfolioForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        var data = {
            name: document.getElementById("nameInput").value.trim(),
            role: document.getElementById("roleInput").value.trim(),
            about: document.getElementById("aboutInput").value.trim(),
            email: document.getElementById("emailInput").value.trim(),

            skills: document.getElementById("skillsInput").value
                .split(",")
                .map(function(skill) {
                    return skill.trim();
                })
                .filter(function(skill) {
                    return skill !== "";
                }),

            projects: [
                {
                    title: document.getElementById("project1Title").value.trim(),
                    description: document.getElementById("project1Description").value.trim()
                },
                {
                    title: document.getElementById("project2Title").value.trim(),
                    description: document.getElementById("project2Description").value.trim()
                },
                {
                    title: document.getElementById("project3Title").value.trim(),
                    description: document.getElementById("project3Description").value.trim()
                }
            ]
        };

        localStorage.setItem("portfolioData", JSON.stringify(data));

        document.getElementById("saveMessage").innerText =
            "Changes saved successfully!";

        alert("Portfolio updated successfully!");
    }
);

// Logout
document.getElementById("logoutButton").addEventListener(
    "click",
    function() {
        document.getElementById("dashboard").style.display = "none";
        document.getElementById("loginBox").style.display = "block";

        document.getElementById("password").value = "";
        document.getElementById("loginMessage").innerText = "";
        document.getElementById("saveMessage").innerText = "";
    }
);