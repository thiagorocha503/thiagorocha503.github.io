import FormContact from "./FormContact";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Contact() {
    return (
        <div
            id="contact"
            className="box d-flex justify-content-center align-items-center"
        >
            <Container fluid={true} className="text-start">
                <Row>
                    <Col md={10} lg={8} className="m-auto">
                        <h2 className="text-center">Contact</h2>
                        <FormContact></FormContact>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
