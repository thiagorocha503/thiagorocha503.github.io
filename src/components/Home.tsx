import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Home() {
    return (
        <div
            id="home"
            className="box d-flex justify-content-center align-items-center h-100"
        >
            <Container fluid={true}>
                <Row className="h-100 ">
                    <Col className="d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="display-1 ">Hi! I’m Thiago</h1>
                            <h2 className="display-6 ">I'm web developer</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
