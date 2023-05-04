import React from 'react';
import preloader from "../../../assets/imges/preloader.gif";


let Preloader = () => {

    return (
            <div style={{backgroundColor: 'white'}}>
                <img src={preloader} />
            </div>

    )
}

export default Preloader;