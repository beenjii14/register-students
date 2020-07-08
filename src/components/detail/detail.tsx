import React from 'react';
import './Detail.scss';

const Detail = (props: any) => {
  const { student } = props;
  return (
    <div className="detail-container">
      <div className="profile">
        <div className="photo">Photo</div>
      </div>
      <div className="details">
        {student && (
          <div>
            {student.map((item: any, index: number) => {
              return (
                <div key={index} className="row divider">
                  <div className="item">{item.labelText}</div>
                  <div className="item">{item.value}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
