import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function About() {
    return (
        <div
            id="about"
            className="box d-flex justify-content-center align-items-center "
        >
            <Container fluid={true}>
                <Row className="h-100">
                    <Col md="10" lg="8" className="m-auto">
                        <div className="d-flex  align-items-center flex-column flex-md-row">
                            <div className="text-center px-2">
                                <img
                                    className="rounded-circle img-fluid d-block d-md-none"
                                    src="https://i.ibb.co/Nm0MVyX/profile1.jpg"
                                    alt="thiago ferreira profile 1"
                                />
                                <img
                                    className="rounded-circle img-fluid d-none d-md-block"
                                    src="https://i.ibb.co/JcwtwZ8/profile2.jpg"
                                    alt="thiago ferreira profile 2"
                                />
                            </div>
                            <div className="px-2">
                                <h2 className="text-center text-md-start text-md-left">
                                    About
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Pellentesque non diam
                                    purus. Curabitur ut risus vestibulum,
                                    ullamcorper orci quis, tincidunt lectus.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
