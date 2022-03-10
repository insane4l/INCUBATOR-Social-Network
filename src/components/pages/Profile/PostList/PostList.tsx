import React, { createRef, useRef } from "react"
import { connect } from "react-redux"
import { addPostAC, ProfilePostsType, setNewPostMessageAC } from "../../../../redux/profileReducer"
import { AppStateType } from "../../../../redux/store"
import PostItem from "./PostItem/PostItem"
import s from './PostList.module.css'

const PostList: React.FC<PostListPropsType> = ({posts, addPost, onNewPostMesageChanged, newPostText}) => {
	
	return (
		<div className={s.postList}>
			<h2>My posts</h2>
			<div className={s.postAddForm}>
			<textarea value={newPostText} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onNewPostMesageChanged(e.currentTarget.value)}>

			</textarea>
			<button onClick={addPost}>Add post</button>
			</div>

			<div className={s.itemsList}>
				{[...posts].reverse().map( el => <PostItem key={el.id} postText={el.text} likesCounter={el.likesCount}/> )}
			</div>
		</div>
	)
}


const mapStateToProps = (state: AppStateType) => ({
	posts: state.profilePage.posts,
	newPostText: state.profilePage.newPostText
})
const mapDispatchToProps = {
	addPost: addPostAC,
	onNewPostMesageChanged: setNewPostMessageAC
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);



type PostListPropsType = {
	posts: ProfilePostsType
	newPostText: string
	addPost: () => void
	onNewPostMesageChanged: (body: string) => void
}