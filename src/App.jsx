import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NoPage />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

export default App;