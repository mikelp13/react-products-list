import React from 'react'
// import { useSelector } from 'react-redux'
// import { loading } from '../redux/loading/loadingSelectors'
import Header from './header/Header'
// import Loader from './loader/Loader'
import Main from './main/Main'

const App = () => {
  // const isloading = useSelector(loading);

  return (
    <>
    <Header/>
    <Main/>
    {/* {isloading && <Loader/>} */}
    </>
  )
}

export default App