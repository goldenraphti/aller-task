import { useState } from 'react';
import './Article.css';
import { AiTwotoneEdit } from 'react-icons/ai';

function Article({ article, articles, setArticles, iRow, iCol }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState(article.title);

  const handleChange = event => {
    setTitle(event.target.value);
  };
  const handleSubmit = event => {
    const newArticles = [...articles];
    newArticles[iRow].columns[iCol] = { ...article, title: title };
    setArticles(newArticles);
    setIsEditMode(false);
  };

  return (
    <article
      key={`article-inside-${article?.url}`}
      className='article'
      style={{ flex: `${article?.width}` }}
    >
      <div className='article-content'>
        <div className='article-title'>
          {isEditMode ? (
            <form onSubmit={handleSubmit}>
              <label>
                Article's title:
                <input type='text' value={title} onChange={handleChange} />
              </label>
              <button type='submit'>Save</button>
            </form>
          ) : (
            <h2>
              {title}
              <button
                onClick={() => setIsEditMode(true)}
                className='edit-button'
              >
                <AiTwotoneEdit />
                <span className='visually-hidden'>Edit</span>
              </button>
            </h2>
          )}
        </div>
        <a href={article?.url}>{article?.url}</a>
      </div>
      <img
        src={article?.imageUrl}
        srcSet={`
          ${article?.imageUrl}&width=300 300w,
          ${article?.imageUrl}&width=500 500w,
          ${article?.imageUrl}&width=700 700w,
          ${article?.imageUrl}&width=1000 1000w,
          ${article?.imageUrl}&width=1300 1300w,
          ${article?.imageUrl}&width=1700 1700w
          `}
        sizes={`
          100%,
          `}
        alt={article?.title}
        loading={iRow === 0 ? 'eager' : 'lazy'}
        height='172'
        width='200'
      />
    </article>
  );
}
export default Article;

// in handleSubmit: articles objects have only 1 level, which is why I did not deep clone them, but ony shallow copy them. Nevertheless, to play it more defensively I could have used to new structuredClone. But this one has somehow limited support, depending of the browserlist you use. And based on the limited time of this exercise I decided to stick to it.
