import { useEffect } from "react"
import Navbar from "./Navbar";
import style from "../../assets/styles/PlanetFactSite.module.css"


export default function PlanetFactSite() {

    useEffect(()=>{
        document.title = "Planet Fact Site";
    }, []);

    const planetNames = ["MERCURY", "VENUS","EARTH","MARS","JUPITER","SATURN","URANUS","NEPTUNE"];
    const planetColors = ["#DEF4FC","#F7CC7F","#545BFE","#FF6A45","#ECAD7A","#FCCB6B","#65F0D5","#497EFA"];

    var planetButtons = [];

    for (let index = 0; index < planetNames.length; index++) {
      planetButtons.push(<div>
        <div className={style.planetButtons}>
          <div className={style.planetAndText}>
          <svg width="20" height="20" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill={planetColors[index]}/>
          </svg>
            <p className={style.planetText}>{planetNames[index]}</p>
          </div>
          <img src="/images/planet-fact-site/right-arrow.svg" alt="" />
        </div>
        <div className={style.line}></div>
      </div>);
      
    }

    
  return (
    <div className={style.body}>
      <Navbar></Navbar>
      <div className={style.buttonsGap}>
        {planetButtons}
      </div>
      
    </div>
  )
}
