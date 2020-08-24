import React from 'react';

import './Articles.css';
import Article from './Article';
import { useParams } from 'react-router-dom';

const Articles = () => {
  const { categoryName } = useParams();

  return (
    <div className="articles">
      <h2>{categoryName ? categoryName : 'Top Headlines'}</h2>
      <Article />
    </div>
  );
};

export default Articles;
