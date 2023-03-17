import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
    render() {
        return (
            <div>
                <div className='main_container'>
        <div className='logos'>
            <img src={process.env.PUBLIC_URL + '/img/capstone-logo.png'}/>
        </div>
        <div>
            <form>
                <div>
                    <div>
                        <label for="id" className='labels'>닉네임</label>
                    </div>
                    <div>
                        <input type="text" id="id" className='inputs inputs_one'/>
                    </div>
                </div>
                <div>
                    <div>
                        <label for="tel">연락처</label>
                    </div>
                    <div>
                        <input type="text" id="tel" className='inputs inputs_one'/>
                    </div>
                </div>
                <div>
                    <div>
                        <label for="birth">생년월일</label>
                    </div>
                    <div>
                        
                        <select id="birth-year" className='inputs inputs_three'>
                            <option disabled selected>년</option>

                        </select>
                        <select id="birth-month" className='inputs inputs_three'>
                            <option disabled selected>월</option>

                        </select>
                        <select id="birth-day" className='inputs inputs_three'>
                            <option disabled selected>일</option>
                            
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        성별
                    </div>
                    <div className='selects'>
                        <input type="radio" name="gender" id="man" className='radios'/><label for="man">남</label>
                        <input type="radio" name="gender" id="woman" className='radios'/><label for="woman">여</label>
                    </div>
                </div>
                <div>
                    <div>
                        {/* 거주지역 */}
                    </div>
                    <div>
                        <select id="area-city" className='inputs inputs_two'>
                            <option disabled selected>시/도</option>
                            <option value="서울특별시">서울특별시</option>                
                            <option value="부산광역시">부산광역시</option>
                            <option value="대구광역시">대구광역시</option>
                            <option value="인천광역시">인천광역시</option>
                            <option value="광주광역시">광주광역시</option>                            
                            <option value="대전광역시">대전광역시</option>
                            <option value="울산광역시">울산광역시</option>                            
                            <option value="세종특별자치도">세종특별자치도</option>
                            <option value="경기도">경기도</option>
                            <option value="강원도">강원도</option>                            
                            <option value="충청북도">충청북도</option>
                            <option value="충청남도">충청남도</option>                            
                            <option value="전라북도">전라북도</option>                            
                            <option value="전라남도">전라남도</option>                            
                            <option value="경상북도">경상북도</option>                            
                            <option value="경상남도">경상남도</option>
                            <option value="제주특별자치도">제주특별자치도</option>
                        </select>
                        <select id="birth-dist" className='inputs inputs_two'>
                            <option disabled selected>구/군</option>
                            
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        {/* <!-- <label for="">관심분야</label> --> */}
                    </div>
                    <div>
                        <input type="checkbox"/>어학
                    </div>
                </div>
                <div>
                    <input type="submit" className='SignIn-buttons' value="회원가입"/>
                </div>
            
            </form>
        </div>
    </div>
            </div>
        );
    }
}

export default SignIn;