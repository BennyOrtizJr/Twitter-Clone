import React, {Component} from 'react';
import './TweetsList.css';
import Tweets from '../Tweets/Tweets';
import Navbar from '../Navbar/Navbar';

class TweetsList extends Component{
    constructor(props){
        super(props)
        this.state={
            tweet: this.props.data
        }
    }
    
  render(){
    const newTweets = this.props.data.map((item, i) => <Tweets 
    key={item.id}
    i={item.id} 
    handleEdit={(i, changes) => {
    this.props.handleEdit(i, changes)}}
    handleDelete={this.props.handleDelete}
    item={item}/>)
        return(
            <div className="list-container">
                <Navbar />
                <div className="tweet-content ">
                    {newTweets}
                </div>
                <div className="search-input">
                    <input
                    type="search"
                    name="search"
                    placeholder="Search Twitter"
                    />
                <div className="relevant-content">
                    <h4>Relevant Info</h4>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr5x97Fhs9VbNMrOVgyMuLuCYQuuaGg5ZiHQ&usqp=CAU" alt=""/>
                    <span className="profile-handle2">Admin</span>
                    <p className="handle-name2">@Twitter</p>
                    <p>Twitter bans thousands of QAnon accounts, becoming the first major platform to take aggressive action to limit the discredited conspiracy theory's spread.</p>
                    <br/>
                    {/* Footer */}
                    <a href="www.terms.com">Terms&nbsp;</a>
                    <a href="www.privacypolicy.com">PrivacyPolicy</a> 
                    <a href="www.cookies.com">&nbsp;Cookies</a> 
                    <a href="www.adsinfo.com">&nbsp;Ads Info</a> 
                    <a href="www.more.com">&nbsp;More</a>
                    <p>&copy;2020 Student, Bryan University</p>
                </div>
                </div>
            </div>
        )
    }
}
  
export default TweetsList;