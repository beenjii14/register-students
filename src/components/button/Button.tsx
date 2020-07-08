import React from 'react';
import './Button.scss';

const Button = (props: any) => {
  const { type,children, onClick, color, size } = props;
  return (
    <button type={type} className={[
      'button',
      color === 'secondary' ? 'secondary' : '',
      color === 'success' ? 'success' : '',
      color === 'danger' ? 'danger' : '',
      size === 'btn-sm' ? 'btn-sm' : '',
    ].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
