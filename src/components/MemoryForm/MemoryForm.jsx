import React from 'react';

export default function MemoryForm() {
  return (
    <div>
      <>
        <div className="relative py-16 m-auto">
          <div className="relative container px-6 text-gray-500 md:px-12 xl:px-40 m-auto">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
              <form className="bg-white shadow-md py-4 px-4 max-h-10.4 max-w-sm rounded-lg m-auto">
                <legend className="font-bold "></legend>
                <section>
                  <label className="block font-bold mb-2 text-lg">
                    Memory Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Memory Title"
                  />
                </section>

                <section>
                  <label className="block font-bold mb-2 text-lg">
                    Image URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter Image Url"
                  />
                </section>

                <button
                  type="submit"
                  className="bg-purple text-white hover:bg-darkerpurple py-0.3 font-bold rounded focus:outline-none focus:shadow-outline p-2 mt-8"
                >
                  Add Memory
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
