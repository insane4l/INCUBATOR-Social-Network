import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../redux/usersReducer';
import Paginator from '../../common/Paginator/Paginator';
import Spinner from '../../common/Spinner';
import User from './User';
import s from './Users.module.css';

const Users: React.FC<UsersPropsType> = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let pages = [];

    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }

    return (
        <div>
        {props.isLoading
            ? <Spinner />
            : <>
                {/* {pages.map(p => (
                    <span
                        key={p}
                        className={props.currentPage === p ? s.selected_page : ''}
                        onClick={() => props.onPageChanged(p)}>
                        {p}
                    </span>
                ))} */}

                <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

                <div className={s.users__list}>
                    {props.users.map(user => <User key={user.id} user={user} followingInProgress={props.followingInProgress} toggleFollowed={props.toggleFollowed} />)}
                    {/* {props.users.map(el => (
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


                                    <button className={s.followBtn} onClick={() => props.toggleFollowed(el.id, el.followed)} disabled={props.followingInProgress.some(id => id === el.id)}>
                                        {el.followed ? 'Unfollow' : 'Follow'}
                                    </button>

                                </div>
                            </div>
                        ))
                    } */}
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
    followingInProgress: Array<number>
    onPageChanged: (pageNum: number) => void
    toggleFollowed: (userId: number, isFollowed: boolean) => void
}