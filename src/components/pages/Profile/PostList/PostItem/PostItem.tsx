import React from "react"
import s from './PostItem.module.css'

const PostItem: React.FC<PostItemPropsType> = ({userImg, postText, likesCounter}) => {
	return (
		<div className={s.item}>
			<img className={s.img} src={userImg || 'https://i.pinimg.com/originals/13/a4/11/13a411076cdee39085cad97da215d9be.png'} alt="" />
			<span className={s.text}>{postText}</span>
			<div className={s.like}>like {likesCounter || ""}</div>
		</div>
	)
}

export default PostItem


type PostItemPropsType = {
	userImg?: string
	postText: string | undefined
	likesCounter: number
}