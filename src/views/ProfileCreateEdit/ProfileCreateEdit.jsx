import React, { useState, useEffect } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { updateProfile, createProfile } from '../../services/profile';
import { getCurrentUser } from '../../services/users';

export default function ProfileCreateEdit({ isEditing = false }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCurrentUser();
      setUser(data);
      setLoading(true);
    };
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    <h3>loading...</h3>;
  }
  const handleProfileForm = async ({
    id,
    avatar,
    firstName,
    lastName,
    linkedIn,
    github,
    quote,
    company,
    email,
    pronoun,
  }) => {
    try {
      if (isEditing) {
        await updateProfile({
          id,
          avatar,
          firstName,
          lastName,
          linkedIn,
          github,
          quote,
          company,
          email,
          pronoun,
        });
      } else {
        await createProfile({
          avatar,
          firstName,
          lastName,
          linkedIn,
          github,
          quote,
          company,
          email,
          pronoun,
        });
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <ProfileForm
      isEditing={isEditing}
      onSubmit={handleProfileForm}
      user={user}
    />
  );
}
