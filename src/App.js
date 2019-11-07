import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [term, setTerm] = useState("car");
  const [pictures, setPictures] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = e => {
    setTerm(e.target.value);
    console.log(term);
  };

  //// sending request on search buton click

  const sendRequest = e => {
    e.preventDefault();
    setIsLoading(true);
    setPageNum(1);

    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
          per_page: 24
        },
        headers: {
          Authorization:
            "Client-ID 082136f9e5e99ecb9cd2578e0d9a0b7b548e18001db11fd752f7c9e5abba096f"
        }
      })
      .then(response => {
        setPictures([...response.data.results]);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  /// sending request on next/previous button click

  const changePage = e => {
    setIsLoading(true);

    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
          page: pageNum,
          per_page: 24
        },
        headers: {
          Authorization:
            "Client-ID 082136f9e5e99ecb9cd2578e0d9a0b7b548e18001db11fd752f7c9e5abba096f"
        }
      })
      .then(response => {
        setPictures([...response.data.results]);
        console.log(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  //// render section

  return (
    <div className="fluid-container">
      {pictures.length < 1 ? (
        <div>
          <div className="cover d-flex justify-content-center align-items-center">
            <p className="title h4"> SA7 IMAGE SEARCH</p>
          </div>
          <div className="d-flex justify-content-center align-items-center search">
            <form onSubmit={sendRequest} className="text-center d-flex mt-2 ">
              <input
                type="text"
                onChange={changeHandler}
                className="form-control input"
                placeholder=" Enter the name of the picture..."
              />
              <input
                type="submit"
                value="Search"
                className="btn btn-primary ml-1 input"
              />
            </form>
          </div>
        </div>
      ) : isLoading ? (
        <div>
          <div className="cover d-flex justify-content-center align-items-center">
            <p className="title h4">Searching...</p>
          </div>
          <form
            onSubmit={sendRequest}
            className="text-center d-flex mt-2 shadow"
          >
            <input
              type="text"
              onChange={changeHandler}
              className="form-control"
              placeholder=" Enter the name of the picture..."
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary ml-1"
            />
          </form>
          <div className="text-center">
            <div className="lds-hourglass"></div>
          </div>
        </div>
      ) : (
        <div>
          <div className="cover d-flex justify-content-center align-items-center">
            <p className="title h5">You searced for "{term}"</p>
          </div>
          <form
            onSubmit={sendRequest}
            className="text-center d-flex mt-2 shadow"
          >
            <input
              type="text"
              onChange={changeHandler}
              className="form-control"
              placeholder=" Enter the name of the picture..."
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary ml-1"
            />
          </form>
          <div className="d-flex flex-wrap justify-content-center mt-2 list align-items-center">
            {pictures.length
              ? pictures.map(pic => (
                  <div className="card m-2 p-1 shadow" key={pic.id}>
                    <a href={pic.urls.full} target="blank">
                      {" "}
                      <img
                        src={pic.urls.thumb}
                        className="card-img-top images"
                        alt={pic.id}
                      />
                    </a>
                  </div>
                ))
              : null}
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-danger shadow"
              onClick={() => {
                if (pageNum > 1) {
                  setPageNum(pageNum - 1);
                }

                console.log(pageNum);
                changePage();
              }}
            >
              previous
            </button>
            <p className="bg-secondary rounded-pill p-2 text-white  page">
              {pageNum}
            </p>
            <button
              className="btn btn-danger shadow"
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
      )}
      <footer> &copy; 2019 Designed and Programmed by Saood using React</footer>
    </div>
  );
}

export default App;
