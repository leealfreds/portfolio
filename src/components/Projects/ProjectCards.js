import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ padding: "1.0rem", display: "flex", flexDirection: "column" }}>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={props.altText || "Project Image"}  // Make sure alt text is passed for accessibility
        style={{
          margin: "0 auto",
          width: "50%",
          height: "30%",
          objectFit: "contain",
        }}
      />
      <Card.Body style={{ flexGrow: 1 }}>
        <Card.Title style={{ textAlign: "center", fontWeight: "bolder", marginBottom: "0.2rem", fontSize: "1.2rem" }}>
          {props.title}
        </Card.Title>
        <Card.Subtitle style={{ textAlign: "center", fontSize: "1.1rem", fontStyle: "italic", paddingBottom: "0.5rem" }}>
          {props.subtitle}
        </Card.Subtitle>
        <Card.Subtitle style={{ textAlign: "center", fontSize: "0.9rem", paddingBottom: "1rem" }}>
          {props.date}
        </Card.Subtitle>
        <div className="project-card-text">
          {Array.isArray(props.description) ? (
            <ul style={{ paddingLeft: "1rem", marginBottom: 0 }}>
              {props.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            props.description
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
