import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ModalContent = (props) => {
  function twoDecimalPlaces(num) {
    return Math.round(num * 100) / 100;
  }

  return (
    <>
      <Carousel arrows prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />}>
        {
          props.data.consolidated_weather.map(day => (
            <div>
              <p>{ twoDecimalPlaces(day.the_temp) }</p>
              <p>{ day.weather_state_name }</p>
              <p>{ twoDecimalPlaces(day.min_temp) }</p>
              <p>{ twoDecimalPlaces(day.max_temp) }</p>
              <p>{ twoDecimalPlaces(day.wind_speed) }</p>
            </div>
          ))
        }
      </Carousel>
    </>
  );
};

export default ModalContent;