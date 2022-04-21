import React, { useState, useEffect } from 'react';

export default function YearbookCard({ alumni }) {
  return (
    <>
      {alumni.map((item) => (
        <div
          role="listitem"
          className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
        >
          <div className="mt-12 mb-20" key={item.id}>
            <div className="rounded overflow-hidden shadow-2xl bg-white">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    src={item.avatarUrl}
                    alt="Display Picture"
                    role="img"
                    className="rounded-full object-cover h-full w-full shadow-xl"
                  />
                </div>
              </div>
              <div className="px-6 mt-16">
                <h1 className="font-bold text-3xl text-center mb-1">
                  {item.login}
                </h1>
                <div className="w-full flex justify-center pt-5 pb-5">
                  <a href={item.htmlUrl} target="_blank" className="mx-5 ">
                    <div
                      aria-label="Github"
                      role="img"
                      className="border-4 p-2 border-grey rounded-3xl"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="#718096"
                        stroke="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github hover:rotate-12"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
