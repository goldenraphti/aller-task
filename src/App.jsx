import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import hardcodedArticlesImported from './hardcodedarticles.json';
import Article from './Article';

function App() {
  const [fetchedArticles, setFetchedArticles] = useState([]);
  const [articles, setArticles] = useState(...hardcodedArticlesImported);
  const apiUrl =
    'https://storage.googleapis.com/aller-structure-task/test_data.json';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(apiUrl);
      setFetchedArticles(result.data);
    };

    setFetchedArticles([...articles]);
    fetchData();
    console.log('fetchedArticles & articles', fetchedArticles, articles);
  }, []);

  return (
    <div className="">
      <header className="">Dagbladet</header>
      <main>
        <ul>
          {articles.map((row, iRow) => (
            <li key={`${row.type}-${iRow}`}>
              {row?.columns.map((article, iCol) => (
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
      </main>
    </div>
  );
}

export default App;

// TODO: replace hardcoded fetched articles by really fetched
// TOOD: remove hardcoded articles
// TODO: add loading UI
// TOOD: add failed fetching UI
// TODO: add Prettier
// TODO: style CSS flex each row

// Notes:
// I could have used useContext instead of getting into some props drill, but I thought maybe useContext is a bit of an overkill for this so far?
// I was wondering if I should use useRef. Why? Because I was afraid if this was basically a CMS between editors, I'm afraid of some unsync content between different editors modifications
