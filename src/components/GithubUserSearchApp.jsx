/* eslint-disable no-unused-vars */
import '../assets/styles/GithubUserSearchApp.css';
import {useState, useEffect} from 'react';
import {getUser} from '../api/github-user-api';

export default function GithubUserSearchApp() {

    const [isSun, setIsSun] = useState(() => {
        const saved_theme = sessionStorage.getItem('theme');
        return saved_theme !== null
            ? saved_theme === 'true'
            : window
                .matchMedia("(prefers-color-scheme: dark)")
                .matches; // false veya istediğiniz varsayılan değer
    });

    const [data, setData] = useState(() => {
        const savedValue = localStorage.getItem('userData');
        return savedValue
            ? JSON.parse(savedValue)
            : 'Default Value';
    });

    const [userName, setUserName] = useState('octocat');
    const [loading, setLoading] = useState(true); // Yükleme durumunu tutar
    const [error, setError] = useState(null); // Hata durumunu tutar
    const [resultText, setResultText] = useState('');

    useEffect(() => {
        async function fetchData(userName) {
            try {
                setLoading(true);
                const response = await getUser(userName);
                if (response.status === 200) {
                    response.data.created_at = dateFormater(response.data.created_at)
                    localStorage.setItem('userData', JSON.stringify(response.data));
                    setData(response.data);
                    setResultText('');
                } else if (response.status === 404) {
                    setResultText('No results');
                }

            } catch (error) {
                setError(error);
                console.log("Error", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData(userName);
    }, [userName])

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])

    if (loading) {
        return <div
            className={`body ${isSun
                ? 'light-theme'
                : 'dark-theme'}`}>
            <h1 className='color-gunmetal-blue h1 space-mono-bold'>Loading...</h1>
        </div>
    }

    if (error) {
        return <p>{error}</p>
    }

    function theme() {
        setIsSun(!isSun);
        if (!(isSun == null)) {
            sessionStorage.setItem('theme', !isSun);
        }

    }

    function dateFormater(date) {
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];

        const dateString = date;
        const dateObj = new Date(dateString);

        const year = dateObj.getUTCFullYear();
        const month = monthNames[dateObj.getUTCMonth()]; // Ay ismini alıyoruz.
        const day = dateObj.getUTCDate();

        const formattedDate = `${day
            .toString()
            .padStart(2, '0')} ${month} ${year}`;

        return formattedDate;
    }

    function searchButton() {
        const username = document
            .getElementById('searchInput')
            .value;
        setUserName(username);
    }

    return (
        <div
            id='body'
            className={`body main-theme ${isSun
                ? 'light-theme'
                : 'dark-theme'} space-mono-regular`}>
            <div className='container'>
                {/**Dev Finder and Theme Toogle */}
                <div className='navbar'>
                    <h1 className='space-mono-regular h1 color-gunmetal-blue'>devfinder</h1>
                    <div onClick={theme} className='flex color-dark-grey theme-button'>
                        <h4 id='themeToggle' className='h4 space-mono-bold'>{
                                !isSun
                                    ? 'LIGHT'
                                    : 'DARK'
                            }</h4>
                        {
                            !isSun
                                ? <img src='/images/github-user-search-app/icon-sun.svg'/>
                                : <img src='/images/github-user-search-app/icon-moon.svg'/>
                        }
                    </div>
                </div>

                {/**Search Area */}
                <div className='searchArea box-shadow'>
                    <img
                        src='/images/github-user-search-app/icon-search.svg'
                        className='color-blue search-icon'/>
                    <input
                        id='searchInput'
                        className='space-mono-regular color-gunmetal-blue'
                        placeholder='github username...'
                        autoComplete='off'
                        type="text"/>
                    <div className='flex'>
                        <p className='space-mono-bold color-red resultText'>{resultText}</p>
                    </div>
                    <a onClick={searchButton} className='button'>
                        <h4 className='space-mono-bold primary-button'>Search</h4>
                    </a>
                </div>

                {/**Information Area */}
                <div className='informationArea box-shadow'>
                    <img
                        src={data.avatar_url}
                        className='profile-photo'
                        width={117}
                        height={117}
                        alt="profile-photo"/>

                    <div className='info'>
                        <div className='flex'>
                            <img
                                src={data.avatar_url}
                                className='profile-photo2'
                                width={80}
                                height={80}
                                alt="profile-photo"/>
                            <div className='header'>
                                <div>
                                    <h1 className='h1 space-mono-bold color-gunmetal-blue'>{data.name}</h1>
                                    <h4 className='h4 space-mono-regular color-blue'>{`@${data.login}`}</h4>
                                </div>
                                <div>
                                    <p className='color-dark-grey space-mono-regular'>{`Joined at ${data.created_at}`}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className='color-steel-blue'>{
                                    data.bio
                                        ? data.bio
                                        : 'This Profile has no bio'
                                }</p>
                        </div>

                        <div className='mainInformation'>
                            <div>
                                <h4 className='h4 color-steel-blue'>Repos</h4>
                                <h2 className='h2 space-mono-bold color-gunmetal-blue'>{data.public_repos}</h2>
                            </div>
                            <div>
                                <h4 className='h4 color-steel-blue'>Fallowers</h4>
                                <h2 className='h2 space-mono-bold color-gunmetal-blue'>{data.followers}</h2>
                            </div>
                            <div>
                                <h4 className='h4 color-steel-blue'>Fallowing</h4>
                                <h2 className='h2 space-mono-bold color-gunmetal-blue'>{data.following}</h2>
                            </div>
                        </div>

                        <div className='extraInformation'>
                            <div className='infoGroup'>
                                <div className='infoItems color-steel-blue'>
                                    <img className='filter' src="/images/github-user-search-app/icon-location.svg"/>
                                    <p>{
                                            data.location
                                                ? data.location
                                                : 'Not Available'
                                        }</p>
                                </div>
                                <div className='infoItems color-steel-blue'>
                                    <img className='filter' src="/images/github-user-search-app/icon-website.svg"/>
                                    <a href={data.blog} className='link' target='_blank'>{data.blog ? data.blog : 'Not available'}</a>
                                </div>

                            </div>

                            <div className='infoGroup'>
                                <div className='infoItems color-steel-blue'>
                                    <img className='filter' src="/images/github-user-search-app/icon-twitter.svg"/>
                                    <p>{
                                            data.twitter_username
                                                ? data.twitter_username
                                                : 'Not Available'
                                        }</p>
                                </div>

                                <div className='infoItems color-steel-blue'>
                                    <img className='filter' src="/images/github-user-search-app/icon-company.svg"/>
                                    <p>{
                                            data.company
                                                ? `${data.company}`
                                                : 'Not Available'
                                        }</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
