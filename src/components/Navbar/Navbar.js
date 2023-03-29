import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import './icon/Avatar.png'

const Navbar = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(!show);
  return (
    <div className="wrapper">
      
      <div>Доска заказов</div>
      <div>Тарифы</div>
      <div>Контакты</div>
      <button className="btnStyle">Разместить заказ</button>
      
      <button className="headerBtn" type="button" onClick={handleShow}>
      <img src = {require('./icon/Avatar.png')} alt=''/>
      <div className="bodyStyle">
        <span>Метрострой Инвест</span>
        <span className="subTitle">Стародубцев И.В.</span>
        <Sidebar show={show}/>
      </div>
     
      </button>

    </div>
  );
};

export default Navbar;
