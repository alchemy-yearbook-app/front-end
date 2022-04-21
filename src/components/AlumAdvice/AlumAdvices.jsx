import React from 'react';

export default function AlumTest({ advices }) {
  console.log('advices', advices);
  return (
    <div class="mx-auto container py-20 px-6">
      {advices.map((advice) => (
        <div key={advice.id}>
          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div class="rounded">
              <div class="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                <div class="flex items-center justify-between text-gray-800 dark:text-gray-100">
                  <div>
                    <h4 class="text-gray-800 dark:text-gray-100 font-bold mb-3">
                      {advice.title}
                    </h4>
                    <h1 class="text-gray-800 dark:text-gray-100 text-sm">
                      {advice.advice}
                    </h1>
                    <p class="text-sm"> Name: {advice.alumniName}</p>
                    <p class="text-sm"> Cohort:{advice.cohort}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
