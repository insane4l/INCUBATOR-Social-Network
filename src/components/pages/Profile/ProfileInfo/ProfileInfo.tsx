import React from "react"
import s from './ProfileInfo.module.css'

const ProfileInfo: React.FC = () => {
	return (
		<div>
			<div>
				<img className={s.coverImg} src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
			</div>
			<div className={s.descrBlock} >ava + description</div>
		</div>
	)
}

export default ProfileInfo
