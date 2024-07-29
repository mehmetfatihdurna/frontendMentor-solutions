/* eslint-disable react/prop-types */
import {useEffect} from 'react'

export default function ChangeColor({color,children}) {
    const changeColors = (backgroundColor) => {
        document.documentElement.style.setProperty('--background-color', backgroundColor);
      };

      useEffect(() => {
        changeColors(color); // İstediğiniz renkleri buraya girin
      }, [color]);
  return (
    <>
        {children}
    </>
  )
}
