import React, { useEffect, useState } from 'react';

import TextTruncate from 'react-text-truncate';

import './Article.css';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { categoryName } = useParams();
  const [posts, setPosts] = useState([]);
  // const { loading, setLoading } = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          categoryName
            ? `http://newsapi.org/v2/top-headlines?country=in&category=${categoryName}&apiKey=9c4a2e504c3741198d9f2350af250848`
            : `http://newsapi.org/v2/top-headlines?country=in&apiKey=9c4a2e504c3741198d9f2350af250848`
        );

        const { articles } = await response.json();
        setPosts(articles);
        // setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div className="article">
      {/* {loading && <img src={Animation} alt="Loading" />} */}

      {posts.map((post) => (
        <div className="article__body">
          <img src={post.urlToImage} alt="" />
          <div className="article__body__text">
            <TextTruncate
              line={2}
              element="h2"
              truncateText="…"
              text={post.title}
            />
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={`By ${post.source.name} on ${post.publishedAt.slice(
                0,
                10
              )}`}
            />
            <TextTruncate
              line={2}
              element="p"
              truncateText="…"
              text={post.description}
            />
            <a href={post.url}>View More</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
