import React, { Component } from 'react';
import '../EditForm/EditForm.css';

class EditForm extends Component{
    constructor(){
        super()
        this.state={
            imgUrl: "",
            author: "",
            handle: "",
            post: ""
        }
    }
        
    handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name] : value })
    }

    render(){return(
        <form className="edit-form" >
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
            <button onClick={(e) => {
                e.preventDefault()
                this.props.handleEdit(this.props.i, this.state)
                this.setState( prevState => ({
                    imgUrl: "",
                    author: "",
                    handle: "",
                    post: ""
                }))
                }}className="submit-edit">ReTweet
            </button>
        </form>
    )}
}

export default EditForm;