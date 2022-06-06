import { useState } from 'react';
import './App.css';

function Article({ article, articles, setArticles, iRow, iCol }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState(article.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    const newArticles = [...articles];
    newArticles[iRow].columns[iCol] = { ...article, title: title };
    setArticles(newArticles);
    setIsEditMode(false);
  };

  return (
    <div key={`article-inside-${article?.url}`}>
      {isEditMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            Article's title:
            <input type="text" value={title} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <h2>{title}</h2>
      )}
      <p>{article?.url}</p>
      <img src={article?.imageUrl} alt={article?.title} />
      <button onClick={() => setIsEditMode(true)}>Edit</button>
    </div>
  );
}
export default Article;

// in handleSubmit: articles objects have only 1 level, which is why I did not deep clone them, but ony shallow copy them. Nevertheless, to play it more defensively I could have used to new structuredClone. But this one has somehow limited support, depending of the browserlist you use. And based on the limited time of this exercise I decided to stick to it.
