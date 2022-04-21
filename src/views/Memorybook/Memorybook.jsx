import React from 'react';
import { Link } from 'react-router-dom';
import './Memorybook.css';

export default function Memorybook() {
  return (
    <div>
      <div className="w-full flex align-middle justify-center">
        <Link to="/memorybook/create">
          <button className="border-2 p-2 py-0.3 text-white font-bold rounded focus:outline-none focus:shadow-outline bg-purple hover:bg-darkerpurple">
            Add Memory
          </button>
        </Link>
      </div>
      <div class="wrapper">
        <div class="item">
          <div class="polaroid">
            <img src="https://i.ibb.co/qB7Pw9w/IMG-9759.jpg" />
            <div class="caption">When the code</div>
          </div>
        </div>
        <div class="item">
          <div class="polaroid">
            <img src="https://emoji.slack-edge.com/T6FCZF1HR/potato-head/6c637bbe90391dfd.png" />
            <div class="caption">Dan's Potato</div>
            <div class="caption">- Dan</div>
          </div>
        </div>

        <div class="item">
          <div class="polaroid">
            <img src="https://i.ibb.co/mSCTRvQ/creeper.jpg" />
            <div class="caption">Phoenix Nicholson</div>
          </div>
        </div>

        <div class="item">
          <div class="polaroid">
            <img src="https://i.ibb.co/12KjvzC/Screen-Shot-2022-04-11-at-9-21-40-AM.png" />
            <div class="caption">7 foot tall</div>
          </div>
        </div>

        <div class="item">
          <div class="polaroid">
            <img src="https://i.ibb.co/2khXVR2/8806-revivedge.gif" />
            <div class="caption">Deadge</div>
          </div>
        </div>
        <div class="item">
          <div class="polaroid">
            <img src="https://i.ibb.co/12KjvzC/Screen-Shot-2022-04-11-at-9-21-40-AM.png" />
            <div class="caption">7 foot tall</div>
          </div>
        </div>
        <div class="item">
          <div class="polaroid">
            <img src="https://i.ibb.co/12KjvzC/Screen-Shot-2022-04-11-at-9-21-40-AM.png" />
            <div class="caption">7 foot tall</div>
          </div>
        </div>
        <div class="item">
          <div class="polaroid">
            <img src="https://i.ibb.co/12KjvzC/Screen-Shot-2022-04-11-at-9-21-40-AM.png" />
            <div class="caption">7 foot tall</div>
          </div>
        </div>
        <div class="item">
          <div class="polaroid">
            <div class="caption">
              7 foot tall 7 foot tall 7 foot tall 7 foot tall 7 foot tall 7 foot
              tall 7 foot tall 7 foot tall 7 foot tall 7 foot tall 7 foot tall 7
              foot tall 7 foot tall 7 foot tall
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
