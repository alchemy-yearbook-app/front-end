import React from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { updateProfile, createProfile } from '../../services/profile';

export default function ProfileCreateEdit({ isEditing = false }) {
  const handleProfileForm = async ({
    id,
    avatar,
    first_name,
    last_name,
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
  return <ProfileForm isEditing={isEditing} onSubmit={handleProfileForm} />;
}
