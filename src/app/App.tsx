import React, { useEffect, useState } from 'react'
import './App.css'
import store from './store.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Registeration from './components/authorization/Authorization'
import Main from './components/main/Main'
import Account from './components/account/Account'
import Forgot from './components/forgot/Forgot'
import { MoviebaseAnimatedLogo } from './components/animated-logo/AnimatedLogo'
import Film from './components/film/Film'
import FilmListByGenre from './components/film-list-by-genre/FilmListByGenre'
import Popular from './components/popular/Popular'
import SearchPage from './components/search-page/SearchPage'

function App(): JSX.Element {
    const [isFirstTimeOpen, setIsFirstTimeOpen] = useState(true)

    useEffect(() => {
        const t = setTimeout(() => {
            setIsFirstTimeOpen(false)
        }, 2500)
        return () => clearTimeout(t)
    }, [isFirstTimeOpen])

    return (
        <Provider store={store}>
            <div
                className='App'
            >
                <BrowserRouter>
                    {isFirstTimeOpen ? (
                        <div className='moviebase-greeting-block'>
                            <MoviebaseAnimatedLogo />
                        </div>
                    ) : (
                        <></>
                    )}
                    <Header></Header>

                    <Routes>
                        <Route path='/' element={<Main isFirstTimeOpen={isFirstTimeOpen} />} />
                        <Route path='/search/:searchRequest' element={<SearchPage/>} />
                        <Route path='/popular/:page' element={<Popular />} />
                        <Route path='/film/:movieId' element={<Film />} />
                        <Route path='/genres/:genre/:page' element={<FilmListByGenre />} />
                        <Route path='/account' element={<Account />} />
                        <Route path='/account/authorization' element={<Registeration />} />
                        <Route path='/account/authorization/forgot' element={<Forgot />} />
                    </Routes>

                    <Footer></Footer>
                </BrowserRouter>
            </div>
        </Provider>
    )
}

export default App
