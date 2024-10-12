import style from "../../assets/styles/PlanetFactSite.module.css";

export default function Navbar() {
  return (
    <div className={style.navbar}>
        <h2 className={style.h2}>THE PLANETS</h2>
        <img src="/images/planet-fact-site/threeLine.svg" alt="threeLine"/>
    </div>
  )
}
