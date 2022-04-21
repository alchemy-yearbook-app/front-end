import React from 'react';
import { useForm } from '../../hooks/useForm';

export default function () {
  const { formState, handleForm, setFormState, setFormError, formError } =
    useForm({
      // avatar: '',
      title: '',
      advice: '',
      alumni_name: '',
      cohort: '',
    });

  return (
    <>
      <form>
        <div className="relative py-16 m-auto">
          <div className="relative container px-6 text-gray-500 md:px-12 xl:px-40 m-auto">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
              <div className="bg-white shadow-md py-4 px-4 max-h-10.4 max-w-sm rounded-lg m-auto">
                <section>
                  <label className="block font-bold mb-2 text-lg">Title</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="adviceTitle"
                    name="advice_title"
                    placeholder="Enter Title"
                    value={formState.title}
                  />
                </section>

                <section>
                  <label className="block font-bold mb-2 text-lg">Advice</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="advice"
                    name="advice"
                    placeholder="Advice for current students"
                    value={formState.advice}
                  />
                </section>

                <section>
                  <label className="block font-bold mb-2 text-lg">
                    Your Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="alumni_name"
                    name="alumni_name"
                    placeholder="What's your name"
                    value={formState.alumni_name}
                  />
                </section>

                <section>
                  <label className="block font-bold mb-2 text-lg">Cohort</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="cohort"
                    name="cohort"
                    placeholder="What cohort were you apart of ? "
                    value={formState.cohort}
                  />
                </section>

                <button
                  type="submit"
                  className="bg-purple text-white hover:bg-darkerpurple py-0.3 font-bold rounded focus:outline-none focus:shadow-outline p-2 mt-8"
                >
                  Share Advice
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
