import '../assets/styles/GithubUserSearchApp.css';
import { useState } from 'react';

export default function GithubUserSearchApp() {

    const [isSun, setIsSun] = useState(false);

    function theme(){
        const body = document.getElementById('body')
        body.classList.toggle('dark-theme');
        setIsSun(!isSun);
    }

    return (
        <div id='body' className='body light-theme space-mono-regular'>
            <div className='container'>
                {/**Dev Finder and Theme Toogle */}
                <div className='navbar'>
                    <h1 className='space-mono-regular h1 color-gunmetal-blue'>devfinder</h1>
                    <div onClick={theme} className='flex color-dark-grey theme-button'>
                        <h4 id='themeToggle' className='h4 space-mono-bold'>{isSun ? 'LIGHT' : 'DARK'}</h4>
                        {isSun ? <img src='/images/github-user-search-app/icon-sun.svg'/> : <img src='/images/github-user-search-app/icon-moon.svg'/>}
                    </div>
                </div>

                {/**Search Area */}
                <div className='searchArea box-shadow'>
                    <img src='/images/github-user-search-app/icon-search.svg' className='color-blue search-icon'/>
                    <input id='searchInput' className='space-mono-regular color-gunmetal-blue' placeholder='Search Github username...' type="text"/>
                    <div className='flex'>
                        <p className='space-mono-bold color-red'>No results</p>
                    </div>
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
                                    <img src="/images/github-user-search-app/icon-location.svg"/>
                                    <p>San Francisco</p>
                                </div>
                                <div className='infoItems color-steel-blue'>
                                    <img src="/images/github-user-search-app/icon-website.svg"/>
                                    <a href="https://github.com" className='link' target='_blank'>https://github.com</a>
                                </div>
                                
                            </div>

                            <div className='infoGroup'>
                                <div className='infoItems color-steel-blue'>
                                    <img src="/images/github-user-search-app/icon-twitter.svg"/>
                                    <p>Not Available</p>
                                </div>
                                
                                <div className='infoItems color-steel-blue'>
                                    <img src="/images/github-user-search-app/icon-company.svg"/>
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
