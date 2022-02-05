import React from "react"
import PostList from "./PostList/PostList"
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile: React.FC = () => {
	return (
		<div>
			<ProfileInfo />
			<PostList />
		</div>
	)
}

export default Profile
