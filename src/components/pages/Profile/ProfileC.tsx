import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfile, getProfileStatus, ProfileType, setUserProfile, updateProfileStatus } from '../../../redux/profileReducer';
import { AppStateType } from '../../../redux/store';
import { withRedirect } from '../../common/withRedirect';
import Profile from './Profile';

// 59 lesson (60 lesson cant do like in video course because of react-router-dom v6 have not withRouter HOC)
// class ProfileC extends React.Component<ProfileCPropsType> {

//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
//             this.props.setUserProfile(response.data);
//         });
//     }

//     render() {

//         return (
//             <Profile profile={this.props.profile} />
//         );
//     }
// }

// const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
//     profile: state.profilePage.selectedProfile
// })

// export default connect(mapStateToProps, {setUserProfile})(ProfileC);


// type MapStatePropsType ={
//     profile: ProfileType | null
// }

// type MapDispatchPropsType = {
//     setUserProfile: (profile: any) => void
// }

// type ProfileCPropsType = MapStatePropsType & MapDispatchPropsType

const ProfileC = () => {

    const dispatch = useDispatch();
    const profile = useSelector<AppStateType, ProfileType | null>(state => state.profilePage.selectedProfile);
    const profileStatus = useSelector<AppStateType, string>(state => state.profilePage.profileStatus);
    const error = useSelector<AppStateType, string>(state => state.profilePage.profileError);
    const userId = useParams()?.userId;
    
    useEffect(() => {
        if (userId) {
            dispatch( getProfile(+userId) )
            dispatch( getProfileStatus(+userId) )
        }
    }, [userId, dispatch])

    const updateStatus = (message: string) => {
        dispatch( updateProfileStatus(message) )
    }
    

    return (
        <>
            {error 
                ? <div>{error}</div>
                : <Profile profile={profile} profileStatus={profileStatus} updateStatus={updateStatus}/>
            }
        </>
    )
}


export default withRedirect(ProfileC);