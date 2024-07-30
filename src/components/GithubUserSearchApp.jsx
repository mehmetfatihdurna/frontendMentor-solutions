import '../assets/styles/GithubUserSearchApp.css';
import { FaMoon, FaLink } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

import { FaLocationDot } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

export default function GithubUserSearchApp() {

    return (
        <div className='body light-theme space-mono-regular'>
            <div className='container'>
                {/**Dev Finder and Theme Toogle */}
                <div className='navbar'>
                    <h1 className='space-mono-regular h1'>devfinder</h1>
                    <div className='flex color-dark-grey'>
                        <h4 className='h4 space-mono-bold'>DARK</h4>
                        <FaMoon className='font-size-20'/>
                    </div>
                </div>

                {/**Search Area */}
                <div className='searchArea box-shadow'>
                    <LuSearch className='color-blue font-size-25 search-icon'/>
                    <input id='searchInput' className='space-mono-regular' placeholder='Search Github username...' type="text"/>
                    <span className='space-mono-bold'>No results</span>
                    <a className='button'>
                       <h4 className='space-mono-bold h3 primary-button'>Search</h4> 
                    </a>
                </div>

                {/**Information Area */}
                <div className='informationArea box-shadow'>
                    <img src="/images/github-user-search-app/octocat.png" className='profile-photo' width={117} height={117} alt="profile-photo"/>

                    <div className='info'>
                        <div className='header'>
                            <div>
                                <h1 className='h1 space-mono-bold color-gunmetal-blue'>The Octocat</h1>
                                <h4 className='h4 space-mono-regular color-blue'>@octocat</h4>
                            </div>
                            <div>
                                <p className='color-dark-grey space-mono-regular'>Joined 25 Jun 2011</p>
                            </div>
                        </div>

                        <div>
                            <p className='color-steel-blue'>This profile has no bio</p>
                        </div>

                        <div className='mainInformation'>
                            <div>
                                <h4 className='h4 color-steel-blue'>Repos</h4>
                                <h2 className='h2 space-mono-bold color-gunmetal-blue'>8</h2>
                            </div>
                            <div>
                                <h4 className='h4 color-steel-blue'>Fallowers</h4>
                                <h2 className='h2 space-mono-bold color-gunmetal-blue'>3938</h2>
                            </div>
                            <div>
                                <h4 className='h4 color-steel-blue'>Fallowing</h4>
                                <h2 className='h2 space-mono-bold color-gunmetal-blue'>9</h2>
                            </div>
                        </div>

                        <div className='extraInformation'>
                            <div className='infoGroup'>
                                <div className='infoItems color-steel-blue'>
                                    <FaLocationDot className='font-size-20'/>
                                    <p>San Francisco</p>
                                </div>
                                <div className='infoItems color-steel-blue'>
                                    <FaLink className='font-size-20'/>
                                    <a href="https://github.com" target='_blank'>https://github.com</a>
                                </div>
                                
                            </div>

                            <div className='infoGroup'>
                                <div className='infoItems color-steel-blue'>
                                    <BsTwitter className='font-size-20'/>
                                    <p>Not Available</p>
                                </div>
                                
                                <div className='infoItems color-steel-blue'>
                                    <HiMiniBuildingOffice2 className='font-size-20'/>
                                    <p>@github</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
