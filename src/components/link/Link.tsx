import React from 'react';
import { Link as Redirect } from 'react-router-dom';
import './Link.scss';

const Link = (props: any) => {
  const { to, title } = props;
  return (
    <div className="link">
      <Redirect className="link stretched-link" to={to}>
        {title}
      </Redirect>
    </div>
  );
};

export default Link;
