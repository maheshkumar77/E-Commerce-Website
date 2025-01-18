import React, { useState } from 'react';
import './newcolaction.css';
import newdata from '../assets/Newdata';
import Item from '../item/Item';

function Newcolaction() {
  const [visibleItems, setVisibleItems] = useState(16); // Initially show 16 items

  // Function to handle the "Load More" button click
  const loadMoreItems = (e) => {
    e.preventDefault(); // Prevent the default behavior (page scroll)
    setVisibleItems(prevVisibleItems => prevVisibleItems + 8); // Increase the number of visible items by 16
  };

  // Function to handle the "Show Less" button click
  const showLessItems = (e) => {
    e.preventDefault(); // Prevent the default behavior
    setVisibleItems(prevVisibleItems => prevVisibleItems - 8); // Decrease the number of visible items by 16
  };

  return (
    <div className='newcolaction'>
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className='colection'>
        {newdata.slice(0, visibleItems).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            sub={item.sub}
            img={item.img}
            price1={item.price1}
            price2={item.price2}
            discount={item.discount}
          />
        ))}
      </div>

      {/* Render the "Load More" button only if there are more items to load */}
      {visibleItems < newdata.length && (
        <button className='load-more-btn' onClick={loadMoreItems}>
          Load More
        </button>
      )}

      {/* Render the "Show Less" button only if more than 16 items are visible */}
      {visibleItems > 16 && !newdata.slice(0, visibleItems).length === newdata.length && (
        <button className='show-less-btn' onClick={showLessItems}>
          Show Less
        </button>
      )}
    </div>
  );
}

export default Newcolaction;
