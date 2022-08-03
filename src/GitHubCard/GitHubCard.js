import React from "react"
import Card from "react-bootstrap/Card"
import drfudd2001 from './drfudd2001.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={drfudd2001} />
        <Card.Body>
            <Card.Title>Elmer Figueroa-Garcia</Card.Title>
            <Card.Text>
            I am a software engineer and am excited to introduce myself.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard