import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar"; 
import "react-circular-progressbar/dist/styles.css"

const  Featured = () => {
  return (
      <div className='featured'>
          <div className="top">
              <h1 className="title"> Tổng doanh thu</h1>
              <MoreVertIcon fontSize="small"/>
              <div className="bottom">
                  <div className="featuredChart">
                      <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                  </div>
                  <p className="title">Tổng doanh thu ngày hôm nay</p>
                  <p className="amount">100$</p>
                   <p className="desc"></p>
              </div>
           </div>
      </div>
      
  
  )
}

export default Featured