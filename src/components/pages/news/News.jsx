import React, { useState } from "react"
import axios from "axios"
import styles from './News.module.css'

export const News = () => {
    const URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=96c01d2725a641d9bfe5ca44a376b352";
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    const getData = async () => {
    let result;

        try {
            result = await axios.get(`${URL}`);
            setNews(result.data.articles);
        } catch (error) {
            setError(error);
        }
    }

    console.log("news = ", news)

    return (
    
        <div>
            <button type="button" onClick={getData}>
                News Here!
            </button>
            
                {news.map((article) => (
                <div className={styles.card}>
                    <div>
                        <img className={styles.avatar} src={article.urlToImage} alt="img" />
                        <div className={styles.cardContent}>
                            <h5>{article.title}</h5>
                            <h6>Author : {article.author}</h6>
                        </div>
                    </div>
                </div>
            ))}
            
            
        </div>
    );
}   

export default News