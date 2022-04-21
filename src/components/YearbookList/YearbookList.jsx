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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchYearbook();
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
                  <YearbookCard alumni={alumni} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
