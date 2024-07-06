import {useState} from "react";
import gojo from "../../Styles/Gojo/gojo-satoru.gif";
import murder from "../../Styles/Gojo/Satoru Gojo says I'll murder you.mp3"
import useSound from "use-sound";
export default function Gojo() {
    const [counter, setCounter] = useState(0);
    const [play] = useSound(murder);

    function incrementAndPlay(){
        setCounter(counter + 1);
        play();
    }

    return (
        <div>
            <img src={gojo} alt={"No image!"}/>
            <button onClick={incrementAndPlay}>Press me!</button>
            <p>Times pressed: {counter}</p>
        </div>
    );
}