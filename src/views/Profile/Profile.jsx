import React from 'react';
import { useProfile } from '../../hooks/useProfile';
import { useParams, useHistory } from 'react-router-dom';

export default function Profile() {
  const history = useHistory();
  const { id } = useParams();
  const { profile } = useProfile(id);

  const handleCreate = () => {
    history.push(`/profile/create`);
  };

  const handleEdit = () => {
    history.push(`/profile/${profile.id}/edit`);
  };

  const handleBack = () => {
    history.push('/yearbook/');
  };

  return (
    <div>
      <div className="flex justify-center bg-blue-100">
        <div className="bg-white rounded-2xl border shadow-xl p-10 max-w-lg">
          <div className="flex flex-col items-center space-y-4">
            {!profile ? (
              <>
                <h1 className="font-bold text-3xl text-gray-700 w-4/6 text-center">
                  Welcome!
                </h1>
                <p className="text-xl text-gray-500 text-center w-5/6">
                  Please click below to enter your profile into the Alchemy
                  Yearbook!
                </p>
                <button
                  onClick="handleCrate"
                  className="bg-purple text-white rounded-md font-semibold px-4 py-3 w-full"
                >
                  Create Profile
                </button>
              </>
            ) : (
              <>
                <h1 className="font-bold text-3xl text-gray-700 w-4/6 text-center">
                  Welcome back!
                </h1>
                <p className="text-xl text-gray-500 text-center w-5/6">
                  Please click below to edit your profile in the Yearbook!
                </p>
                <button
                  onClick={handleEdit}
                  className="bg-purple text-white rounded-md font-semibold px-4 py-3 w-full"
                >
                  Edit Profile
                </button>
              </>
            )}
            <button onClick={handleBack} className="text-darkpurple">
              Back to Yearbook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
