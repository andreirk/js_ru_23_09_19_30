import React, { Component } from 'react'

import CommentList from './CommentList'

export default class Article extends Component {

  state = {
        isOpen: false,
        opened: {
            a: true
        },
        isClicked : false,
}

    render() {
        const { article } = this.props
        const { isOpen } = this.state
        const { isClicked } = this.state

        const body = isOpen ? <section>{article.text}</section> : null

        console.log('is clicked is ' + isClicked);

        const commentsBody = isClicked ? <CommentList comments = {article.comments} > {isOpen} </CommentList> : null

        return (
            <div>
                <h3 onClick = {this.toggleOpen} >{article.title}</h3>
                {body}
                <button onClick = {this.toggleCommentsOpen} > {isClicked ?  'hide comments' : 'Show comments'} </button >

                {commentsBody}
                
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })    
/*
        this.setState({
            opened: {...this.state.opened, a: false}
        })
*/
    }

    toggleCommentsOpen = ev => {
        console.log('iscliked is ' + this.state.isClicked )
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
}

/*
export default (props) => {
    const { comment } = props

    return (
        <div>
            <h3>{comment.title}</h3>
            <section>{comment.text}</section>
        </div>
    )
}*/
