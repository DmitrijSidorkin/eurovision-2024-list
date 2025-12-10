import "./Entry.css"
import YoutubeEmbed from "./YoutubeEmbed"
export default function Entry({country, position}){
    console.log(country.name)
    return <div className="entry">
    <div className="title">
        <div className="name"><h1 className="title-nr">{position}.</h1>
        <h1 className="title-country">{country.name}</h1>
        <img className="title-img" src={`./flags/${country.flag}.svg`}/>
        </div>
        <h1 className="title-score">{country.avgScore}</h1>
    </div>
   <YoutubeEmbed link={country.link}/>
    <div className="individual-scores">
        <span className="daScore">DA - {country.daScore}</span>
        <span className="kukiScore">Kuki - {country.kukiScore}</span>
        <span className="uniScore">Uni - {country.uniScore}</span>
    </div>
    </div>
}