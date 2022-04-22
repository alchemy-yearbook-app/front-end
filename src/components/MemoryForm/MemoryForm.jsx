import React from 'react';
import { useForm } from '../../hooks/useForm';
import { createMemory } from '../../services/memorybook';

export default function MemoryForm() {
  const { formState, handleForm, setFormState, setFormError, formError } =
    useForm({
      cohortId: '',
      imageUrl: '',
      audio: '',
      text: '',
      resource_url: '',
      name: '',
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { cohortId, imageUrl, audio, text, resource_url } = formState;
    try {
      const resp = await createMemory({
        cohortId,
        imageUrl,
        audio,
        text,
        resource_url,
      });
      return resp;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <>
        <form onSubmit={handleSubmit}>
          <div className="relative py-16 m-auto">
            <div className="relative container px-6 text-gray-500 md:px-12 xl:px-40 m-auto">
              <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <form className="bg-white shadow-md py-4 px-4 max-h-10.4 max-w-sm rounded-lg m-auto">
                  <legend className="font-bold "></legend>
                  <section>
                    <label className="block font-bold mb-2 text-lg">
                      Memory Title
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Memory Title"
                      name="text"
                      value={formState.text}
                      onChange={handleForm}
                    />
                  </section>
                  <section>
                    <label className="block font-bold mb-2 text-lg">
                      Image URL
                    </label>
                    <label className="block mb-2 text-sm">
                      Right click on an image, copy image address online, or
                      upload an image to{' '}
                      <a
                        href="https://imgbb.com/"
                        target="_blank"
                        className="text-darkteal"
                      >
                        https://imgbb.com/
                      </a>
                      , copy and paste the link into your browser, THEN right
                      click image, copy image address and then paste URL below
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Image Url"
                      name="imageUrl"
                      value={formState.imageUrl}
                      onChange={handleForm}
                    />
                  </section>
                  <section>
                    <label className="block font-bold mb-2 text-lg">
                      Author
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-1 px-1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Your Name"
                      name="name"
                      value={formState.name}
                      onChange={handleForm}
                    />
                  </section>
                  <button
                    type="submit"
                    className="bg-purple text-white hover:bg-darkerpurple py-0.3 font-bold rounded focus:outline-none focus:shadow-outline p-2 mt-8"
                  >
                    Add Memory
                  </button>
                </form>
              </div>
            </div>
          </div>
        </form>
      </>
    </div>
  );
}
