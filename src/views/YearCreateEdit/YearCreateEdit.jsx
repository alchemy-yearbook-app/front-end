import React from 'react';

export default function YearCreateEdit() {
  return (
    <>
      <form className="bg-white shadow-md rounded py-4 px-4 max-h-10.4  max-w-sm  ">
        <legend className="text-sm font-bold "></legend>
        <section>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            name="FirstName"
            placeholder="First Name"
          />
        </section>
        <section>
          <label>Last Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Last Name"
          />
        </section>

        <section>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
          />
        </section>

        <section>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Linkedin
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Linkedin"
          />
        </section>

        <section>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            github
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="github"
          />
        </section>

        <section>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Graduation Quote
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Graduation Quote"
          />
        </section>

        <section>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
            aria-label="password"
          >
            Company
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Current Company"
          />
        </section>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 py-0.3 text-blue-500 font-bold rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
      </form>
    </>
  );
}
