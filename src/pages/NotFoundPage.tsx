import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div
        style={{height:"100vh"}}
           className="d-flex justify-content-center align-items-center"
        >
            <div>
                <h1 className="fw-bold display-1">404</h1>
                <h4>Page Not found</h4>
                <Link className="btn btn-primary" to={"/"} >Go Home</Link>
            </div>
        </div>
    );
}
