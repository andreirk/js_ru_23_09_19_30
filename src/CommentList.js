import React from 'react'
import Comment from './Comment'

export default (props) => {
    const { comments } = props

    const commentComponents = comments ? comments.map(comment => <li key={comment.id}><Comment comment = {comment} /></li>) : 'no comments'

    return (
        <ul>
            {commentComponents}
        </ul>
    )
}