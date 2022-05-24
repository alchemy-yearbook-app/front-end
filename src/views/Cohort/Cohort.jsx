import React from 'react';
import { useState, useEffect } from 'react';
import { fetchYearbookProfiles } from '../../services/yearbook';
import CohortCard from '../../components/CohortCard/CohortCard';
export default function Cohort() {
  const [yourTeamProfiles, setYourTeamProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetchYearbookProfiles();
      setYourTeamProfiles(data1);
    };
    setLoading(false);
    fetchData();
  }, []);

  if (loading) {
    <h3>Loading...</h3>;
  }

  return (
    <>
      <div>
        <div>
          <div className="font-bold text-4xl uppercase text-center">
            September 2021
          </div>
          <div className="w-full px-10 pt-10">
            <div className="container mx-auto">
              <div
                role="list"
                aria-label=""
                className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                <CohortCard yourTeamProfiles={yourTeamProfiles} />
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //{' '}
      <div>
        //{' '}
        <CohortCard yourTeam={yourTeam} yourTeamProfiles={yourTeamProfiles} />
        //{' '}
      </div> */}
    </>
  );
}
