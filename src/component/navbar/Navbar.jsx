import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="background">
        <div className="search">
          <input type="text" placeholder="Tìm kiếm ..." />
          <SearchIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
            Tiếng Việt
          </div>
          <div className="item">
            <DarkModeIcon className="icon"/>
          </div>
          <div className="item">
          <NotificationsActiveIcon/>
          <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MenuIcon className="icon"/>
          </div>

          <div className="item">
            <img src="../../../public/images/avt.jpg" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
