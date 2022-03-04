import React from "react";
import { Button, Card, List, Modal } from "antd";
import ModalContent from "../ModalContent/ModalContent";
import "antd/dist/antd.min.css";
import "./ResultsList.css";

function ResultsList(props) {
  function onDetailsClick(item) {
    Modal.info({
      title: (<span style={ { "fontSize": "1.9em" } }>{ item.title }</span>),
      width: 800,
      centered: true,
      closable: true,
      icon: undefined,
      maskClosable: true,
      content: (
        <ModalContent woeid={ item.woeid }/>
      )
    });
  }

  return (
    <div className="resultsWrapper">
      {
        <List
          itemLayout="horizontal"
          dataSource={ props.results }
          renderItem={ item => (
            <Card>
              <List.Item
                key={ item.woeid }
                actions={ [
                  <Button style={ { "fontSize": "1.2em", "fontWeight": "500", "backgroundColor": "#525252" } }
                          type="primary" onClick={ () => {
                    onDetailsClick(item);
                  } }>See Details...</Button>
                ] }>
                <List.Item.Meta
                  title={ item.title }
                />
              </List.Item>
            </Card>
          ) }
        />
      }
    </div>);
}

export default ResultsList;