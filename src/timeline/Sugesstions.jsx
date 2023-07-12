import { Avatar } from '@mui/material';
import React from 'react';
import "./Sugesstions.css"
function Sugesstions() {
    return <div className='sugesstions'>
        <div className="sugesstions__title">Sugesstion for you</div>
        <div className="sugesstion__usernames">
            <div className="sugesstion__username">
                <div className="username__left">
                    <span className="avatar">
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username__info">
                        <span className="username">redian_</span>
                        <span className="relation">New to Instagram</span>
                    </div>
                </div>
                <button className="follow__button">Follow</button>
            </div>

            <div className="sugesstion__username">
                <div className="username__left">
                    <span className="avatar">
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username__info">
                        <span className="username">redian_</span>
                        <span className="relation">New to Instagram</span>
                    </div>
                </div>
                <button className="follow__button">Follow</button>
            </div>

            <div className="sugesstion__username">
                <div className="username__left">
                    <span className="avatar">
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username__info">
                        <span className="username">redian_</span>
                        <span className="relation">New to Instagram</span>
                    </div>
                </div>
                <button className="follow__button">Follow</button>
            </div>

            <div className="sugesstion__username">
                <div className="username__left">
                    <span className="avatar">
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username__info">
                        <span className="username">redian_</span>
                        <span className="relation">New to Instagram</span>
                    </div>
                </div>
                <button className="follow__button">Follow</button>
            </div>
        </div>
    </div>;
}

export default Sugesstions;