import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "./Podcast.css";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Mp3 from "./Mp3";

export function PodcastGrid(props) {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch(props.rssfeed)
      .then((response) => response.text())
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        const itemList = data.querySelectorAll("item");
        const items = [];
        itemList.forEach((el) => {
          items.push({
            pubDate: new Date(el.querySelector("pubDate").textContent),
            title: el.querySelector("title").innerHTML,
            mp3: el.querySelector("enclosure").getAttribute("url"),
          });
        });
        setRowData(items);
      });
  }, [props.rssfeed]);

  var columnDefs = [
    {
      headerName: "Episode Title",
      field: "title",
      wrapText: true,
      autoHeight: true,
      flex: 2,
      resizable: true,
    },
    {
      headerName: "Published",
      field: "pubDate",
      sortable: true,
    },
    {
      headerName: "Episode",
      field: "mp3",
      flex: 2,
      autoHeight: true,
      cellRenderer: function (params){

		 return (<Mp3 url={params.value} />)
	  }
    },
  ];

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: props.height,
        width: props.width,
        fontFamily: "AlexandriaFLF",
        fontSize: "1.1em",
      }}
    >
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}
