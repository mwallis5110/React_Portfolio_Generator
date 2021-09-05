import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const SkillsForm = ({skills, setSkills, setCurrentForm}) => {

    const [lang, setLang] = useState('')
    const [hard, setHard] = useState("");
    const [soft, setSoft] = useState("");
    const [langArr, setLangArr] = useState([]);
    const [hardArr, setHardArr] = useState([]);
    const [softArr, setSoftArr] = useState([]);


    const handleInputChange = (event) => {
      const { name, value } = event.target;
      switch (name) {
          case 'lang':
              setLang(value);
                break;
            case 'hard':
                setHard(value);
                break;
            case 'soft':
                setSoft(value);
                break;
            default:
                console.log(value);
      }
    //   setSkills({ ...aboutMe, [name]: value });
    }; 

    return (
      <div>
        <>
          <Container>
            <h1>Skills</h1>
            <Row>
              <Col>
                <Form>
                  <Form.Label>Languages</Form.Label>
                  <Form.Control type="text" placeholder="Spoken Languages" />
                  <Form.Control
                    type="text"
                    placeholder="Programming Languages"
                    name="lang"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                  <Button variant="primary" onClick={() => {setLangArr([...langArr, lang]);}}>
                    Add Language!
                  </Button>{" "}
                </Form>
              </Col>

              <Col>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Hard Skills</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="hard"
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                    <Button variant="primary" onClick={() => {setHardArr([...hardArr, hard]);}}>
                      Add Hard Skill!
                    </Button>{" "}
                    <Form.Label>Soft Skills</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="soft" 
                      value={soft}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                    <Button variant="primary" onClick={() => {
                        setSoftArr([...softArr, soft])
                        setSoft('')
                        }}>
                      Add Soft Skill!
                    </Button>{" "}
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Button variant="primary" onClick={() => {
                setSkills([langArr, hardArr, softArr])
                setCurrentForm(4)
            }}>
              Submit All Skills!
            </Button>{" "}
          </Container>
        </>
      </div>
    );
};

export default SkillsForm;
