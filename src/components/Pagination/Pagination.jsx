import React from 'react';

const Pagination = ({ totalAlumni, alumniPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAlumni / alumniPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="flex w-full justify-center items-center align-middle">
        <ul className="text-xl text-white flex flex-row items-center justify-center w-max border-4 border-purple rounded-xl">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={() => paginate(number)}
                className="h-full p-2 box-content bg-purple w-16 item-center justify-center flex hover:cursor-pointer active:bg-darkerpurple active:rounded-lg focus:bg-darkerpurple focus:ring-darkerpurple "
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
