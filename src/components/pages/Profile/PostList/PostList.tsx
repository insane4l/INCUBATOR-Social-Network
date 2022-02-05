import React from "react"
import PostItem from "./PostItem/PostItem"
import s from './PostList.module.css'

const PostList: React.FC = () => {

	const postData = [
		{text: 'First post. Hello friends!', likesCount: 10, id: 1},
		{text: 'My second post.', likesCount: 0, id: 2},
		{text: 'Add me to friends', likesCount: 6, id: 3},
	]

	return (
		<div className={s.postList}>
			<h2>My posts</h2>
			<div className={s.postAddForm}>
			<textarea>

			</textarea>
			<button>Add post</button>
			</div>

			<div className={s.itemsList}>
				{[...postData].reverse().map( el => <PostItem postText={el.text} likesCounter={el.likesCount}/> )}
			</div>
		</div>
	)
}

export default PostList
