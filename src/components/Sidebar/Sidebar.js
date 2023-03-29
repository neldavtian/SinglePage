import "./Sidebar.css";
import { useState, useEffect } from "react";
import './icon/Icon.png'

const Sidebar = ({show}) => {
  const [data, setData] = useState([]);
  
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("http://localhost:3030/data", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error))};
      useEffect(() => {
        getData();
      }, []);
  return (
    <>
    {show === true && (
    <div className="box">
      <div>
      {data.map((info) => (
        <div key={info.id} className={`${info.id === 1 ? 'titleStyle' : 'wrapBox'}`}>
            <span>{info.title}</span>
          <p>{info.body}</p>
        </div>
      ))}
      
      <p className="exit">Выход</p>
      <img src = {require('./icon/Icon.png')} alt='' className="exclamIcon"/>
      
      </div>
    </div>
  )}
  </>
  );
};

export default Sidebar;
