import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { toggleFollowedStatus, setUsers, setCurrentPage, setTotalUsersCount, setLoadingStatus, UserType } from '../../../redux/usersReducer';
import Users from './Users';

class UsersC extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
        
        // this.toggleFollowed = this.toggleFollowed.bind(this);
    }

    componentDidMount() {
        this.props.setLoadingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setLoadingStatus(false); 
        });
    }

    toggleFollowed = (id: number) => {
        this.props.toggleFollowedStatus(id);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setLoadingStatus(true);
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setLoadingStatus(false); 
            })
    }

    render() {
        return (
            <Users
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isLoading={this.props.isLoading}
                onPageChanged={this.onPageChanged}
                toggleFollowed={this.toggleFollowed}/>
        )
    }
}



const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
})


export default connect(mapStateToProps, {toggleFollowedStatus, setUsers, setCurrentPage, setTotalUsersCount, setLoadingStatus})(UsersC);




type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}
type MapDispatchPropsType = {
    toggleFollowedStatus: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    setLoadingStatus: (isLoading: boolean) => void
}

type UsersPropsType = MapStatePropsType & MapDispatchPropsType