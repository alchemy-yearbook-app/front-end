import React from 'react';
import { useUser } from '../../context/UserContext';
import Button from '../Button/Button';

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="bg-darkerpurple w-100 px-32 md:px-auto mb-12">
      <div className="md:h-16 h-28 mx-auto md:px-4 container sm:flex items-center justify-between flex-wrap md:flex-nowrap hidden">
        <div className="text-white md:order-1 hover:text-teal w-20">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </a>
        </div>
        <div className="text-white order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 hover:text-teal">
              <a href="/">Home</a>
            </li>
            <li className="md:px-4 md:py-2 hover:text-teal">
              <a href="/yearbook">Yearbook</a>
            </li>
            {user.uuid && (
              <>
                <li className="md:px-4 md:py-2 hover:text-teal">
                  <a href="/cohort">My Cohort</a>
                </li>
                <li className="md:px-4 md:py-2 hover:text-teal">
                  <a href="/advice">Alumni Advice</a>
                </li>
                <li className="md:px-4 md:py-2 hover:text-teal">
                  <a href="/memorybook">Memorybook</a>
                </li>
              </>
            )}

            <li className="md:px-4 md:py-2 hover:text-teal">
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>
        <div className="order-2 md:order-3 text-white hover:text-teal w-20">
          {!user.uuid ? (
            <>
              <button className="px-4 py-2 rounded-xl flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="/sign-in" className="font-bold">
                  Login
                </a>
              </button>
            </>
          ) : (
            <Button />
          )}
        </div>
      </div>
    </nav>
  );
}
