import React from 'react';
import { useState, useEffect } from 'react';
import { getCurrentUser, signIn } from '../../services/users';
import { fetchGithubTeams, fetchYearbook } from '../../services/yearbook';
import YearbookCard from '../YearbookCard/YearbookCard';

export default function YearbookList() {
  const [cohort, setCohort] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGithubTeams();
      setCohort(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCurrentUser();
      setUser(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log('user', user);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchYearbook();
      console.log('data', data);
      setAlumni(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {cohort.map((item) => (
          <div key={item.id}>
            <div className="font-bold text-4xl uppercase text-center">
              {item.name}
            </div>
            <div className="w-full px-10 pt-10">
              <div className="container mx-auto">
                <div
                  role="list"
                  aria-label=""
                  className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
                >
                  <div
                    role="listitem"
                    className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                  >
                    <YearbookCard alumni={alumni} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <YearbookCard user={user} /> */}
      <div>
        {/* <div className="rounded overflow-hidden shadow-2xl bg-white">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              <img
                src="https://avatars.githubusercontent.com/u/80404797?v=4"
                alt="Display Picture of Kevin Do"
                role="img"
                className="rounded-full object-cover h-full w-full shadow-xl"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <h1 className="font-bold text-3xl text-center mb-1">TESTING</h1>
            <p className="text-gray-800 text-sm text-center">Title</p>
            <p className="text-center text-gray-600 text-base pt-3 font-normal">
              "Sample quote"
            </p>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a href="" className="mx-5">
                <div aria-label="Github" role="img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#718096"
                    stroke="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
              </a>
              <a href="" className="mx-5">
                <div aria-label="Linkedin" role="img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#718096"
                    stroke="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </a>
              <a href="" className="mx-5">
                <div aria-label="email" role="img">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#718096"
                    stroke="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-email"
                  >
                    <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div> */}
        {/* <dh-component>
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <p className="text-black text-lg text-center font-bold pb-3 uppercase">
                Alchemy Code Lab
              </p>
              <h1 className="xl:text-5xl text-4xl text-center text-black font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                September 2021
              </h1>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div
                role="list"
                aria-label=""
                className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-2xl bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://avatars.githubusercontent.com/u/80404797?v=4"
                          alt="Display Picture of Kevin Do"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-xl"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Kevin Do
                      </h1>
                      <p className="text-gray-800 text-sm text-center">Title</p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        "Sample quote"
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="Linkedin" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="email" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-email"
                            >
                              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-xl bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://avatars.githubusercontent.com/u/88062154?v=4"
                          alt="Display Picture of Indiana Holsworth"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-xl"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Indiana Holdsworth
                      </h1>
                      <p className="text-gray-800 text-sm text-center">Title</p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        "Sample Quote"
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="Linkedin" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="email" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-email"
                            >
                              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-xl bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://avatars.githubusercontent.com/u/90009901?v=4"
                          alt="Display Picture of Mira Kinebuchi"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-xl"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Mira Kinebuchi
                      </h1>
                      <p className="text-gray-800 text-sm text-center">Title</p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        "Sample Quote"
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="Linkedin" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="email" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-email"
                            >
                              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-xl bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://avatars.githubusercontent.com/u/89114786?v=4"
                          alt="Display Picture of Phoenix Nicholson"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-xl"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Phoenix Nicholson
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        CTO at Apple
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        "I love One Piece"
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="Linkedin" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="email" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-email"
                            >
                              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-xl bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://avatars.githubusercontent.com/u/88409474?v=4"
                          alt="Display Picture of Mark Voltaire"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-xl"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Mark Voltaire
                      </h1>
                      <p className="text-gray-800 text-sm text-center">Title</p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        "Sample quote"
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="Linkedin" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="email" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-email"
                            >
                              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                >
                  <div className="rounded overflow-hidden shadow-xl bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src=""
                          alt="Display Picture"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-xl"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        Name
                      </h1>
                      <p className="text-gray-800 text-sm text-center">Title</p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        "Sample Quote"
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="" className="mx-5">
                          <div aria-label="Github" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="Linkedin" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </div>
                        </a>
                        <a href="" className="mx-5">
                          <div aria-label="email" role="img">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#718096"
                              stroke="none"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-email"
                            >
                              <path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dh-component> */}
      </div>
    </div>
  );
}
