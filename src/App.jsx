import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Article from './Article';

function App() {
  const [fetchedArticles, setFetchedArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const apiUrl =
    'https://storage.googleapis.com/aller-structure-task/test_data.json';
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(apiUrl);
        setFetchedArticles(result.data[0]);
        // I'm deciding to preserve the fetched articles into their own variable, in case we want some "reset" feature,
        // so reverting back to the fetched data is easy. If this would not be needed then it's better to remove it to avoid duplicates
        setArticles(result.data[0]);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className='body'>
      <h1 className=''>
        Dagbladet <span>editor mode</span>
      </h1>
      <main>
        {isError && (
          <div className='failed-fetching'>Something went wrong ...</div>
        )}
        {isLoading ? (
          <div className='loading'>Loading ...</div>
        ) : (
          <ul>
            {articles.map((row, iRow) => (
              <li key={`${row.type}-${iRow}`}>
                {row?.columns?.map((article, iCol) => (
                  <Article
                    article={article}
                    articles={articles}
                    setArticles={setArticles}
                    iRow={iRow}
                    iCol={iCol}
                    key={`article-${iCol}-${article?.url}`}
                  />
                ))}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
