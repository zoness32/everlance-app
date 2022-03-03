import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import "./Header.css";
import 'antd/dist/antd.min.css';

function Header(props) {
  let baseUrl = "http://localhost:4000";
  let [searchVal, setSearchVal] = useState("");


  useEffect(() => {
    if (searchVal !== "") {
      doSearch().then(data => {
        console.log(data);
        props.onUpdate(data);
      });
    }
  }, [searchVal]);

  function onSearch(val) {
      setSearchVal(val);
  }

  async function doSearch() {
    let url = `${baseUrl}/doCitySearch?loc=${searchVal}`
    console.log(url);

    try {
      let response = await fetch(url, {
        method: "GET"
      });
      if (response.status > 399) {
        console.error("Server responded with status", response.status);
      } else {
        let val = await response.json();
        return val;
      }
    } catch (error) {
      console.log(error);
      console.log("errrorrrroororor");
    }
  }

  return (
    <header className="header">
      <p>
        How is the weather?
      </p>
      <Search placeholder="Search city by name" onSearch={ onSearch } enterButton={ "Go" } size="large"/>
    </header>
  );
}

export default Header;