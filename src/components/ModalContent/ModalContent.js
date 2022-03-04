import { Divider, Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import "./ModalContent.css";

const ModalContent = (props) => {
  const [data, setData] = useState(null);

  async function getDetails(woeid) {
    let response = await fetch(`http://localhost:4000/lookupCity?woeid=${ woeid }`);
    return response.json();
  }

  useEffect(() => {
    getDetails(props.woeid).then(data => {
      console.log(data);
      setData(data);
    });
    //eslint-disable-next-line
  }, []);

  function twoDecimalPlaces(num) {
    return Math.round(num * 100) / 100;
  }

  const antIcon = <LoadingOutlined spin />;

  return (
    <>
      {
        ( data ?

            <div className="carouselItemWrapper">
              <span className="dateText">Today</span>
              <Divider className="horizontalDivider"/>
              <div className="spacer">
                <Space size={ 175 }>
                  <span className="currentTemp">{ twoDecimalPlaces(data.consolidated_weather[0].the_temp) } C</span>
                  <Space direction="vertical" className="weatherStateSection">
                    <img src={ `/weather/${ data.consolidated_weather[0].weather_state_abbr }.png` }
                         alt="stuff" style={ { width: "96px", height: "96px" } }/>
                    <p>{ data.consolidated_weather[0].weather_state_name }</p>
                  </Space>
                </Space>
                <Space size={ 25 }>
                  <p>Min: { twoDecimalPlaces(data.consolidated_weather[0].min_temp) } C</p>
                  <p>|</p>
                  <p>Max: { twoDecimalPlaces(data.consolidated_weather[0].max_temp) } C</p>
                </Space>
              </div>
              <div className="bottomRow">
                <p>{ twoDecimalPlaces(data.consolidated_weather[0].wind_speed) } mph</p>
              </div>
            </div>
            :
            <div className="loadingScreen"><Spin className="spinner" style={{"fontSize": "90px", "width": "90px"}} indicator={antIcon} /></div>
        )
      }
    </>
  );
};

export default ModalContent;