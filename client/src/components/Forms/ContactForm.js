import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactForm.css'


const ContactForm = ({contact, setContact, setCurrentForm}) => {
    // Input States
    const [phone, setPhone] = useState("");
    // const [email, setEmail] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [github, setGithub] = useState("");
    const [twitter, setTwitter] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    // Pushed to array on submit
    // const [phoneArr, setPhoneArr] = useState([]);
    // const [emailArr, setEmailArr] = useState([]);
    // const [linkedInArr, setLinkedInArr] = useState([]);
    // const [githubArr, setGithubArr] = useState([]);
    // const [twitterArr, setTwitterArr] = useState([]);
    // const [facebookArr, setFacebookArr] = useState([]);
    // const [instagramArr, setInstagramArr] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'phone':
                setPhone(value);
                break;
            // DONT UNCOMMENT THIS PLEASE
            // case 'email':
            //     setEmail(value);
            //     break;
            case 'linkedIn':
                setLinkedIn(value);
                break;
            case 'github':
                setGithub(value);
                break;
            case 'twitter':
                setTwitter(value);
                break;
            case 'facebook':
                setFacebook(value);
                break;
            case 'instagram':
                setInstagram(value);
                break;
            default:
                console.log(value);
        }
      }; 
      const handleContactSubmit = (e) => {
          e.preventDefault();
          const information = {
              phone:phone,
            //   email:email,
              linkedIn:linkedIn,
              github:github,
              twitter:twitter,
              facebook:facebook,
              instagram:instagram
          }
          setContact(information)
      }
    return (
      <div>
          <>
            <Container>
                <h1>Contact Things</h1>
                <Row>
                    <Col>
                        <Form>
                            <input type="text" placeholder="Phone Number" name="phone" onChange={(e) => {handleInputChange(e);}}/>
                            {/* <input type="text" placeholder="Email" name="email" onChange={(e) => {handleInputChange(e);}}/> */}
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <input type="text" placeholder="LinkedIn URL" name="linkedIn" onChange={(e) => {handleInputChange(e);}}/>
                            <input type="text" placeholder="Github URL" name="github" onChange={(e) => {handleInputChange(e);}}/>
                            <input type="text" placeholder="Twitter URL" name="twitter" onChange={(e) => {handleInputChange(e);}}/>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <input type="text" placeholder="Facebook URL" name="facebook" onChange={(e) => {handleInputChange(e);}}/>
                            <input type="text" placeholder="Instagram URL" name="instagram" onChange={(e) => {handleInputChange(e);}}/>
                        </Form>
                    </Col>
                </Row>
                <Button variant="primary"
                    onClick={(e) => {
                        handleContactSubmit(e)
                        setCurrentForm(7)
                    }}
                //     setPhoneArr([...phoneArr, phone]);
                //     setPhone('');
                //     console.log('Phone Number Added');
                //     setEmailArr([...emailArr, email]);
                //     setEmail('');
                //     console.log('Email Added');
                //     setLinkedInArr([...linkedInArr, linkedIn ]);
                //     setLinkedIn('');
                //     console.log('LinkedIn Added');
                //     setTwitterArr([...twitterArr, twitter]);
                //     setTwitter('');
                //     console.log('Twitter Added');
                //     setFacebookArr([...facebookArr, facebook]);
                //     setFacebook('');
                //     console.log('Facebook Added');
                //     setInstagramArr([...instagramArr, instagram]);
                //     setInstagram('');
                //     console.log('Instagram Added');
                //     setGithubArr([...githubArr, github]);
                //     setInstagram('');
                //     console.log('Github Added');
                //     console.log(githubArr);
                //     setContact([phoneArr, emailArr, linkedInArr, twitterArr, facebookArr, instagramArr, githubArr])
                //     }}
                >Submit Contact Information!</Button>{' '}
            </Container>
          </>
        </div>
        )};
  
  export default ContactForm;
  