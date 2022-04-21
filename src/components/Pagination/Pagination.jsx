import React from 'react';

const Pagination = ({ totalAlumni, alumniPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAlumni / alumniPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        <ul className="text-3xl text-white flex flex-row items-center justify-center">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className="p-4 border-2 m-4 bg-purple w-16 item-center justify-center flex hover:cursor-pointer"
            >
              <a onClick={() => paginate(number)}>{number}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
