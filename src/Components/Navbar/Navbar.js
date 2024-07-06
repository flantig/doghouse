import '../../Styles/Navbar/styles.css'
import borzoi from "../../Styles/Navbar/borzoi.gif"
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        <img src={borzoi} width={"50px"} alt={"No image!"}/>
                    </div>
                    <div className="nav-elements">
                        <ul>
                            <li>
                                <Link to="/">
                                    <button>Home</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="gojo">
                                    <button>Gojo</button>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}