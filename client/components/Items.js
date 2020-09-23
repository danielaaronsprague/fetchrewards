import React, { useState, useEffect } from "react";
import { Hourglass, Fieldset } from "react95";

export default function Items() {
  // Initialize some state for the data to be held in
  const [fetchRewardsData, setFetchRewardsData] = useState([]);

  // I am using a free CORS proxy server here to get around CORS
  // I could also make my own proxy server inside of my express app but I
  // figured this would be ok for this simple web app
  const getFetchRewardsData = async () => {
    const res = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://fetch-hiring.s3.amazonaws.com/hiring.json"
    );
    const data = await res.json();
    //Here I filter out any items where the name property is null or an empty string
    const filteredData = await data.filter((item) => {
      return item.name !== null && item.name !== "";
    });
    // Here I use the Array sort method to sort based on two conditions. First listId
    // and then id which coresponds to the name property. I could also have sorted by name
    // but figured this was a cleaner and easier to understand way of sorting and still
    // achieving the desired results
    await filteredData.sort((item1, item2) => {
      if (item1.listId > item2.listId) return 1;
      if (item1.listId < item2.listId) return -1;

      return item1.id - item2.id;
    });
    // set state to be the new filtered/sorted data
    setFetchRewardsData(filteredData);
  };
  // mimic a component did mount which on mount fetches the data and sets it
  useEffect(() => {
    getFetchRewardsData();
  }, []);

  return (
    // here I map over the data and manipulate the dom to render all of the items
    // I also render a spinning hourglass while I wait for the data to load.
    <div id='items'>
      <h1>Here be some sweet sweet orgnaized items!</h1>
      <Fieldset id='fieldset'>
        {fetchRewardsData !== [] ? (
          fetchRewardsData.map((item) => (
            <li className='inner-container' key={item.id}>
              <div>Group: {item.listId}</div>
              <div>Id: {item.id}</div>
              <div>Name: {item.name}</div>
            </li>
          ))
        ) : (
          <div className='inner-container'>
            <Hourglass size={32} />
          </div>
        )}
      </Fieldset>
    </div>
  );
}
