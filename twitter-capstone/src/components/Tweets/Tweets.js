import React, { useState } from 'react';
import './Tweets.css';
import EditForm from '../EditForm/EditForm';

const Tweets = (props, i) => {
    const [edit, setEdit] = useState({ editing: false, id: 0 })
    return(
        <div className="tweets-container">
            <div className="secondary-container">
                <div className="profile-container">
                <img src={props.item.imgUrl} alt=""/>
                <span className="profile-handle">{props.item.author}</span>
                <p className="handle-name">{props.item.handle}</p>
            </div>
            </div>
            <div className="para-container">
                <p>{props.item.post}</p>
            </div>
            <div className="icons">
                <button className="delete-button" onClick={() => { 
                    console.log(props)
                    props.handleDelete(props.i)}}>
                    <img src="https://img.icons8.com/fluent/15/000000/delete-sign.png" alt=""/>
                </button>
                <button className="edit-button" onClick={() => setEdit({ editing: true, id: props.i })}>
                    <img src="https://img.icons8.com/color/15/000000/edit-file.png" alt=""/>
                </button>
                {/* Two buttons used for decoration purposes. */}
                <button className="delete-button"><img src="https://img.icons8.com/color/20/000000/retweet.png" alt=""/></button>
                <button className="delete-button"><img src="https://img.icons8.com/color/20/000000/share-rounded.png" alt=""/></button>
            </div>
                {edit.editing ? <EditForm
                i = {props.i}
                handleEdit={(i, changes) => {
                props.handleEdit(i, changes)
                setEdit({editing: false, id: props.i})
                }}/>: <p></p> }
            </div>
    )
}

export default Tweets;