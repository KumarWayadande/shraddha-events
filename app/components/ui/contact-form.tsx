import { useForm } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit, reset] = useForm("mnnzgaqg");

  if (state.submitting) {
    return (
      <p className="text-sm text-stone-300">Submitting your information!!</p>
    );
  }

  if (state.succeeded) {
    return (
      <div className="flex flex-row gap-10">
        <p className="text-sm text-stone-300">
          Thanks for sharing your details{" "}
        </p>
        <button
          onClick={reset}
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#6d582c] sm:w-fit hover:bg-[#52462e] focus:ring-4 focus:outline-none cursor-pointer focus:ring-primary-300"
        >
          Reset
        </button>
      </div>
    );
  }

  return (
    <section className="bg-[#121d17]">
      <div className="">
        {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Leave your details here, and we will reach out to you
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p> */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@host.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Message
            </label>
            <input
              type="text"
              id="subject"
              name="package"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#6d582c] sm:w-fit hover:bg-[#52462e] focus:ring-4 focus:outline-none cursor-pointer focus:ring-primary-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
