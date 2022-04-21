import React from 'react';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../services/users';
import {
  fetchGithubTeams,
  fetchYearbookNoProfile,
} from '../../services/yearbook';
import YearbookCard from '../YearbookCard/YearbookCard';

export default function YearbookList() {
  const [cohort, setCohort] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchGithubTeams();
  //     setCohort(data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCurrentUser();
      setUser(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchYearbookNoProfile();
      setAlumni(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log('user', user);
  console.log('alumni', alumni);
  return (
    <div>
      <div>
        <div className="font-bold text-4xl uppercase text-center">
          {alumni.name}
        </div>
        <div className="w-full px-10 pt-10">
          <div className="container mx-auto">
            <div
              role="list"
              aria-label=""
              className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
            >
              <YearbookCard alumni={alumni} />
              <div
                role="listitem"
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
