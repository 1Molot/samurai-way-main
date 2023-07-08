import React from 'react';
import {UserType} from "../../redux/users-reducer";


type FriendsType = {
   friends: UserType[]
}

export const Friends = (props:FriendsType) => {
const {friends}=props;

    return (
        <div>
            {friends.map(({status,photos,id,name,location,followed}) => {
                return <div>

                </div>
            })}

        </div>
    )
}