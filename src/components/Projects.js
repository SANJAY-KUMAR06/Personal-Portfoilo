import { Container, Row, Col,Tab,Nav} from "react-bootstrap"
import { ProjectCards } from "./ProjectCards"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg2 from "../assets/img/project-img2.png"
import blogVerseImg from "../assets/img/blog-verse.png"
import fitnessTrackerImg from "../assets/img/fitness-tracker.png"
import tinDogImg from "../assets/img/tin-dog.png"
import pongGameImg from "../assets/img/pong-img.png"
import toDoListImg from "../assets/img/to-do-list.png"
import 'animate.css'
import TrackVisibility from 'react-on-screen';

export const Project=()=>{
    const projects=[
        {
            title: "BlogVerse",
            description: `Web Development,Developed a personal blog website using Flask and Python.
            Features include user authentication, CRUD functionality for blog posts, and a sleek design.`,
            imgUrl:blogVerseImg,
          },
          {
            title: "Fitness Tracker",
            description: `Developed a Fitness Tracker web application using Node.js, MongoDB, HTML, EJS, and CSS to help users monitor their fitness journey by logging workouts, creating routines, tracking nutrition goals, and visualizing progress with dynamic charts. `,
            imgUrl:fitnessTrackerImg ,
          },
          {
            title: "Pong and Snake Game ",
            description: `Python Development,Developed interactive Pong and Snake games using Python, demonstrating
             strong skills in game development and logic implementation.`,
            imgUrl: pongGameImg,
          },
    ]
    
    const projectsTab2=[
        {
            title: " Venue Booking Platform ",
            description: `React,Built a responsive web application for college students to book venues for events and activities.
            Integrated React components such as Navbar, Hero, Work, VenueList, and BookingPage.` ,
            imgUrl: projImg2,
          },
        
          {
            title: "Tindog Website",
            description: `Web Development,Developed Tindog, a responsive website for dog lovers, inspired by Tinder.
Utilized HTML for the structure, CSS for custom styling, and Bootstrap for a mobile-friendly, grid-based layout.`,
            imgUrl: tinDogImg,
          },
          {
            title: "To-Do List",
            description:`React,Developed a To-Do List application using React, providing a simple and 
            efficient way to manage daily tasks.` ,
            imgUrl: toDoListImg,
          },
    ]

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2>Projects</h2>
                        <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                         <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                         </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third" >Tab 3</Nav.Link>
                         </Nav.Item>
                    </Nav>
                
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index)=>{
                                    return(
                                        <ProjectCards
                                            key={index}
                                            {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                        {
                                projectsTab2.map((project,index)=>{
                                    return(
                                        <ProjectCards
                                            key={index}
                                            {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                    I am working on several upcoming basic projects that reflect my growing expertise in web development, Python, and 
                    DevOps. These projects include building a simple task automation tool, creating a portfolio website 
                    with CI/CD integration, and developing interactive Python-based desktop applications. 
                    Additionally, as I have recently started learning DevOps, I am focusing on implementing version control, 
                    containerization, and deployment strategies in my projects to enhance their scalability and efficiency. These initiatives 
                    demonstrate my commitment to honing both my development and operational skills for a well-rounded approach to software creation.
                 </Tab.Pane>
                    
                </Tab.Content>
                </Tab.Container>
                </div>}
                </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}