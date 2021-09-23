import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./skillsform.css";

const SkillsForm = ({ skills, setSkills, setCurrentForm }) => {
  const [lang, setLang] = useState("");
  const [spokenLang, setSpokenLang] = useState("");
  const [hard, setHard] = useState("");
  const [soft, setSoft] = useState("");
  const [langArr, setLangArr] = useState([]);
  const [spokenLangArr, setSpokenLangArr] = useState("");
  const [hardArr, setHardArr] = useState([]);
  const [softArr, setSoftArr] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "lang":
        setLang(value);
        break;
      case "spokenLang":
        setSpokenLang(value);
        break;
      case "hard":
        setHard(value);
        break;
      case "soft":
        setSoft(value);
        break;
      default:
        console.log(value);
    }
  };

  return (
    <div>
      <>
        <Container>
          <h1>Skills</h1>
          <Row>
            <Col className="leftCol">
              <Form>
                <Form.Label>Languages</Form.Label>
                <input
                  type="text"
                  placeholder="Spoken Languages"
                  name="spokenLang"
                  value={spokenLang}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <Button
                  variant="primary"
                  onClick={() => {
                    setSpokenLangArr([...spokenLangArr, spokenLang]);
                    setSpokenLang("");
                  }}
                >
                  Add Spoken Language
                </Button>
                <Form.Label>Programming Languages</Form.Label>
                <input
                  type="text"
                  placeholder="Programming Languages"
                  name="lang"
                  value={lang}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <Button
                  variant="primary"
                  onClick={() => {
                    setLangArr([...langArr, lang]);
                    setLang("");
                  }}
                >
                  Add a Programming Language!
                </Button>{" "}
              </Form>
            </Col>

            <Col className="rightCol">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Hard Skills</Form.Label>
                  <input
                    as="textarea"
                    rows={3}
                    name="hard"
                    value={hard}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                  <Button
                    variant="primary"
                    onClick={() => {
                      setHardArr([...hardArr, hard]);
                      setHard("");
                    }}
                  >
                    Add Hard Skill!
                  </Button>{" "}
                  <Form.Label>Soft Skills</Form.Label>
                  <input
                    as="textarea"
                    rows={3}
                    name="soft"
                    value={soft}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                  <Button
                    variant="primary"
                    onClick={() => {
                      setSoftArr([...softArr, soft]);
                      setSoft("");
                    }}
                  >
                    Add Soft Skill!
                  </Button>{" "}
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Button
            variant="primary"
            onClick={() => {
              setSkills([langArr, spokenLangArr, hardArr, softArr]);
              setCurrentForm(4);
            }}
          >
            Submit All Skills!
          </Button>{" "}
        </Container>
      </>
    </div>
  );
};

export default SkillsForm;
