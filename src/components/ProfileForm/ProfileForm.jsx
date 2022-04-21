import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { useProfile } from '../../hooks/useProfile';
import { getProfileById } from '../../services/profile';

// useUser hook (refactor later)
export default function ProfileForm({ isEditing, onSubmit, user }) {
  const { profile, setProfile } = useProfile(user.uuid);

  const { formState, handleForm, setFormState, setFormError, formError } =
    useForm({
      // avatar: '',
      first_name: '',
      last_name: '',
      pronouns: '',
      linked_in: '',
      github: '',
      quote: '',
      company: '',
      email: '',
    });

  useEffect(() => {
    setFormState(profile);
  }, [profile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      // avatar,
      first_name,
      last_name,
      pronouns,
      linked_in,
      github,
      quote,
      company,
      email,
    } = formState;
    try {
      if (isEditing) {
        await onSubmit({
          id,
          // avatar,
          first_name,
          last_name,
          pronouns,
          linked_in,
          github,
          quote,
          company,
          email,
        });
        const resp = await getProfileById(user.uuid);
        setProfile(resp);
        history.replace(`/yearbook`);
      } else {
        await onSubmit({
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
        history.replace(`/yearbook`);
      }
    } catch (error) {
      setFormError('Error please try again');
    }
  };

  // const handleDelete = async (e) => {
  //   e.preventDefault();
  //   await deleteJob(job.id);
  //   history.replace('/profile');
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative py-16 m-auto">
          <div className="relative container px-6 text-gray-500 md:px-12 xl:px-40 m-auto">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
              <div className="bg-white shadow-md py-4 px-4 max-h-10.4 max-w-sm rounded-lg m-auto">
                <section>
                  <label
                    className="block font-bold mb-2 text-lg"
                    htmlFor="email"
                  >
                    First Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    name="first_name"
                    placeholder="First Name"
                    value={formState.first_name}
                    onChange={handleForm}
                  />
                </section>
                <section>
                  <label className="block font-bold mb-2 text-lg">
                    Last Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    name="last_name"
                    placeholder="Last Name"
                    value={formState.last_name}
                    onChange={handleForm}
                  />
                </section>
                <section>
                  <label className="block font-bold mb-2 text-lg">
                    Pronouns
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="he/him, she/her, they/them"
                    name="pronouns"
                    value={formState.pronouns}
                    onChange={handleForm}
                  />
                </section>
                {/* <section>
                  <label className="block font-bold mb-2 text-lg">
                    Profile Picture URL
                  </label>
                  <label className="block mb-2 text-sm">
                    Right click on your LinkedIn or GitHub photo, select 'Copy
                    Image Address', and then paste below
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="https://media-exp1.licdn.com/xyz"
                    name="avatar"
                    value={formState.avatar}
                    onChange={handleForm}
                  />
                </section> */}
                <section>
                  <label className="block font-bold mb-2 text-lg">Email</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="example@email.com"
                    name="email"
                    value={formState.email}
                    onChange={handleForm}
                  />
                </section>
                <section>
                  <label className="block font-bold mb-2 text-lg">
                    LinkedIn URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="https://www.linkedin.com/in/name"
                    name="linked_in"
                    value={formState.linked_in}
                    onChange={handleForm}
                  />
                </section>
                <section>
                  <label className="block font-bold mb-2 text-lg">
                    GitHub URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="https://github.com/name"
                    name="github"
                    value={formState.github}
                    onChange={handleForm}
                  />
                </section>
                <section>
                  <label className="block font-bold mb-2 text-lg">
                    Graduation Quote
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder='"How do I center a div?"'
                    name="quote"
                    value={formState.quote}
                    onChange={handleForm}
                  />
                </section>
                <section>
                  <label className="block font-bold mb-2 text-lg">
                    Company and Position
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Full Stack Software Engineer at XYZ Company"
                    name="company"
                    value={formState.company}
                    onChange={handleForm}
                  />
                </section>
                <button
                  type="submit"
                  className="bg-purple text-white hover:bg-darkerpurple py-0.3 font-bold rounded focus:outline-none focus:shadow-outline p-2 mt-8"
                >
                  Save Changes
                </button>
                {/* {isEditing ? (
                  <button
                    aria-label="Delete"
                    className="bg-purple text-white hover:bg-darkerpurple py-0.3 font-bold rounded focus:outline-none focus:shadow-outline p-2 mt-8"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </form>
      {formError}
    </>
  );
}
