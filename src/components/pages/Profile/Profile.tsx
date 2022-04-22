import React from "react"
import { ProfileType } from "../../../redux/profileReducer"
import Spinner from "../../common/Spinner"
import PostList from "./PostList/PostList"
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile: React.FC<ProfilePropsType> = (props) => {
	return (
		<div>
			{
				!props.profile
					? <Spinner/>
					: <>
						<ProfileInfo profile={props.profile} profileStatus={props.profileStatus} updateStatus={props.updateStatus}/>
						<PostList />
					</>
			}
		</div>
	)
}

export default Profile;


type ProfilePropsType ={
    profile: ProfileType | null
	profileStatus: string
	updateStatus: (message: string) => void
}
