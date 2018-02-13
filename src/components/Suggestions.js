import React from 'react';
import { Link } from 'react-router-dom';

const Suggestions = props => {
  const options = props.results.map(item => (
    <li className="suggestion" key={item.id}>
      <Link className="secondary-link" to={`/${item.media_type}/${item.id}`}>{item.name}</Link>
    </li>
  ));
  return <ul className="suggestions-list">{options}</ul>;
};

export default Suggestions;
