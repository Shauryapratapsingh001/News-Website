
import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { Card } from "./Card";

export const Home = () => {
  const apikeydata = "efa287719b39455492b9ee8f2547285b";
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);

  // Function to fetch news
  const fetchData = async (searchQuery) => {
    try {
      const url = searchQuery
        ? `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apikeydata}`
        : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikeydata}`;
      const response = await axios.get(url);

      if (response?.data?.articles) {
        setNews(response.data.articles);
      }
    } catch (error) {
      console.error("Error fetching news:", error.message);
    }
  };

  // Fetch latest news on initial load
  useEffect(() => {
    fetchData(); // Fetch top headlines without a query
  }, []);

  // Handle search
  const handleSearch = () => {
    fetchData(query); // Fetch news based on search query
  };

  return (
    <>
      <div className="main-container">
        <div className="Heading">
          <h2>
            समाचार with <span>Shaurya</span>
          </h2>
          <p>Search and browse the latest news</p>
        </div>
        <div className="search">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search here"
          />
          <button onClick={handleSearch} className="btn">
            Search
          </button>
        </div>
        <div className="card-container">
          {news.length > 0 ? (
            news.map((article, index) => (
              <Card
                key={index}
                img={article.urlToImage || "//Unknown.jpg"}
                title={article.title || "No Title Available"}
                description={article.description || "No Description Available"}
                href={article.url || "#"}
              />
            ))
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      </div>
    </>
  );
};

// import React, { useState } from "react";
// import "./Home.css";
// import axios from "axios";
// import { Card } from "./Card";

// export const Home = () => {
//   const apikeydata = "efa287719b39455492b9ee8f2547285b";
//   const [query, setquery] = useState("");
//   // console.log(query);
//   const [newss, setnewss] = useState([]);
//   console.log(newss);

//   const fetchData = async () => {
//     if (!query.trim()) {
//       console.log("Search query is empty");
//       return;
//     }
//     try {
//       const response = await axios.get(
//         `https://newsapi.org/v2/everything?q=${query}&apikey=${apikeydata}`
//       );
//       //console.log(response.data);

//       if (response?.data) {
//         setnewss(response?.data?.articles);
//       }
//     } catch (error) {
//       console.log(error.message || "Something went wrong");
//     }
//   };

//   const changeHnadle = () => {
//     fetchData();
//   };

//   return (
//     <>
//       <div className="main-container">
//         <div className="Heading">
//           <h2>
//             समाचार with <span>Shaurya</span>
//           </h2>
//           <p>Search and browse latest news</p>
//         </div>
//         <div className="search">
//           <input
//             onChange={(e) => setquery(e.target.value)}
//             type="text"
//             placeholder="Search here"
//           />
//           <button onClick={changeHnadle} className="btn">
//             Search
//           </button>
//         </div>
//         <div className="card-container">
//           {newss.map((data, index) => (
//             <Card
//               key={index}
//               img={data.urlToImage}
//               title={data.title.substring(0, 50)}
//               description={data.description.substring(0, 130)}
//               href={data.url}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };