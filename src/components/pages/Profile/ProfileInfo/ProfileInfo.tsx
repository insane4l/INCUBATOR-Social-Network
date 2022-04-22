import React from "react";
import { ProfileType } from "../../../../redux/profileReducer";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, profileStatus, updateStatus}) => {

	return (
		<div>
			<div>
				<img className={s.coverImg} src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt="profile_cover_image"/>
			</div>
			<div className={s.descrBlock} >
				<img className={s.profileImg} src={profile?.photos.small || 'https://i.pinimg.com/originals/13/a4/11/13a411076cdee39085cad97da215d9be.png'} alt="user_photo" />
				<span className={s.profileName} >{profile?.fullName}</span>
				<ProfileStatus status={profileStatus} changeValue={updateStatus}/>
				<span className={s.profileStatus} >{profile?.aboutMe}</span>
			</div>
		</div>
	)
}

export default ProfileInfo;


type ProfileInfoPropsType = {
	profile: ProfileType | null
	profileStatus: string
	updateStatus: (message: string) => void
}