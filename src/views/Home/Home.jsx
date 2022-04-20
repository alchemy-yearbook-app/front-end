import React from 'react';

export default function Home() {
  return (
    <main className="bg-darkpurple font-montserrat">
      {/* <header className="h-24 xl:h-32 flex items-center"> */}
      {/* <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
          <a
            href="/about"
            className="uppercase font-black hover:text-white text-2xl"
          ></a>
        </div> */}
      {/* </header> */}
      <div className="container mx-auto px-6 sm:px-12 relative flex flex-col sm:flex-row">
        <div className="sm:w-1/2 sm:pt-8 lg:pt-16 pb-8 sm:pb-16 lg:pb-32 relative z-30">
          <h2 className="uppercase text-black font-bold tracking-wider text-2xl mt-40">
            Alchemy Code Lab
          </h2>
          <h1 className="uppercase font-black leading-none tracking-wider mt-4 text-5xl lg:text-6xl xl:text-8xl">
            Year
          </h1>
          <h1 className="uppercase font-black leading-none tracking-wider mb-6 text-5xl lg:text-6xl xl:text-8xl">
            book
          </h1>
          <p className="text-gray font-roboto text-lg sm:w-2/3 lg:w-1/2">
            Where software developers are built and memories are made
          </p>
          <div className="mt-12 absolute">
            <a
              href="/yearbook"
              className="border-black border-8 text-4xl font-bold p-4 hover:text-white hover:border-white"
            >
              ENTER
            </a>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-2/3 absolute sm:absolute my-auto right-0 align-middle sm:block hidden">
          <h3 className="monteserrat font-black text-white absolute top-0 left-0 mt-32 sm:mt-32 lg:mt-56 ml-0 lg:ml-12 z-30 text-xl sm:text-3xl lg:text-4xl xl:text-5xl transform rotate-90"></h3>
          <div className="left-0 bottom-0 w-full h-16 absolute z-30 flex items-center justify-center mb-12 lg:mb-24 xl:mb-32">
            <span className="bg-black text-white uppercase font-black xl:text-2xl py-2 px-6 rounded-full"></span>
          </div>
          <div className="bg-home bg-cover absolute left-0 right-0 w-full h-full object-cover z-10 mt-16"></div>
          <div className="absolute inset-0"></div>
          <svg
            className="relative z-20 pt-12 opacity-80"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Capa 1"
            viewBox="0 0 428.29 298.11"
          >
            <defs />
            <path
              fill="#a3e4e5"
              d="M364.79 23.93v199h-271v-199h271m2.06-2.06H91.73V225h275.12V21.87z"
            />
            <path
              fill="#a3e4e5"
              d="M119.74 11.53L84.99 46.29l-2.16-9.75-9.37-1.78L108.22 0l1.35 9.81 10.17 1.72zM387.74 211.53l-34.75 34.76-2.16-9.75-9.37-1.78L376.21 200l1.36 9.81 10.17 1.72z"
            />
            <path
              fill="#b7791f"
              d="M336.29 92.93h92v5h-92zM336.29 77.93h92v5h-92zM336.29 62.93h92v5h-92zM336.29 107.93h92v5h-92z"
            />
            <circle cx="1.75" cy="296.36" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="286.99" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="277.62" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="268.26" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="258.89" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="249.53" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="240.16" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="230.8" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="221.43" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="212.06" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="202.7" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="193.33" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="183.97" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="174.6" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="165.23" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="155.87" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="146.5" r="1.75" fill="#a3e4e5" />
            <circle cx="1.75" cy="137.14" r="1.75" fill="#a3e4e5" />
            <path
              fill="#a3e4e5"
              d="M1.75 126A1.75 1.75 0 110 127.77 1.75 1.75 0 011.75 126zM1.75 116.65A1.76 1.76 0 110 118.41a1.75 1.75 0 011.75-1.76zM10.78 294.6A1.76 1.76 0 119 296.36a1.76 1.76 0 011.78-1.76zM10.78 285.24A1.75 1.75 0 119 287a1.75 1.75 0 011.78-1.76zM10.78 275.87A1.76 1.76 0 119 277.62a1.76 1.76 0 011.78-1.75zM10.78 266.51A1.75 1.75 0 119 268.26a1.75 1.75 0 011.78-1.75zM10.78 257.14A1.75 1.75 0 119 258.89a1.75 1.75 0 011.78-1.75zM10.78 247.77A1.76 1.76 0 119 249.53a1.76 1.76 0 011.78-1.76zM10.78 238.41A1.75 1.75 0 119 240.16a1.75 1.75 0 011.78-1.75zM10.78 229A1.76 1.76 0 119 230.8a1.76 1.76 0 011.78-1.8zM10.78 219.68A1.75 1.75 0 119 221.43a1.75 1.75 0 011.78-1.75zM10.78 210.31A1.76 1.76 0 119 212.06a1.76 1.76 0 011.78-1.75zM10.78 201A1.75 1.75 0 119 202.7a1.75 1.75 0 011.78-1.7zM10.78 191.58A1.75 1.75 0 119 193.33a1.75 1.75 0 011.78-1.75zM10.78 182.21A1.76 1.76 0 119 184a1.76 1.76 0 011.78-1.79zM10.78 172.85A1.75 1.75 0 119 174.6a1.75 1.75 0 011.78-1.75zM10.78 163.48A1.76 1.76 0 119 165.23a1.76 1.76 0 011.78-1.75zM10.78 154.12A1.75 1.75 0 119 155.87a1.75 1.75 0 011.78-1.75zM10.78 144.75A1.75 1.75 0 119 146.5a1.76 1.76 0 011.78-1.75zM10.78 135.39A1.75 1.75 0 119 137.14a1.75 1.75 0 011.78-1.75zM10.78 126A1.75 1.75 0 119 127.77a1.75 1.75 0 011.78-1.77zM10.78 116.65A1.76 1.76 0 119 118.41a1.76 1.76 0 011.78-1.76z"
            />
            <circle cx="19.82" cy="296.36" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="286.99" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="277.62" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="268.26" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="258.89" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="249.53" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="240.16" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="230.8" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="221.43" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="212.06" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="202.7" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="193.33" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="183.97" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="174.6" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="165.23" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="155.87" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="146.5" r="1.75" fill="#a3e4e5" />
            <circle cx="19.82" cy="137.14" r="1.75" fill="#a3e4e5" />
            <path
              fill="#a3e4e5"
              d="M19.82 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM19.82 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76z"
            />
            <circle cx="28.85" cy="296.36" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="286.99" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="277.62" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="268.26" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="258.89" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="249.53" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="240.16" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="230.8" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="221.43" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="212.06" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="202.7" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="193.33" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="183.97" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="174.6" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="165.23" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="155.87" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="146.5" r="1.75" fill="#a3e4e5" />
            <circle cx="28.85" cy="137.14" r="1.75" fill="#a3e4e5" />
            <path
              fill="#a3e4e5"
              d="M28.85 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM28.85 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 294.6a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 285.24a1.75 1.75 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 275.87a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 266.51a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 257.14a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 247.77a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 238.41a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 229a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 219.68a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 210.31a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 201a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 191.58a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 182.21a1.76 1.76 0 11-1.75 1.79 1.76 1.76 0 011.75-1.79zM37.88 172.85a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 163.48a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 154.12a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 144.75a1.75 1.75 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 135.39a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 116.65a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76z"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
