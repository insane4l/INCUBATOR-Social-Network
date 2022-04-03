import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../redux/usersReducer';
import Spinner from '../../common/Spinner';
import s from './Users.module.css';

const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
        {props.isLoading
            ? <Spinner />
            : <>
                {pages.map(p => (
                    <span
                        key={p}
                        className={props.currentPage === p ? s.selected_page : ''}
                        onClick={() => props.onPageChanged(p)}>
                        {p}
                    </span>
                ))}

                <div className={s.users__list}>
                    {props.users.map(el => (
                            <div key={el.id} className={s.users__item}>
                                <NavLink to={`../profile/${el.id}`}>
                                    <img className={s.user__photo} src={el.photos.small || 'https://i.pinimg.com/originals/13/a4/11/13a411076cdee39085cad97da215d9be.png'} alt="user_photo" />
                                </NavLink>
                                <div className={s.user__details}>
                                    <div className={s.user__info}>
                                        <div className={s.user__name}>
                                            {el.name}
                                        </div>
                                        <div className={s.user__status}>
                                            {el.status}
                                        </div>
                                    </div>


                                    <button onClick={() => props.toggleFollowed(el.id)}>
                                        {el.followed ? 'Unfollow' : 'Follow'}
                                    </button>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        }
        </div>
    )
}

export default Users;



type UsersPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    users: UserType[]
    isLoading: boolean
    onPageChanged: (pageNum: number) => void
    toggleFollowed: (userId: number) => void
}