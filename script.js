<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HAMAYAL ZAHEER | Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <a href="index.html" class="logo">HAMAYAL.</a>

        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#interests">Interests</a>
            <a href="#contact">Contact</a>
            <a href="admin.html" class="admin-link">Admin</a>
        </nav>
    </header>

    <!-- Home -->
    <section class="hero" id="home">
        <div class="hero-content">
            <p class="small-heading">WELCOME TO MY PORTFOLIO</p>
            <h1 id="name">HAMAYAL ZAHEER</h1>
            <h2 id="role">BSIT Student | Web & Mobile App Developer</h2>

            <p class="hero-description">
                Learning, creating, and exploring the world of technology. 
                Passionate about building responsive web applications and cross-platform mobile solutions using Flutter and Dart.
            </p>

            <a href="#about" class="btn">Explore My Portfolio</a>
        </div>

        <div class="cloud cloud-one"></div>
        <div class="cloud cloud-two"></div>
        <div class="cloud cloud-three"></div>

        <div class="city">
            <div class="building building-one"></div>
            <div class="building building-two"></div>
            <div class="building building-three"></div>
            <div class="building building-four"></div>
            <div class="building building-five"></div>
            <div class="building building-six"></div>
        </div>
    </section>

    <!-- About -->
    <section id="about" class="section">
        <p class="section-label">GET TO KNOW ME</p>
        <h2>About Me</h2>

        <div class="about-box">
            <p id="aboutText">
                I am an Information Technology student based in Faisalabad, Pakistan, currently entering my 7th semester at Superior University. 
                My focus spans across full-stack web development, cross-platform mobile applications, and exploring deployment infrastructure. 
                I enjoy translating ideas into functional digital solutions through hands-on projects and continuous practice.
            </p>
        </div>

        <div class="card-container">
            <div class="info-card">
                <h3>My Goal</h3>
                <p>To become a skilled IT professional specializing in modern web and mobile application development.</p>
            </div>

            <div class="info-card">
                <h3>My Approach</h3>
                <p>Learn step by step, build practical applications, and solve real-world problems through code.</p>
            </div>

            <div class="info-card">
                <h3>My Vision</h3>
                <p>To turn technical knowledge and creative design into impactful digital solutions.</p>
            </div>
        </div>
    </section>

    <!-- Education -->
    <section id="education" class="section alternate">
        <p class="section-label">MY ACADEMIC JOURNEY</p>
        <h2>Education</h2>

        <div class="content-card">
            <span class="tag">Currently Studying</span>
            <h3>Bachelor of Science in Information Technology</h3>
            <h4>Superior University, Faisalabad</h4>
            <p><strong>Semester:</strong> 7th Semester</p>
            <p>
                Studying core IT subjects including software development, database management systems, 
                computer networks, and mobile application development.
            </p>
        </div>

        <div class="content-card">
            <h3>Practical Academic Learning</h3>
            <p>
                Applying classroom theories directly to practical projects—ranging from local networking labs using 
                Cisco Packet Tracer to full-stack web platforms and offline mobile applications.
            </p>
        </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="section">
        <p class="section-label">WHAT I WORK WITH</p>
        <h2>Technical Skills</h2>

        <p class="section-intro">
            The core technologies, languages, and tools I use to build projects and develop software solutions.
        </p>

        <div id="skillsList" class="skills-container">
            <div class="info-card"><h3>Frontend Web</h3><p>HTML, CSS, JavaScript, Bootstrap, React</p></div>
            <div class="info-card"><h3>Backend & Database</h3><p>PHP, SQL, Database Operations</p></div>
            <div class="info-card"><h3>Mobile App Development</h3><p>Flutter & Dart</p></div>
            <div class="info-card"><h3>Networking & Tools</h3><p>Cisco Packet Tracer, Git, DevOps Concepts</p></div>
        </div>

        <h3 class="sub-heading">Areas of Interest</h3>

        <div class="card-container">
            <div class="info-card">
                <h3>Web Development</h3>
                <p>Building responsive layouts, dynamic user interfaces, and interactive web experiences.</p>
            </div>

            <div class="info-card">
                <h3>Mobile App Development</h3>
                <p>Designing and coding cross-platform mobile interfaces using Flutter and Dart.</p>
            </div>

            <div class="info-card">
                <h3>DevOps & Deployment</h3>
                <p>Exploring continuous integration workflows, server management, and application deployment infrastructure.</p>
            </div>
        </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="section alternate">
        <p class="section-label">MY PRACTICAL WORK</p>
        <h2>My Projects</h2>

        <p class="section-intro">
            Key projects that showcase my technical capabilities and practical application development experience.
        </p>

        <div id="projectsList">
            <div class="content-card">
                <h3>PING - Offline LAN Chat Application</h3>
                <p>
                    Developed an offline local area network chat application engineered to function seamlessly on local Wi-Fi 
                    networks without requiring active internet connectivity. Focused on local communication protocols and utility.
                </p>
            </div>
            <div class="content-card">
                <h3>Cross-Platform Mobile & Web Interfaces</h3>
                <p>
                    Designed and built various interactive mobile layouts and web applications utilizing Flutter, Dart, 
                    JavaScript, PHP, and React, emphasizing responsive design and clean architecture.
                </p>
            </div>
        </div>
    </section>

    <!-- Interests -->
    <section id="interests" class="section">
        <p class="section-label">BEYOND THE CLASSROOM</p>
        <h2>My Interests</h2>

        <div class="card-container">
            <div class="info-card">
                <h3>Digital Media & Content Creation</h3>
                <p>Designing graphic assets, product review scripts, and promotional videos for online campaigns.</p>
            </div>

            <div class="info-card">
                <h3>UI/UX & Creative Design</h3>
                <p>Creating clean layouts, user-friendly interfaces, and engaging visual aesthetics.</p>
            </div>

            <div class="info-card">
                <h3>Continuous Learning</h3>
                <p>Constantly exploring new tech stacks, tools, and challenges to enhance professional expertise.</p>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section contact-section">
        <p class="section-label">LET'S CONNECT</p>
        <h2>Contact Me</h2>

        <p>
            I am open to internship opportunities, collaborative tech projects, 
            and connecting with professionals in the software development industry.
        </p>

        <div class="contact-box">
            <p>University: Superior University, Faisalabad</p>
            <p>Location: Faisalabad, Pakistan</p>
            <p>Email: hamayal@gmail.com</p>
        </div>

        <a href="#home" class="btn">Back to Top ↑</a>
    </section>

    <footer>
        <h3>HAMAYAL ZAHEER.</h3>
        <p>Learning Today, Building Tomorrow.</p>
        <p>© 2026 Hamayal Zaheer | Personal Portfolio</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>