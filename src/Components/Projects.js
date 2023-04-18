import {Col, Container, Tab,Row,Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import projImg1 from "../assets/img/project-img1.png"
import banner from "../assets/img/banner.png"
import weather from "../assets/img/weather app.avif"
import car from "../assets/img/car1.png"
import eCommerce from "../assets/img/eCommerce.jpg"
import projImg2 from "../assets/img/chat app2.png"
import projImg3 from "../assets/img/Newsapp1.jpg"
export const Projects = () => {

    const projects = [
        {
            title: "Text Editor",
            description: "Design & Development",
            imgUrl: banner,
        },
        {
            title: "Weather App",
            description: "Design & Development",
            imgUrl: weather,
        },
        {
            title: "Car Servicing Website",
            description: "Design & Development",
            imgUrl: car,
        },
        {
            title: "Ecommerce Website",
            description: "Design & Development",
            imgUrl: eCommerce,
        },
        {
            title: "Online Chat App",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "News App",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Projects are a great way to showcase your skills and experience. In this section, I have highlighted some of my most significant and relevant projects, along with a brief description of each. These projects have allowed me to demonstrate my ability to [insert skills that you showcased in the projects], as well as to gain valuable experience in the software engineering field.</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab one</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                   Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index)=> {
                                            return (
                                                <ProjectCard key={index}{...project}/>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                mk
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                mk
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right" alt="" />
        </section>
    )
}