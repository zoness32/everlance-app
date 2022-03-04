import "./App.css";
import Header from "./components/Header/Header";
import ResultsList from "./components/ResultsList/ResultsList";
import React, { useEffect, useState } from "react";
import Search from "antd/es/input/Search";
import { Skeleton } from "antd";

function App() {
  let baseUrl = "http://localhost:4000";
  let [searchVal, setSearchVal] = useState("");
  let [results, setResults] = useState([]);
  let [searching, setSearching] = useState(false);

  useEffect(() => {
    if (searchVal !== "") {
      doSearch().then(data => {
        console.log(data);
        setSearching(false);
      });
    }
  }, [searchVal]);

  function onSearch(val) {
    setSearchVal(val);
    setSearching(true);
  }

  async function doSearch() {
    let url = `${ baseUrl }/doCitySearch?loc=${ searchVal }`;
    console.log(url);

    try {
      let response = await fetch(url, {
        method: "GET"
      });
      if (response.status > 399) {
        console.error("Server responded with status", response.status);
      } else {
        const data = await response.json();
        setResults(data);
      }
    } catch (error) {
      console.log(error);
      console.log("errrorrrroororor");
    }
  }

  return (
    <div className="App">
      <header className="header">
        <p className="greeting">
          How is the weather?
        </p>
        <Search className="searchInput" placeholder="Search city by name" onSearch={ onSearch } enterButton={ "Go" }
                size="large"/>
      </header>
      { searching ? <Skeleton active/> :
        <ResultsList results={ results }/>
      }
    </div>
  );
}

export default App;
