import React from 'react';
import { Link } from 'react-router-dom';

export default function AlumTest({ advices }) {
  console.log('advices', advices);
  return (
    <div class="mx-auto container py-20 px-6">
      <div className="w-full flex align-middle justify-center">
        <Link to="/advice/create">
          <button className="border-2 p-2 py-0.3 text-white font-bold rounded focus:outline-none focus:shadow-outline bg-purple hover:bg-darkerpurple mb-12">
            Share Advice
          </button>
        </Link>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {advices.map((advice) => (
          <div key={advice.id}>
            <div class="rounded">
              <div class="w-full flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4 h-fit">
                <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                  <div>
                    <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">
                      {advice.title}
                    </h4>
                    <h1 class="text-gray-800 dark:text-gray-100 text-sm">
                      {advice.advice}
                    </h1>
                    <h4 class="text-gray-800 dark:text-gray-100 font-bold pt-4">
                      Name:
                    </h4>
                    <p class="text-sm">{advice.alumniName}</p>
                    <h4 class="text-gray-800 dark:text-gray-100 font-bold pt-4">
                      Cohort:
                    </h4>
                    <p class="text-sm">{advice.cohort}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
