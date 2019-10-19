import React from 'react';

const DEFAULT_ICON = "plane-departure";

export default ({ items }) => {
  console.log(items);
  // return null;
  return (
    <ul className="fa-ul">
      {items.map(content => {
        const className = `fa-li fa fa-${DEFAULT_ICON}`;
        return (

          // <li><i className={className}><p>{content}</p></i></li>  
          <li><p>{content}</p></li>  
        );
        } 
      )}
    </ul>
    )
}
