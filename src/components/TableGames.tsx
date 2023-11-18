import React from "react";

export const TableGames = () => {
  return (
    <>
      <table className="table font-bold text-center">
        <thead>
          <tr>
            <th>Date</th>
            <th>Match</th>
            <th>1</th>
            <th>X</th>
            <th>2</th>
            <th>TIP</th>
            <th>GOALS</th>
            <th>GG</th>
            <th>BEST</th>
            <th>TIP</th>
            <th>TRUST</th>
          </tr>
        </thead>
        <tbody className="font-normal">
          <tr>
            <td className="text-center">
              <p>11:00</p>
              <a className="text-[8px] p-1  border rounded-md w-10">Finished</a>
            </td>
            <td className="text-center flex ">
              <p>Armenio 🇦🇲</p> <p>1:1</p> <p>🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
