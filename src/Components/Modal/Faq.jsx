import React from "react";

const Faq = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 my-20">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How do I promote an employee to an HR role?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Admin users can promote employees to an HR role through the Role
                Management feature. Simply navigate to the employee's profile,
                select the 'Promote to HR' option, and confirm the promotion.
              </p>
            </div>
          </details>
          <details open="">
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How can employees submit their daily tasks?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Employees can submit their daily tasks by logging into their
                dashboard, navigating to the 'Daily Task Submission' section,
                and filling out the task details. Once submitted, tasks can be
                reviewed and monitored by HR.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What should I do if I encounter issues with salary processing?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                If you experience any issues with salary processing, please
                contact our support team through the 'Contact Us' form on the
                platform. Provide details about the issue, and our team will
                assist you promptly.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
