import React from 'react';

import './Sidebar.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={`/`}>
        <Button variant="outlined">Top </Button>
      </Link>
      <Link to={`/category/business`}>
        <Button variant="outlined">Business</Button>
      </Link>
      <Link to={`/category/entertainment`}>
        <Button variant="outlined">Entertainment</Button>
      </Link>
      <Link to={`/category/health`}>
        <Button variant="outlined">Health</Button>
      </Link>
      <Link to={`/category/technology`}>
        <Button variant="outlined">Technology</Button>
      </Link>
      <Link to={`/category/science`}>
        <Button variant="outlined">Science</Button>
      </Link>
      <Link to={`/category/sports`}>
        <Button variant="outlined">Sports</Button>
      </Link>
    </div>
  );
};

export default Sidebar;
