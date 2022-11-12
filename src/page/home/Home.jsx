import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Widget from '../../component/widget/Widget'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homeContainer">
    <Navbar/>
    <div className="widget">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
    </div>
    </div>
    
    </div>
  )
}

export default Home