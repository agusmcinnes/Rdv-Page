import React, {useEffect} from 'react'
import antaresLogo from './IMAGENES/logo_antares.svg'
import Lh_Logo from './IMAGENES/LH.png'
import mambru from './IMAGENES/MAMBRU.png'
import isko from './IMAGENES/ISKO.png'
import bluhen from './IMAGENES/BLUHEN.png'
import kersen from './IMAGENES/KERSEN.webp'
import fabric from './IMAGENES/FABRIC.webp'
import ola from './IMAGENES/OLA.png'
import normandina from './IMAGENES/NORMANDINA.png'
import batuta from './IMAGENES/BATUTA.png'
import sj from './IMAGENES/SJ.png'




const Carrousel = () => {


    useEffect(() => {
        const logos = document.querySelectorAll('.logos');
        const carrousel = document.querySelectorAll('.carrousel');
        
        const observerCarrousel = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('sliderNew');
            }
          });
        });
    
        carrousel.forEach((seccion) => observerCarrousel.observe(seccion));
        
        // Cleanup function
        return () => {
          carrousel.forEach((seccion) => observerCarrousel.unobserve(seccion));
        };
      }, []);
  
    return (
        <div className='carrousel'>
            <div className='logos__wrapper'>
            <div className='logos addSlider'>
                <img src={antaresLogo} alt="antares" className='client__logo' loading='lazy'/>
                <img src={Lh_Logo} alt="lh" className='client__logo' loading='lazy'/>
                <img src={bluhen} alt="bluhen" className='client__logo' loading='lazy'/>
                <img src={isko} alt="isko" className='client__logo' loading='lazy'/>
                <img src={mambru} alt="mambru" className='client__logo' loading='lazy'/>
                <img src={fabric} alt="fabric" className='client__logo' loading='lazy'/>
                <img src={kersen} alt="kersen" className='client__logo' loading='lazy'/>
                <img src={ola} alt="ola" className='client__logo' loading='lazy'/>
                <img src={normandina} alt="normandina" className='client__logo' loading='lazy'/>
                <img src={batuta} alt="batuta" className='client__logo' loading='lazy'/>
                <img src={sj} alt="sj" className='client__logo' loading='lazy'/>
                </div>
                <div className='logos addSlider'>
                <img src={antaresLogo} alt="antares" className='client__logo' loading='lazy'/>
                <img src={Lh_Logo} alt="lh" className='client__logo' loading='lazy'/>
                <img src={bluhen} alt="bluhen" className='client__logo' loading='lazy'/>
                <img src={isko} alt="isko" className='client__logo' loading='lazy'/>
                <img src={mambru} alt="mambru" className='client__logo' loading='lazy'/>
                <img src={fabric} alt="fabric" className='client__logo' loading='lazy'/>
                <img src={kersen} alt="kersen" className='client__logo' loading='lazy'/>
                <img src={ola} alt="ola" className='client__logo' loading='lazy'/>
                <img src={normandina} alt="normandina" className='client__logo' loading='lazy'/>
                <img src={batuta} alt="batuta" className='client__logo' loading='lazy'/>
                <img src={sj} alt="sj" className='client__logo' loading='lazy'/>
            </div>

        </div>
            </div>

    )
}

export default Carrousel