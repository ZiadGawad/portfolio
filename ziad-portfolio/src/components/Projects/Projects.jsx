import "./Projects.css"

function Projects() {
    return(
        <section id="projects" className="projects">
            <h2>PROJECTS</h2>

            <div className="projects-content">
            
                <div className="project-grid">
                    <div className="project-card">
                        <h3>Food Ordering Management System</h3>

                        <p>
                           A personal C++ project built to practice OOP principles
                           and software engineering fundamentals through a 
                           simple food ordering system.
                        </p>

                        <span className="project-skills">C++ · OOP · Git · GitHub</span>
                        <span className="project-type">Personal Project</span>
                        <a href="https://github.com/ZiadGawad/Food-Ordering-System" target="_blank">
                            VIEW ON GITHUB
                        </a>
                    </div>

                    <div className="project-card">
                        <h3>Emergency Patient Tracking System</h3>

                        <p>
                            University project developed collaboratively with
                            a classmate using C++, a Binary Search Tree and GitHub.
                        </p>

                        <span className="project-skills">C++ · Data Structures · BST  · Git · GitHub </span>
                        <span className="project-type">University Project</span>
                        <a href="https://github.com/Anas4208/BST-DS-assignment" target="_blank">
                            VIEW ON GITHUB
                        </a>
                    </div>

                    <div className="project-card">
                        <h3>.NET Microservices Application</h3>

                        <p>
                            A guided implementation of a .NET microservices application, 
                            built while learning REST APIs, 
                            SQL Server, Docker, 
                            Kubernetes, RabbitMQ, gRPC, 
                            and service-to-service communication.
                        </p>

                        <span className="project-skills">C# · .NET · SQL Server · Docker · Kubernetes · RabbitMQ · gRPC </span>
                        <span className="project-type">Learning Project</span>
                        <a href="https://github.com/ZiadGawad/.NET-Microservices-Project" target="_blank">
                            VIEW ON GITHUB
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;