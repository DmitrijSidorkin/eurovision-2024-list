import CardButton from "./CardButton"
import "./StartScreen.css"

const StartScreen = () => {

    const start = () => {
        document.getElementById("start-screen").style.display="none";
    }

return <div id="start-screen">
    <h1>Best Eurovision 2024 Songs</h1>
    <img className="start-img" src="image.jpg"/>
    <CardButton buttonText="Start" changeSlide={start}/>
</div>
}
export default StartScreen;