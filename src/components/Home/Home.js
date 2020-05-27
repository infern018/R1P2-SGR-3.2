import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Home.css'

class Home extends Component {
    render(){
        return (
            <div>
                <div className="section1">
                    <div className="header">
                        <h2>Movie Looper</h2>
                        <blockquote>A ReactJs based web app, that fetches you the latest movies on just a click! The app is based on React framework and uses tMDB API.</blockquote>
                    </div>
                    <div className="container">
                        <div className="split-left">
                            <a className="button" id="button-search"><Link to="/SBT">Search by Title</Link></a>
                        </div>
                        <div className="split-right">
                            <a className="button" id="button-search"><Link to="/SGT">Search by Genre</Link></a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home