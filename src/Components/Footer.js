import { Col, Container,Row } from "react-bootstrap";
import logo from "../assets/img/pngwing.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import cv from '../assets/img/icons8-resume-96.png';
export const Footer = () => {
    return (
        <footer className="footer"> 
        <Container className="pt-4">
            <Row className="align-item-center">
                <Col sm={6}>
                    <img src={logo} alt="" />
                </Col>
                <Col sm={6} className="text-center text-sm-end ">
                    <div className="social-icon">
                    <a href="https://drive.google.com/file/d/10X6gN9NrnTuAXtsry-Ij7cXz6vnG1xki/view?usp=drivesdk" target="_blank"><img src={cv} alt="" /></a>
                        <a href="https://www.linkedin.com/in/mohnish6398/" target="_blank"><img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/MohnishKaushik" target="_blank"><img src={navIcon2} alt="" /></a>
                        <a href="" target="_blank"><img src={navIcon3} alt="" /></a>
                    </div>
                <p>CopyRight 2023. All Right Reserved.</p>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}