import React from 'react';
import preloader from "../../../assets/imges/preloader.gif";


let Preloader = (props:any) => {

    return (
            <div style={{backgroundColor: 'white'}}>
                <img src={preloader} />
            </div>

    )
}

export default Preloader;