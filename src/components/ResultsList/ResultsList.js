import React, { useEffect, useState } from "react";
import { Button, Card, List, Modal } from "antd";
import ModalContent from "../ModalContent/ModalContent";
import "antd/dist/antd.min.css";
import "./ResultsList.css";

function ResultsList(props) {
  const [showNoResults, setShowNoResults] = useState(true);

  async function getDetails(woeid) {
    let response = await fetch(`http://localhost:4000/lookupCity?woeid=${ woeid }`);
    return response.json();
  }

  useEffect(() => {
    if (props.results.length === 0) {
      setShowNoResults(true);
    } else {
      setShowNoResults(false);
    }
  }, [props.results]);

  function onDetailsClick(item) {
    getDetails(item.woeid).then(data => {
      console.log(data);
      Modal.info({
        title: (item.title),
        width: 800,
        content: (
          <ModalContent data={ data.consolidated_weather[0] }/>
        )
      });
    });
  }

  return (
    <div className="resultsWrapper">
      { showNoResults ?

        <Card>
          <span>No results yet!</span>
          <span>Please use the search box above</span>
        </Card>

        :

        <List
          itemLayout="horizontal"
          dataSource={ props.results }
          renderItem={ item => (
            <List.Item
              key={item.woeid}
              actions={ [
                <Button type="link" onClick={ () => {
                  onDetailsClick(item);
                } }>Details</Button>
              ] }>
              <List.Item.Meta
                title={ item.title }
              />
            </List.Item>) }
        />
      }
    </div>);
}

export default ResultsList;