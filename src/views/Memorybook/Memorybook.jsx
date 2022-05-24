import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MemoryList from '../../components/MemoryList/MemoryList';
import { fetchMemory } from '../../services/memorybook';
import { getCurrentUser } from '../../services/users';
import './Memorybook.css';

export default function Memorybook() {
  const [user, setUser] = useState({});
  const [memorybook, setMemorybook] = useState([]);
  const [loading, setLoading] = useState(true);

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
      const data = await fetchMemory();
      setMemorybook(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h3></h3>;
  }
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
        <MemoryList memorybook={memorybook} />

        {/* <div class="item">
          <div class="polaroid">
            <img src="https://i.ibb.co/qB7Pw9w/IMG-9759.jpg" />
            <div class="caption">When the code</div>
          </div>
        </div> */}
        {/* <div class="item">
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
        </div> */}
      </div>
    </div>
  );
}
