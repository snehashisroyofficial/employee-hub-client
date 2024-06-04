import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const WorkSheet = () => {
  const axiosPublic = useAxiosPublic();

  const { data: worksheet, refetch } = useQuery({
    queryKey: ["worksheet"],
    queryFn: async () => {
      const res = await axiosPublic.get("/work-sheet");
      return res.data;
    },
  });

  return (
    <div>
      {/* task add form  */}
      <div>
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
            Add Work
          </h2>

          <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* tasks  */}
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">
                  Tasks
                </label>
                {/* <input
                  id="username"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                /> */}

                <select
                  defaultValue=""
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option disabled value="">
                    Choose your tasks
                  </option>
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                  <option value="content">Content</option>
                </select>
              </div>

              {/* hours worked  */}
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="hours-worked"
                >
                  Hours Worked
                </label>
                <input
                  id="hours-worked"
                  type="number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Password Confirmation
                </label>
                <input
                  id="passwordConfirmation"
                  type="password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
      {/* table tasks  */}
      <div></div>
    </div>
  );
};

export default WorkSheet;
