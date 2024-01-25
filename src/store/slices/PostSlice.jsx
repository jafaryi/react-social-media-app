import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    posts: [
        {
            id: null,
            title: '',
            content: '',
            likes: [],
            dislikes: [],
            comments: [
                {
                    id: null,
                    content: '',
                    likes: [],
                    dislikes: [],
                },
            ]
        }
    ],
}

const PostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)

        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        updatePost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id)
            state.posts[index] = action.payload
        },
        addComment: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id)
            state.posts[index].comments.push(action.payload.comment)
        },
        deleteComment: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.postId)
            state.posts[index].comments = state.posts[index].comments.filter(comment => comment.id !== action.payload.commentId)
        },
        updateComment: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.postId)
            const commentIndex = state.posts[index].comments.findIndex(comment => comment.id === action.payload.commentId)
            state.posts[index].comments[commentIndex] = action.payload.comment
        },
        likePost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.postId)
            if (state.posts[index].dislikes.includes(action.payload.userId)) {
                const dislikeIndex = state.posts[index].dislikes.indexOf(action.payload.userId)
                state.posts[index].dislikes.splice(dislikeIndex, 1)
            }
            state.posts[index].likes.push(action.payload.userId)
        },
        dislikePost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.postId)
            if (state.posts[index].likes.includes(action.payload.userId)) {
                const likeIndex = state.posts[index].likes.indexOf(action.payload.userId)
                state.posts[index].likes.splice(likeIndex, 1)
            }
            state.posts[index].dislikes.push(action.payload.userId)
        },
        likeComment: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.postId)
            if (state.posts[index].comments[action.payload.commentIndex].dislikes.includes(action.payload.userId)) {
                const dislikeIndex = state.posts[index].comments[action.payload.commentIndex].dislikes.indexOf(action.payload.userId)
                state.posts[index].comments[action.payload.commentIndex].dislikes.splice(dislikeIndex, 1)
            }
            state.posts[index].comments[action.payload.commentIndex].likes.push(action.payload.userId)
        },
        dislikeComment: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.postId)
            if (state.posts[index].comments[action.payload.commentIndex].likes.includes(action.payload.userId)) {
                const likeIndex = state.posts[index].comments[action.payload.commentIndex].likes.indexOf(action.payload.userId)
                state.posts[index].comments[action.payload.commentIndex].likes.splice(likeIndex, 1)
            }
            state.posts[index].comments[action.payload.commentIndex].dislikes.push(action.payload.userId)
        },
    }
})

export const {addPost, deletePost, updatePost, addComment, deleteComment, updateComment, likePost, dislikePost, likeComment, dislikeComment} = PostSlice.actions
export default PostSlice.reducer
