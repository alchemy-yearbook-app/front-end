import React from 'react';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../services/users';
import {
  fetchYearbookProfiles,
  fetchYourCohort,
} from '../../services/yearbook';
import CohortCard from '../../components/CohortCard/CohortCard';
export default function Cohort() {
  const [yourTeam, setYourTeam] = useState([]);
  const [yourTeamProfiles, setYourTeamProfiles] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

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
      const data1 = await fetchYearbookProfiles();
      setYourTeamProfiles(data1);
    };
    setLoading(false);
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchYourCohort();
      setYourTeam(data);
    };
    setLoading(false);
    fetchData();
  }, []);

  if (loading) {
    <h3>Loading...</h3>;
  }

  return (
    <div>
      <CohortCard yourTeam={yourTeam} yourTeamProfiles={yourTeamProfiles} />
    </div>
  );
}
