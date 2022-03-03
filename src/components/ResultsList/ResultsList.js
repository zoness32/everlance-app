import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Modal } from "antd";
import 'antd/dist/antd.min.css';
import ModalContent from "../ModalContent/ModalContent";

function ResultsList(props) {
  async function getDetails(woeid) {
    let response = await fetch(`http://localhost:4000/lookupCity?woeid=${ woeid }`);
    let details = response.json();
    return details;
  }

  function onDetailsClick(item) {
    getDetails(item.woeid).then(data => {
      console.log(data);
      Modal.info({
        title:   (item.title),
        content: (
                   <ModalContent data={ data }/>
                 )
      })
    });
  }

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={ props.results }
        renderItem={ item => (<List.Item
          actions={ [
            <Button type="link" onClick={ () => {
              onDetailsClick(item)
            } }>Details</Button>
          ] }>
          <List.Item.Meta
            title={ item.title }
          />
        </List.Item>) }
      />
    </div>)
}

export default ResultsList;