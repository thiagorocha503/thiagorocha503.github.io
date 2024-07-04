import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFoundPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route index element={<HomePage />} />   
                    <Route path="*" element={<NotFound/>} />                 
               </Routes>
            </Router>
        </div>
    );
}

export default App;
