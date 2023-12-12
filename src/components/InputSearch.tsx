import React from "react";

export const InputSearch = () => {
  return (
    <div className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Search"
        className="input rounded-md p-2 bg-base-200"
      />
      <select className="select select-bordered  rounded-md  bg-base-200">
        <option selected>Sort</option>

        <option>Trust BestTip</option>
        <option>Trust 1X2</option>
        <option>Trust TotalGoals</option>
        <option>Trust GG/BTTS</option>
        <option>Odd BestTip</option>
        <option>Odd 1X2</option>
        <option>Odd TotalGoals</option>
        <option>Hour</option>
      </select>
      <select className="select select-bordered   rounded-md  bg-base-200">
      <option selected>Ascending</option>
       
        <option>Descending</option>
      </select>

      <button className="rounded-md bg-violet-500 hover:bg-violet-600 p-2">
        Apply Filter
      </button>
    </div>
  );
};
