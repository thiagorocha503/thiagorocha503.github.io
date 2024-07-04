import Nav from "react-bootstrap/Nav";
import {
    CONTACT_EMAIL,
    FACEBOOK_URL,
    GITHUB_URL,
    INSTAGRAM_URL,
} from "../constants";

export default function Footer() {
    return (
        <footer className="d-flex flex-column">
            <div className="flex-fill  d-flex justify-content-center align-items-center ">
                <ul className="list-unstyled d-flex">
                    <li className="me-3">
                        <Nav.Link href={FACEBOOK_URL} target="_blank">
                            <i className="fa-brands fa-facebook fa-xl"></i>
                        </Nav.Link>
                    </li>
                    <li className="me-3">
                        <Nav.Link href={GITHUB_URL} target="_blank">
                            <i className="fa-brands fa-github fa-xl"></i>
                        </Nav.Link>
                    </li>
                    <li className="me-3">
                        <Nav.Link href={INSTAGRAM_URL} target="_blank">
                            <i className="fa-brands fa-instagram fa-xl"></i>
                        </Nav.Link>
                    </li>
                    <li className="me-3">
                        <Nav.Link
                            title="send email"
                            href={`mailto:${CONTACT_EMAIL}`}
                        >
                            <i className="fa-solid fa-envelope fa-lg"></i>
                        </Nav.Link>
                    </li>
                </ul>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
                <p>
                    &copy; {new Date().getFullYear().toString()} Thiago R.
                    Ferreira&nbsp;-&nbsp;All right reserverd
                </p>
            </div>
        </footer>
    );
}
