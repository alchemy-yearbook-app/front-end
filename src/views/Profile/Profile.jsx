import React from 'react';
import { useProfile } from '../../hooks/useProfile';
import { useParams, useHistory } from 'react-router-dom';

export default function Profile() {
  const history = useHistory();
  const { id } = useParams();
  const { profile } = useProfile(id);

  const handleClick = () => {
    history.push(`/profile/${profile.id}/edit`);
  };

  const handleBack = () => {
    history.push('/yearbook/');
  };

  return (
    <div>
      <div className="mt-48 mb-20">
        <div className="rounded overflow-hidden shadow-2xl bg-white">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5603AQFO1Eake0aivw/profile-displayphoto-shrink_800_800/0/1647297534324?e=1655942400&v=beta&t=9qI2_vaeWFxt-08j1OFNR-o4bvfCgeHgZ6eDgXTkJxY"
                alt="Display Picture"
                role="img"
                className="rounded-full object-cover h-full w-full shadow-xl"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <h1 className="font-bold text-3xl text-center mb-1">Kevin Do</h1>
            <p className="text-gray-800 text-sm text-center">Company</p>
            <p className="text-center text-gray-600 text-base pt-3 font-normal">
              "Quote"
            </p>
            <div className="w-full flex justify-center pt-5 pb-5">
              <a
                href="https://github.com/kevindo1"
                target="_blank"
                className="mx-5"
              >
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
              <a
                href="https://www.linkedin.com/in/kdo/"
                target="_blank"
                className="mx-5"
              >
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
              <button
                onClick={() =>
                  (window.location = `mailto:kevind0501@gmail.com`)
                }
                className="mx-5"
              >
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
              </button>
            </div>
          </div>
          <div className="flex flex-row w-full justify-center">
            <button
              onClick={handleBack}
              className="w-8 h-8 rounded-full text-darkpurple hover:text-pink flex items-center justify-center focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img"
              >
                <path
                  data-name="layer1"
                  d="M43.998 14H7a3 3 0 0 0 0 6h36.998a12 12 0 1 1 0 24H13.672l7.363-6.795a3 3 0 0 0-4.07-4.41L2 47l14.965 14.205a3 3 0 0 0 4.07-4.41L13.672 50h30.326a18 18 0 1 0 0-36z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <button
              className="w-8 h-8 rounded-full text-darkpurple hover:text-pink flex items-center justify-center focus:outline-none"
              aria-label="edit note"
              role="button"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-pencil"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
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
  );
}
