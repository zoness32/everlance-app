import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  let baseUrl = "https://www.metaweather.com/api/";
  let [location, setLocation] = useState("");

  useEffect(() => {
    doSearch().then(data => {
      console.log(data);
    });
  }, [location]);

  function onSearch() {
    doSearch().then(data => {
      console.log(data);
    });
  }

  async function doSearch() {
    let url = `${baseUrl}location/search/?query=(${location})`

    try {
      let response = await fetch(url, {
        ""
        method: "GET"
      });
      return await response.json();
    } catch (error) {
      console.log(error);
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