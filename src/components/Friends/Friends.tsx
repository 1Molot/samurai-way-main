import React, {useEffect, useState} from 'react';
import {UserType} from "../../redux/users-reducer";
import {instance} from "../../api/api";


type FriendsType = {
    // friends: UserType[]
}

export const Friends = (props: FriendsType) => {
    // const {friends} = props;

    const [friends, setFrends] = useState<UserType[]>([])

    useEffect(() => {
// instance.get()
    })


    return (
        <div>
            {friends.map(({status, photos, id, name, location, followed}) => {
                return <div>

                </div>
            })}

        </div>
    )
}