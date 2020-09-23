import React, { useState, useEffect } from "react";
import { Hourglass, Fieldset } from "react95";

export default function Items() {
  const [fetchRewardsData, setFetchRewardsData] = useState([]);
  const getFetchRewardsData = async () => {
    const res = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://fetch-hiring.s3.amazonaws.com/hiring.json"
    );
    const data = await res.json();
    const filteredData = await data.filter((item) => {
      return item.name !== null && item.name !== "";
    });

    await filteredData.sort((item1, item2) => {
      if (item1.listId > item2.listId) return 1;
      if (item1.listId < item2.listId) return -1;

      return item1.id - item2.id;
    });
    setFetchRewardsData(filteredData);
    console.log(filteredData);
  };

  useEffect(() => {
    getFetchRewardsData();
  }, []);

  return (
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
