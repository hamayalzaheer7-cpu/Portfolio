
function login() {
    var password = document.getElementById("password").value;

    if (password === "admin123") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        loadData();
    } else {
        document.getElementById("loginMessage").innerText =
            "Incorrect password!";
    }
}

function loadData() {
    var data = JSON.parse(localStorage.getItem("portfolioData"));

    if (data == null) {
        data = {
            name: "Amaya Zaheer",
            role: "Web Developer",
            about: "I am a BSIT student interested in web development.",
            email: "amaya@example.com",
            skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            projects: [
                {
                    title: "Calculator",
                    description: "A simple calculator project."
                },
                {
                    title: "Portfolio Website",
                    description: "My personal portfolio website."
                }
            ]
        };

        localStorage.setItem("portfolioData", JSON.stringify(data));
    }

    document.getElementById("nameInput").value = data.name;
    document.getElementById("roleInput").value = data.role;
    document.getElementById("aboutInput").value = data.about;
    document.getElementById("emailInput").value = data.email;

    document.getElementById("skillsInput").value =
        data.skills.join(", ");

    document.getElementById("project1Title").value = data.projects[0].title;
    document.getElementById("project1Description").value =
        data.projects[0].description;

    document.getElementById("project2Title").value = data.projects[1].title;
    document.getElementById("project2Description").value =
        data.projects[1].description;
}

function saveData() {
    var data = {
        name: document.getElementById("nameInput").value,
        role: document.getElementById("roleInput").value,
        about: document.getElementById("aboutInput").value,
        email: document.getElementById("emailInput").value,

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
                title: document.getElementById("project1Title").value,
                description: document.getElementById("project1Description").value
            },
            {
                title: document.getElementById("project2Title").value,
                description: document.getElementById("project2Description").value
            }
        ]
    };

    localStorage.setItem("portfolioData", JSON.stringify(data));

    document.getElementById("saveMessage").innerText =
        "Changes saved successfully!";

    alert("Data saved successfully!");
}

function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("password").value = "";
    document.getElementById("loginMessage").innerText = "";
}