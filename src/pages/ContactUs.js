import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
export default function ContactUs() {
  return (
    <div className="container mt-5 mb-5">
      <Card>
        <Card.Header>Contact Us</Card.Header>

        <Card.Body>
          <Card.Title>
            <h4>About Me</h4>
          </Card.Title>
          <Card.Text>
            <ul className="mt-2">
              <li>Name : Pawornwat Tangwattapornchai (Fight)</li>
              <li>Date of Birth : 31/Jan/2000</li>
              <li>Gender : Male</li>
              <li>City of Birth : Chanthaburi</li>
              <li>Country of Citizenship : Thailand</li>
              <li>My Computer Skill : Java, C#, Python, php, html</li>
              <li>
                hobbies : play game, watch movie, read japan manga, listening to
                music while working
              </li>
            </ul>
            <p>For my github visit link below.</p>
            <a href="https://github.com/pawornwat/react-online" target="_blank">
              <Button variant="outline-info">
                <BsGithub /> Click Here!
              </Button>
            </a>
            <div className="mt-3">
              <strong>Contact Me : ta.pawornwat_st@tni.ac.th</strong>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
