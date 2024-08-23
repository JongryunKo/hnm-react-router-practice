import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    const navigate = useNavigate()
    let [width, setWidth] = useState(0)
    const search = (event) => {
        let keyword
        if (event.key === "Enter") {
            keyword = event.target.value
            //url을 바꿔준다
            navigate(`/?q=${keyword}`);
        }
    }
    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>
            <div className='nav-header'>
                <div className="burger-menu">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                </div>
                {authenticate ? (
                    <div>
                        <div className='login-button' onClick={() => setAuthenticate(false)}>
                            <FontAwesomeIcon icon={faUser} />
                            <div>로그아웃</div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='login-button' onClick={() => navigate("/login")}>
                            <FontAwesomeIcon icon={faUser} />
                            <div>로그인</div>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <div className='nav-section'>
                    <img width={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTdkl-tdfUNIFDfpFnTaM_EfRy1aJheyur4A&s' alt='' onClick={() => navigate('/')} />
                </div>
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input className='search-input' type='text' onKeyDown={(event) => search(event)} id='' />
                </div>
            </div>
        </div>
    )
}

export default Navbar