import React, {Component, ComponentType} from "react";
import Preloader from "../components/common/preloader/Preloader";


export const WithSuspense = (Component: ComponentType) => {

    return (props: any) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}