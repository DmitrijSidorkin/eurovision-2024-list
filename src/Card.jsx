import { useState } from "react"
import "./Card.css"
import countries from "./Countries"
import CardButton from "./CardButton"
import Entry from "./Entry"
import StartScreen from "./StartScreen"

const Card = () =>{
    const [slideIndex, setSlideIndex] = useState(0);
    const changeSlide = (buttonValue) => {
        setSlideIndex((currentIndex)=>{
            if(currentIndex === 0 && buttonValue === -1){
                return currentIndex
            } else if (currentIndex === countries.length-1 && buttonValue === 1)
            {
                return currentIndex = 0;
            } else {
            return currentIndex += buttonValue;
        }})
    }



   return <div className="card">
    <StartScreen/>
    <Entry country={countries[slideIndex]} position={countries.length-slideIndex}/>
    <div className="buttons">
    <CardButton buttonText="Back" changeSlide={changeSlide} buttonValue={-1}/>
    <CardButton buttonText="Next" changeSlide={changeSlide} buttonValue={1}/>
    </div>
   </div>
}
export default Card;