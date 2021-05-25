import React from 'react';
import './CommonTable.css';

const CommonTable = (props) => {
  const { headersName, children } = props;
  return (
    <table className="common-table">
      <thead>
        <tr>
          {headersName.map((item, idx) => {
            return (
              <td className="common-table-header-column" key={idx}>
                {item}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default CommonTable;
