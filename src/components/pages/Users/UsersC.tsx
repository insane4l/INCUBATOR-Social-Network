import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { toggleFollowed, setCurrentPage, UserType, getUsers } from '../../../redux/usersReducer';
import Users from './Users';

class UsersC extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
        
        // this.toggleFollowed = this.toggleFollowed.bind(this);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                toggleFollowed={this.props.toggleFollowed} 
                followingInProgress={this.props.followingInProgress} />
        )
    }
}



const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
})


export default connect(mapStateToProps, {toggleFollowed, setCurrentPage, getUsers})(UsersC);




type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    toggleFollowed: (id: number, isFollowed: boolean) => void
    setCurrentPage: (page: number) => void
    getUsers: (pageNumber: number, pageSize: number) => void
}

type UsersPropsType = MapStatePropsType & MapDispatchPropsType