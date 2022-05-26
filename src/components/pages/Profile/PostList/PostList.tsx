import React, { createRef, useRef } from "react"
import { connect } from "react-redux"
import { addPostAC, ProfilePostsType } from "../../../../redux/profileReducer"
import { AppStateType } from "../../../../redux/store"
import { getProfilePosts } from "../../../../selectors/profileSelectors"
import AddPostForm from "./AddPostForm/AddPostForm"
import PostItem from "./PostItem/PostItem"
import s from './PostList.module.css'

const PostList: React.FC<PostListPropsType> = ({posts, addPost}) => {
	
	return (
		<div className={s.postList}>
			<h2>My posts</h2>

			<AddPostForm addPost={addPost} />

			<div className={s.itemsList}>
				{[...posts].reverse().map( el => <PostItem key={el.id} postText={el.text} likesCounter={el.likesCount}/> )}
			</div>
		</div>
	)
}


const mapStateToProps = (state: AppStateType) => ({
	posts: getProfilePosts(state),
})
const mapDispatchToProps = {
	addPost: addPostAC,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);



type PostListPropsType = {
	posts: ProfilePostsType
	addPost: (message: string) => void
}