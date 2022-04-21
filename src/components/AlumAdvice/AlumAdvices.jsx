import React, { useState, useEffect } from 'react';
import { getAdvice } from '../../services/advice';

export default function AlumAdvices({ advices }) {
  return (
    <div class="mx-auto container py-20 px-6">
      <h1>hello world</h1>
      {advices.map((advice) => (
        <div key={advice.id}>
          <p>{advice.title} </p>
        </div>
      ))}
      <div>
        <button
          type="submit"
          className="bg-purple text-white hover:bg-darkerpurple py-0.3 font-bold rounded focus:outline-none focus:shadow-outline p-2 mt-8"
        >
          Add Advice
        </button>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div class="rounded">
          <div class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <div>
              <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">
                Navigating Imposter Syndrome
              </h4>
              <p class="text-gray-800 dark:text-gray-100 text-sm">
                Navigating imposter syndrome can be VERY TOUGH...... if we let
                it. Mine came from holding on to the idea of what I thought a
                programmer was, like the things we see on TV, movies, etc. Then
                I had to realize that this is my journey, experience and my
                process. Once I realized that my process is mine and no one
                elses.... I embraced the journey
              </p>
            </div>
            <div>
              <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                <p class="text-sm">Mark Voltaire</p>
                <p class="text-sm">September 2021</p>

                <button
                  class="w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                  aria-label="edit note"
                  role="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-pencil"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
