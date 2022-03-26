import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { toggleFollowedStatus, setUsers, setCurrentPage, setTotalUsersCount, UserType } from '../../../redux/usersReducer';
import s from './Users.module.css';

class UsersC extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);

        // this.toggleFollowed = this.toggleFollowed.bind(this);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    toggleFollowed = (id: number) => {
        this.props.toggleFollowedStatus(id);
    }

    onPageChanged = (pageNumber: number) => {

        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {

        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <>

            {
                pages.map(p => (
                    <span 
                        className={this.props.currentPage === p ? s.selected_page : ''}
                        onClick={() => this.onPageChanged(p)}>
                        {p}
                    </span>
                ))
            }

            <div className={s.users__list}>
                {
                    this.props.users.map(el => (
                        <div className={s.users__item}>
                            <img className={s.user__photo} src={el.photos.small || 'https://i.pinimg.com/originals/13/a4/11/13a411076cdee39085cad97da215d9be.png'} alt="user_photo" />
                            <div className={s.user__details}>
                                <div className={s.user__info}>
                                    <div className={s.user__name}>
                                        {el.name}
                                    </div>
                                    <div className={s.user__status}>
                                        {el.status}
                                    </div>
                                </div>

                                
                                <button onClick={() => this.toggleFollowed(el.id)}> 
                                    {el.followed ? 'Unfollow' : 'Follow'}
                                </button>

                            </div>
                        </div>
                    ))
                }
            </div>
            </>
        )
    }
}



const mapStateToProps = (state: any) => ({ // todo: fix any - AppStateType
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})


export default connect<MapStatePropsType, MapDispatchPropsType>(mapStateToProps, {toggleFollowedStatus, setUsers, setCurrentPage, setTotalUsersCount})(UsersC);




type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    toggleFollowedStatus: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
}

type UsersPropsType = MapStatePropsType & MapDispatchPropsType