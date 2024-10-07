import React from 'react'
import antaresLogo from './IMAGENES/logo_antares.svg'
const Carrousel = () => {
    return (
        <div className='carrousel'>
                <div className='logos'>
                <img src={antaresLogo} alt="" className='client__logo'/>
                <img src={antaresLogo} alt="" className='client__logo'/>
                <img src={antaresLogo} alt="" className='client__logo'/>
                <img src={antaresLogo} alt="" className='client__logo'/>
                </div>
                <div className='logos logos2'>
                <img src={antaresLogo} alt="" className='client__logo'/>
                <img src={antaresLogo} alt="" className='client__logo'/>
                <img src={antaresLogo} alt="" className='client__logo'/>
                <img src={antaresLogo} alt="" className='client__logo'/>
            </div>

        </div>
    )
}

export default Carrousel