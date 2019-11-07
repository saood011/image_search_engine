import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [term, setTerm] = useState("car");
  const [pictures, setPictures] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const changeHandler = e => {
    setTerm(e.target.value);
    console.log(term);
  };

  const sendRequest = e => {
    e.preventDefault();
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
          page: 1,
          per_page: 15
        },
        headers: {
          Authorization:
            "Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400"
        }
      })
      .then(response => {
        setPictures([...response.data.results]);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const changePage = e => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
          page: pageNum,
          per_page: 15
        },
        headers: {
          Authorization:
            "Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400"
        }
      })
      .then(response => {
        setPictures([...response.data.results]);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="container">
      <div className="cover"></div>
      <form onSubmit={sendRequest} className="text-center d-flex mt-2 shadow">
        <input
          type="text"
          onChange={changeHandler}
          className="form-control"
          placeholder=" Enter the name of the picture..."
        />
        <input type="submit" value="Search" className="btn btn-primary ml-1" />
      </form>

      <div className="d-flex flex-wrap justify-content-center mt-2 list align-items-center">
        {pictures.length ? (
          pictures.map(pic => (
            <div className="card m-2 p-2 shadow" key={pic.id}>
              <a href={pic.urls.full} target="blank">
                {" "}
                <img
                  src={pic.urls.thumb}
                  className="card-img-top"
                  alt={pic.id}
                />
              </a>
            </div>
          ))
        ) : (
          <h3 className="text-dark">Search result here...</h3>
        )}
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-danger"
          onClick={() => {
            setPageNum(pageNum - 1);
            console.log(pageNum);
            changePage();
          }}
        >
          previous
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setPageNum(pageNum + 1);
            console.log(pageNum);
            changePage();
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default App;
