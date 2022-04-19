import React from 'react';

export default function ProfileCreateEdit() {
  return (
    <>
      <div className="relative py-16">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <form className="bg-white shadow-md rounded py-4 px-4 max-h-10.4  max-w-sm ">
              <legend className="font-bold "></legend>
              <section>
                <label className="block font-bold mb-2 text-lg" htmlFor="email">
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  name="FirstName"
                  placeholder="First Name"
                />
              </section>
              <section>
                <label className="block font-bold mb-2 text-lg">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Last Name"
                />
              </section>
              <section>
                <label className="block font-bold mb-2 text-lg">Pronouns</label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="lowercase he/him, she/her, they/them"
                />
              </section>
              <section>
                <label className="block font-bold mb-2 text-lg">
                  Profile Picture URL
                </label>
                <label className="block mb-2 text-sm">
                  Right click on your LinkedIn or GitHub photo, select 'Copy
                  Image Address', and then paste below
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="https://media-exp1.licdn.com/xyz"
                />
              </section>
              <section>
                <label className="block font-bold mb-2 text-lg">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="example@email.com"
                />
              </section>

              <section>
                <label className="block font-bold mb-2 text-lg">
                  LinkedIn URL
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="https://www.linkedin.com/in/name"
                />
              </section>

              <section>
                <label className="block font-bold mb-2 text-lg">
                  GitHub URL
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="https://github.com/name"
                />
              </section>

              <section>
                <label className="block font-bold mb-2 text-lg">
                  Graduation Quote
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Graduation Quote"
                />
              </section>

              <section>
                <label
                  className="block font-bold mb-2 text-lg"
                  htmlFor="password"
                  aria-label="password"
                >
                  Company
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Current Company"
                />
              </section>

              <button
                type="submit"
                className="bg-purple text-white hover:bg-darkerpurple py-0.3 font-bold rounded focus:outline-none focus:shadow-outline p-2 mt-8"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
