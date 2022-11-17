import "./new.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src=''
              
              
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              
              <div className="fromInput">
                <label> Họ và Tên</label>
               <input type="text" />
              </div>
              <div className="fromInput">
                <label> Số điện thoại</label>
               <input type="text" />
              </div>
              <div className="fromInput">
                <label> Địa chỉ</label>
               <input type="text" />
              </div>
              <div className="fromInput">
                <label> Quốc gia</label>
               <input type="text" />
              </div>
              <div className="fromInput">
                <label> Tên tài khoản</label>
               <input type="text" />
              </div>
              <div className="fromInput">
                <label> Email</label>
               <input type="text" />
              </div>
              <div className="fromInput">
                <label> Mật khẩu</label>
               <input type="text" />
              </div>
            

              
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;