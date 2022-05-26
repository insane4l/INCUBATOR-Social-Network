import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserType } from '../../../redux/usersReducer'
import s from './Users.module.css'

const User: React.FC<UserPropsType> = ({user, followingInProgress, toggleFollowed}) => {
    return (
        <div key={user.id} className={s.users__item}>
            <NavLink to={`../profile/${user.id}`}>
                <img className={s.user__photo} src={user.photos.small || 'https://i.pinimg.com/originals/13/a4/11/13a411076cdee39085cad97da215d9be.png'} alt="user_photo" />
            </NavLink>
            <div className={s.user__details}>
                <div className={s.user__info}>
                    <div className={s.user__name}>
                        {user.name}
                    </div>
                    <div className={s.user__status}>
                        {user.status}
                    </div>
                </div>


                <button className={s.followBtn} onClick={() => toggleFollowed(user.id, user.followed)} disabled={followingInProgress.some(id => id === user.id)}>
                    {user.followed ? 'Unfollow' : 'Follow'}
                </button>

            </div>
        </div>
    )
}

export default User


type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    toggleFollowed: (userId: number, isFollowed: boolean) => void
}