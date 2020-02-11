import React, { useState } from "react";
import axios from "axios";
import { Pagination, Input } from "semantic-ui-react";
import spinner from "./spinner.gif";
import "./App.css";

function App() {
  const [term, setTerm] = useState("car");
  const [pictures, setPictures] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [TotalPages, setTotalPages] = useState(5);
  /*   const [pagination, setPagination] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
   */
  /* const showPagination = e => {
    console.log(e.target.id);
    if (e.target.id === "next") setPagination(pagination.map((v, i) => v + 10));
    else setPagination(pagination.map((v, i) => v - 10));
  }; */

  const changeHandler = e => {
    setTerm(e.target.value);
  };

  //// sending request on search buton click

  const sendRequest = e => {
    e.preventDefault();
    setIsLoading(true);
    setPageNum(1);
    console.log(term);
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
        console.log(response.data.total_pages);
        setTotalPages(response.data.total_pages);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  /// sending request on next/previous button click

  const changePage = (e, paginate) => {
    setIsLoading(true);
    setPageNum(paginate);
    console.log(paginate);
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
          page: paginate,
          per_page: 24
        },
        headers: {
          Authorization:
            "Client-ID 082136f9e5e99ecb9cd2578e0d9a0b7b548e18001db11fd752f7c9e5abba096f"
        }
      })
      .then(response => {
        setPictures([...response.data.results]);
        console.log(response.data.total);
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
        <div className="cover d-flex justify-content-center align-items-center flex-column slide-in-bck-center ">
          <p className="title h4 tracking-in-contract ">SA7 HD-IMAGE SEARCH</p>

          <form onSubmit={sendRequest} className="text-center d-flex mt-5 ">
            <Input
              icon="search"
              onChange={changeHandler}
              placeholder="Search..."
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary ml-1 input"
            />
          </form>
        </div>
      ) : isLoading ? (
        <div>
          <div className=" d-flex justify-content-center align-items-center min-height">
            <img src={spinner} alt="spinner" />
          </div>

          <div className="text-center">
            <div className="lds-hourglass"></div>
          </div>
        </div>
      ) : (
        <div>
          <p className="title h5 text-dark text-center bg-warning">
            Showing result for "{term}"
          </p>
          <form
            onSubmit={sendRequest}
            className="text-center d-flex justify-content-center"
          >
            <Input
              icon="search"
              onChange={changeHandler}
              placeholder="Search..."
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary ml-1 input"
            />
          </form>
          <div className="d-flex flex-wrap justify-content-center mt-2 mb-2 list align-items-center">
            {pictures.length
              ? pictures.map(pic => (
                  <div className="images" key={pic.id}>
                    <div className="hovereffect">
                      <img
                        className="img-responsive"
                        src={pic.urls.thumb}
                        alt={pic.id}
                      />
                      <div className="overlay">
                        <h2>{pic.alt_description}</h2>
                        <a className="info" href={pic.urls.full} target="blank">
                          link here
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div className="d-flex justify-content-around">
            <Pagination
              defaultActivePage={pageNum}
              onPageChange={(e, pageInfo) => {
                setPageNum(pageInfo.activePage);
                changePage(e, Number(pageInfo.activePage));
                console.log("pagination clicked");
              }}
              totalPages={TotalPages}
            />
            {/*    <button
              className="btn btn-danger shadow"
              id="previous"
              onClick={e => {
                if (pageNum > 1) {
                  setPageNum(pageNum - 1);
                }
                console.log(pageNum);
                changePage();
                showPagination(e);
              }}
            >
              &laquo; previous
            </button>
            <div className="d-flex flex-wrap justify-content-center mb-1">
              <div className="pagination d-flex flex-wrap justify-content-center">
                {pagination.map(v => (
                  <button
                    id={v}
                    key={v}
                    onClick={e => {
                      changePage(e, Number(e.target.id));
                    }}
                    className={`rounded-circle mr-2 page ${
                      pageNum === v ? "Active" : ""
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <button
              className="btn btn-danger shadow"
              id="next"
              onClick={e => {
                setPageNum(pageNum + 1);
                console.log(pageNum);
                changePage();
                showPagination(e);
              }}
            >
              next&raquo;
            </button> */}
          </div>
        </div>
      )}
      <footer>
        {" "}
        &copy; 2019 Designed and Programmed <br></br> by Saood using React
      </footer>
    </div>
  );
}

export default App;
