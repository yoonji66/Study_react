import React, { Component } from 'react';
import './Mypage.css';

class Mypage extends Component {
    render() {
        return (
            <div>
                <div className="profile">
                    <div>
                    <label for="id" className='nick_profile'>닉네임 프로필</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mypage;