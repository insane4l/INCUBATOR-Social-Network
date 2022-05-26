import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/store';
import { setCurrentPage, setTotalUsersCount, setUsers, toggleFollowedStatus, UserType } from '../../../../redux/usersReducer';
import * as usersSelectors from '../../../../selectors/usersSelectors';
import s from './Users.module.css';

const Users = () => {

    const dispatch = useDispatch();

    const users = useSelector(usersSelectors.getUsers);

    const pageSize = useSelector(usersSelectors.getPageSize);
    const totalUsersCount = useSelector(usersSelectors.getTotalUsersCount);
    const currentPage = useSelector(usersSelectors.getCurrentPage);
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
        });
    }, []);

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
            dispatch(setUsers(response.data.items));
        })
    }, [currentPage]);


    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onPageChanged = (page: number) => {
        dispatch(setCurrentPage(page));
    }

    const mappedPages = pages.map(p => (
        <span
            onClick={() => onPageChanged(p)}
            className={currentPage === p ? s.selected_page : ''}>
            {p}
        </span>
    ))

    const mappedUsers = users.map(u => (
        <User key={u.id} user={u}/>
    ))

    return (
        <>
            {mappedPages}

            <div className={s.users__list}>
                {mappedUsers}
            </div>
        </>
    )
}




type UserPropsType = {
    user: UserType
}

const User: React.FC<UserPropsType> = ({user}) => {

    const {photos, id, name, status, followed} = user;

    const dispatch = useDispatch();

    const toggleFollowed = () => {
        dispatch(toggleFollowedStatus(id))
    }

    

    return (
        <div className={s.users__item}>
            <img className={s.user__photo} src={photos.small || 'https://i.pinimg.com/originals/13/a4/11/13a411076cdee39085cad97da215d9be.png'} alt="user_photo" />
            <div className={s.user__details}>
                <div className={s.user__info}>
                    <div className={s.user__name}>
                        {name}
                    </div>
                    <div className={s.user__status}>
                        {status}
                    </div>
                </div>
                
                <button onClick={toggleFollowed}>
                    {followed ? 'Unfollow' : 'Follow'}
                </button>
                
            </div>
        </div>
    )
}

export default Users;