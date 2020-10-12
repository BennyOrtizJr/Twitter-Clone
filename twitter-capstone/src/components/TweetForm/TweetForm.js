import React, { Component } from 'react';
import './TweetForm.css';
import TweetsList from '../TweetsList/TweetsList';
import data from '../data/data';

class TweetForm extends Component{
    constructor(){
        super()
        this.state={
            imgUrl: "",
            author: "",
            handle: "",
            post: "",
            data: data
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value })
    }

    handleEdit = (i, changes) => {
        this.setState(prevState => {
        let array = prevState.data
        const index = array.findIndex(tweet => tweet.id === i)
        const updatedTweet = Object.assign(array[index], changes)
        return({ data: array })})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newPostData = {
            imgUrl: this.state.imgUrl,
            author: this.state.author,
            handle: this.state.handle,
            post: this.state.post,
            id: this.state.data.length + 1
        }
        this.setState( prevState => ({ data : [ ...prevState.data, newPostData ],
            imgUrl: "",
            author: "",
            handle: "",
            post: ""
        }))
    }

    handleDelete = (i) => {
        this.setState(prevState => {
            let array = prevState.data
            let search = array.filter(tweet => tweet.id !== i)
            return({ data: search })})
    }

    render(){
        return (
            <div>
              <form className="post-form" onSubmit={this.handleSubmit}>
              <img src="https://img.icons8.com/fluent/60/000000/twitter.png" alt=""/>
                <input
                    type="url"
                    name="imgUrl"
                    value={this.state.imgUrl}
                    placeholder="Image Url"
                    required={true}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="author"
                    value={this.state.author}
                    placeholder="Author"
                    required={true}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="handle"
                    value={this.state.handle}
                    placeholder="@Handle"
                    required={true}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="post"
                    value={this.state.post}
                    minLength="3"
                    placeholder="What's on you mind?"
                    required={true}
                    onChange={this.handleChange}
                />
                <button className="submit-post">Tweet</button>
              </form>
              <TweetsList 
                data={this.state.data}
                handleEdit={(i, changes) => {
                this.handleEdit(i, changes)}}
                handleDelete={this.handleDelete}
              />
            </div>
          );
    }
}

export default TweetForm;