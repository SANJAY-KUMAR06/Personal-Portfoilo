import { Container,Row,Col } from "react-bootstrap"
import logoImg from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from "../assets/img/nav-icon4.svg"
export const Footer=()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col size={12} sm={6}>
                        <img src={logoImg}/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon socialIcon">
                        <a href="https://www.linkedin.com/in/sanjay-kumar-k-49bb722a5/"><img src={navIcon1} alt=""/></a>
                        <a href="https://github.com/SANJAY-KUMAR06"><img src={navIcon4} alt=""/></a> 
                        <a href="https://www.instagram.com/_sanjay_k06_?utm_source=qr&igsh=cGd0NnU1NXVkYTBu"><img src={navIcon3} alt=""/></a> 
                    </div>
                    <p>CopyRight 2024.All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}