import {UserType} from "../../redux/users-reducer";

type NewObjType = {
    followed: boolean
}

export const updateObjectInArray = (items:UserType[], itemId:string,objPropName: keyof UserType, newObjProps: NewObjType) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}
