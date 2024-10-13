import { MainContext, useContext } from "./context";
import style from "../../assets/styles/PlanetFactSite.module.css";

export default function Navbar() {
  
  const {isMenuOpen, setMenu} = useContext(MainContext)

  return (
    <div className={style.navbar}>
        <h2 className={style.h2}>THE PLANETS</h2>
        <img onClick={()=>{setMenu(!isMenuOpen)}} className={style.threeLine} src={`/images/planet-fact-site/${isMenuOpen ? 'threeLine.svg' : 'threeLineWhite.svg'}`} alt="threeLine"/>
    </div>
  )
}
