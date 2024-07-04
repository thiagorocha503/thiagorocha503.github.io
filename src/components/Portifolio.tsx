import Slider from "./Slider";
import  Container  from "react-bootstrap/Container";

export default function Portifolio() {
    return (
        <div
            id="portifolio"
            className="box d-flex justify-content-center align-items-center"
        >
            <Container fluid={true}>
                <h2 className="text-center">Portifolio</h2>
                <Slider/>
            </Container>
        </div>
    );
}
