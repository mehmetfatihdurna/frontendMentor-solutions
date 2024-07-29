import '../assets/styles/GithubUserSearchApp.css';

export default function GithubUserSearchApp() {

    return (
        <div className='body light-theme'>
            <div className='container'>
                {/**Dev Finder and Theme Toogle */}
                <div className='navbar'>
                    <h1 className='space-mono-regular h1'>devfinder</h1>
                    <a href="">
                        Dark
                        <img src="" alt="toggle "/>
                    </a>
                </div>

                {/**Search Area */}
                <div className='searchArea'>
                    <img src="" alt="search-icon"/>
                    <input id='searchInput' placeholder='Search Github username' type="text"/>
                    <a href="">Search</a>
                </div>

                {/**Information Area */}
                <div className='informationArea'>
                    <img src="" alt="profile-photo"/>

                    <div className='info'>
                        <div className='header'>
                            <div>
                                <p>The Octocat</p>
                                <p>@octocat</p>
                            </div>
                            <div>
                                <p>Joined 25 Jun 2011</p>
                            </div>
                        </div>

                        <div>
                            <p>This profile has no bio</p>
                        </div>

                        <div className='mainInformation'>
                            <div>
                                <p>Repos</p>
                                <p>8</p>
                            </div>
                            <div>
                                <p>Fallowers</p>
                                <p>3938</p>
                            </div>
                            <div>
                                <p>Fallowing</p>
                                <p>9</p>
                            </div>
                        </div>

                        <div className='extraInformation'>
                            <div className='infoGroup'>
                                <div className='infoItems'>
                                    <img src="" alt="location" width={20} height={20}/>
                                    <p>San Francisco</p>
                                </div>
                                <div className='infoItems'>
                                    <img src="" alt="location" width={20} height={20}/>
                                    <p>San Francisco</p>
                                </div>
                            </div>

                            <div className='infoGroup'>
                                <div className='infoItems'>
                                    <img src="" alt="location" width={20} height={20}/>
                                    <p>San Francisco</p>
                                </div>
                                <div className='infoItems'>
                                    <img src="" alt="location" width={20} height={20}/>
                                    <p>San Francisco</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
