import React from "react";

const Portfolio = () => {
  return (
    <section class="bg-white dark:bg-gray-900 ">
      <div class="container px-6 py-10 mx-auto">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">Portfolio</h2>
          <p className="text-gray-600  max-w-md mx-auto">
            Effortlessly manage employees, admin tasks, daily reports, and HR
            processes with our streamlined platform.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-left"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                Daily Task Submit
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                Employee
              </p>
            </div>
          </div>

          <div
            class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 class="mt-4 text-xl font-semibold text-white capitalize">
                Users Management
              </h2>
              <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                HR
              </p>
            </div>
          </div>

          <div
            class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1585675705484-c2239e62a395?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 class="mt-4 text-xl font-semibold text-white capitalize">
                Admin Control
              </h2>
              <p class="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
