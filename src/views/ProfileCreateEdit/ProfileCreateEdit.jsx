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
    first_name,
    last_name,
    pronouns,
    linked_in,
    github,
    quote,
    company,
    email,
  }) => {
    try {
      if (isEditing) {
        await updateProfile({
          id,
          avatar,
          first_name,
          last_name,
          pronouns,
          linked_in,
          github,
          quote,
          company,
          email,
        });
      } else {
        await createProfile({
          avatar,
          first_name,
          last_name,
          pronouns,
          linked_in,
          github,
          quote,
          company,
          email,
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
