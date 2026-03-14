import { Header, Footer, ContactForm } from "../../components";
import "./style.css";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";

function About() {

    const skills = [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Git",
    ];

    const contacts = [
        {
            icon: <FaEnvelope />,
            text: "sualehsiddiqui01@gmail.com",
            link: "mailto:sualehsiddiqui01@gmail.com",
        },
        {
            icon: <FaPhone />,
            text: "+92 3112942491",
            link: "tel:+923112942491",
        },
        {
            icon: <FaMapMarkerAlt />,
            text: "Karachi, Pakistan",
            link: "https://maps.google.com/?q=Karachi,+Pakistan",
        },
        {
            icon: <FaLinkedin />,
            text: "LinkedIn",
            link: "https://linkedin.com/in/SualehSiddiqui",
        },
        {
            icon: <FaGithub />,
            text: "GitHub",
            link: "https://github.com/SualehSiddiqui",
        },
    ];

    const experiences = [
        {
            role: "Jr. MERN Stack Developer",
            company: "Innovative Hive",
            time: "12/2024 – Present | Karachi",
        },
        {
            role: "Jr. MERN Stack Developer",
            company: "Ayetec Solutions",
            time: "05/2024 – 11/2024 | Karachi",
        },
        {
            role: "MERN Stack Developer Internship",
            company: "Markhor Solutions",
            time: "02/2024 – 04/2024 | Karachi",
        },
        {
            role: "Front-End Developer Internship",
            company: "Saylani Mass IT Training",
            time: "09/2022 – 11/2023 | Karachi",
        },
    ];

    const education = [
        {
            degree: "Bachelors of Computer Science",
            institute: "SZABIST",
            year: "2025 – Present",
        },
        {
            degree: "Intermediate",
            institute: "Govt. College For Men Nazimabad",
            year: "2022 – 2024",
        },
        {
            degree: "Matriculation",
            institute: "The Kaplers School",
            year: "2020 – 2022",
        },
    ];

    return (
        <>
            <Header />
            <main className="about-page">

                <div className="about-glow"></div>
                <div className="about-glow"></div>

                {/* HERO */}

                <section className="about-hero">
                    <h1>
                        M. Sualeh <span>Siddiqui</span>
                    </h1>

                    <h3>MERN Stack Developer</h3>

                    <p>
                        Results-driven MERN Stack Developer with 2+ year of experience
                        designing and developing scalable web applications using MongoDB,
                        Express.js, React.js, and Node.js. Passionate about building clean
                        UI, responsive interfaces, and Fefficient full-stack systems.
                    </p>
                </section>

                {/* CONTACT */}

                <section className="info-grid">
                    {contacts.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-card"
                        >
                            {item.icon}
                            <p>{item.text}</p>
                        </a>
                    ))}
                </section>

                {/* SKILLS */}

                <section className="section">
                    <h2>Tech Stack</h2>

                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <span key={index}>{skill}</span>
                        ))}
                    </div>
                </section>

                {/* EXPERIENCE */}

                <section className="section">
                    <h2>Work Experience</h2>

                    <div className="experience-grid">
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-card">
                                <h3>{exp.role}</h3>
                                <p className="company">{exp.company}</p>
                                <span>{exp.time}</span>

                                <a
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {exp.website}
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* EDUCATION */}

                <section className="section">
                    <h2>Education</h2>

                    <div className="education-grid">
                        {education.map((edu, index) => (
                            <div key={index} className="education-card">
                                <h3>{edu.degree}</h3>
                                <p>{edu.institute}</p>
                                <span>{edu.year}</span>
                            </div>
                        ))}
                    </div>
                </section>


                <ContactForm />
            </main>
            <Footer />
        </>
    );
}

export default About;