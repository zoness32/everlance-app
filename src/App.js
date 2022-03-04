import "./App.css";
import ResultsList from "./components/ResultsList/ResultsList";
import React, { useEffect, useState } from "react";
import Search from "antd/es/input/Search";
import { Card } from "antd";

function App() {
  let baseUrl = "http://localhost:4000";
  let [searchVal, setSearchVal] = useState("");
  let [results, setResults] = useState([]);
  let [searching, setSearching] = useState(false);

  useEffect(() => {
    if (searchVal !== "") {
      doSearch().then(data => {
        setSearching(false);
      });
    }
    //eslint-disable-next-line
  }, [searchVal]);

  function onSearch(val) {
    setSearchVal(val);
    if (val !== searchVal) {
      setSearching(true);
    }
  }

  async function doSearch() {
    let url = `${ baseUrl }/doCitySearch?loc=${ searchVal }`;

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
    }
  }

  const cardBodyStyle = {
    "padding": "0",
    "height": "100%",
    "width": "100%",
    "maxHeight": "100%",
    "position": "absolute"
  };

  const cardStyle = {
    "height": "100%",
    "textAlign": "center",
    "boxShadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  };

  return (
    <div className="App">
      <div className="header">
        <div className="headerContent">
          <p className="greeting">
            How is the weather?
          </p>
          <Search className="searchInput" placeholder="Search city by name" onSearch={ onSearch } enterButton={ "Go" }
                  size="large"/>
        </div>
      </div>
      <div className="body">
        <Card style={ cardStyle } bodyStyle={ cardBodyStyle } className="listCard" loading={ searching }>
          {
            (
              results.length === 0 ?
                <div className="noResults">
                  <span>No results yet!</span>
                  <span>Please use the search box above</span>
                </div>
                :
                <ResultsList results={ results } isLoading={ searching }/>
            )
          }
        </Card>
      </div>
    </div>
  );
}

export default App;
