import {Route, Routes} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Gojo from "./Components/Gojo/Gojo";

export default function Routing(){
    return (
        <Routes>

            <Route path="/" element={<Homepage />} />
            <Route path="gojo" element={<Gojo />} />

        </Routes>
    )
}