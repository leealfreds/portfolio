import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { Parallax } from "react-scroll-parallax";
import Capgemini from "../../Assets/Projects/capg.png"
import Itron from "../../Assets/Projects/Itr.png"
import Clemson from "../../Assets/Projects/Clempaw.png"
function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Parallax speed={-20}>
        <Container>
          <h1 className="project-heading">
            Relevant Experience 
          </h1>
          <br></br>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Capgemini}
                title="Clemson University Capstone Program - Capgemini"
                subtitle="Software Developer"
                date="Aug 25– Present"
                description={[
                  <>Worked closely with Capgemini to define and present business value by discussing project scope todetermine feasibility and pricings for tools to be used during development</>, 
                  <>Coordinated with 5-person team to develop a system using AI/ML to count cases and assess conditionsof physical inventory from forklift cameras using <strong>.NET/C#, React, and Azure services</strong></>, 
                  <>Designed user interface prototypes for creating a responsive dashboard that would create visual alertsand data trends for real-time monitoring of key metrics using <strong>Figma</strong>.</>]}
                />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Itron}
                title="Itron Inc."
                subtitle="Fullstack Developer Co-op"
                date="Jan 23 – Aug 24"
                description={[
                  <>Collaborated with senior developers and manufacturing teams to maintain a web application for tracking 500,000+ electric meters across multiple plants.</>, 
                  <>Developed multiple reporting services using <strong>ASP.NET, C#, SQL, and Mudblazor </strong> to monitor underperforming meters, significantly improving test engineer efficiency.</>, 
                  <>Restructured company codebase to address duplication of thousands of meters caused by duplicate serial numbers from multiple sites.</>]}
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Clemson}
                title="Clemson University"
                subtitle="Undergraduate Teaching Assistant"
                date="Aug 22 – Dec 22"
                description= {[<>Assisted students in learning Data Structures and Algorithms through lab sessions</>,
                  <>Communicated effectively with faculty and fellow teaching assistants to coordinate activities and ensure smoothclass operations</>, 
                  <>Conducted bi-weekly office hours, providing assistance to students with course material.</>]}
              />
            </Col>
          </Row>
        </Container>
      </Parallax>
    </Container>
  );
}

export default Projects;
