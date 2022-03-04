import { Carousel, Divider, Space } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import "antd/dist/antd.min.css";
import "./ModalContent.css";

const ModalContent = (props) => {
  function twoDecimalPlaces(num) {
    return Math.round(num * 100) / 100;
  }

  return (
    <>
      {/*<Carousel arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>*/ }
      {
        // props.data.consolidated_weather.map(day => (
        <div className="carouselItemWrapper">
          <p>Today</p>
          <Divider/>
          <Space>
            <p className="temp">{ twoDecimalPlaces(props.data.the_temp) }</p>
            <Space>
              <img src="http://metaweather.com/static/img/weather/lr.svg" alt="stuff" style={{ width: "96px", height: "96px"}}/>
              <p>{ props.data.weather_state_name }</p>
            </Space>
          </Space>
          <Space split={ <Divider type="vertical"/> }>
            <p>{ twoDecimalPlaces(props.data.min_temp) }</p>
            <p>{ twoDecimalPlaces(props.data.max_temp) }</p>
          </Space>
          <div className="bottomRow">
            <p>{ twoDecimalPlaces(props.data.wind_speed) }</p>
          </div>
        </div>
        // ))
      }
      {/*</Carousel>*/ }
      {/*<button>></button>*/ }
    </>
  );
};

export default ModalContent;