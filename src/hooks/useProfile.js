import { useState, useEffect } from 'react';
import { getProfileById } from '../services/profile';

// gives the children access to the info for a job. To be used in editForm, jobCard, etc...
function useProfile(id) {
  const [profile, setProfile] = useState({
    id: '',
    avatar: '',
    firstName: '',
    lastName: '',
    linkedIn: '',
    github: '',
    quote: '',
    company: '',
    email: '',
    pronoun: '',
  });
  const [loading, setLoading] = useState(true);
  // we might need to grab our user and put it into the dependency array

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const resp = await getProfileById(id);
        setProfile(resp);
      } catch (error) {
        setProfile({
          avatar: '',
          firstName: '',
          lastName: '',
          linkedIn: '',
          github: '',
          quote: '',
          company: '',
          email: '',
          pronoun: '',
        });
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return { profile, loading, setProfile };
}

export { useProfile };
