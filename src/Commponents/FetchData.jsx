import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FetchData({ cat }) {

    const [Data, setData] = useState("");

    const fetchDAta = async () => {
        await axios.get(
            cat
        ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=c81b6b85aba048959618fa0e8194330a`
        : "https://newsapi.org/v2/top-headlines?country=in&apikey=c81b6b85aba048959618fa0e8194330a"
            
            ).then((res) => setData(res.data.articles))
    };
    useEffect(() => {
        fetchDAta();
    }, [cat])

    return (
        <>
            <div className="container my-4"><u><h3>TOP HEADLINES</h3></u> </div>
            <div className="container d-flex justify-content-center align-items-center flex-column my-3" style={{minHeight:"100vh"}}>{Data ? Data.map((items, index) =>
                <>
                <div className="container my-3 p-3" style={{width:"600px", boxShadow:"2px 2px 10px silver", borderRadius:"10px"}}>
                  <h5 className="my-2">{items.title}</h5>
                  <div className="container d-flex justify-content-center align-items-center">
                  <img src={items.urlToImage} style={{width:"100%", height:"250px", objectFit:"cover"}} alt="not found" />
                  </div>
                  <p className="my-1">{items.description}</p>
                  <Link to={items.url} target="_black">view more</Link>
                </div>
                </>) : "Error"}</div>
        </>
    )
};

export default FetchData;