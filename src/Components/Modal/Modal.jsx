import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { IoMdClose } from "react-icons/io";
const Modal = ({ data, onClose }) => {
  const [showyear, setYear] = useState(null);

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = data.email;
    const salary = form.salary.value;
    const month = form.month.value;
    const year = showyear;

    const formData = { name, email, salary, month, year };
    console.log(formData);
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center "
    >
      <div className="max-w-md flex flex-col items-center justify-center   gap-5 ">
        <button onClick={onClose} className="place-self-end ">
          <IoMdClose className="text-3xl text-white" />
        </button>

        <div className="bg-white p-10 rounded-lg">
          <h1 className="text-2xl text-center font-extrabold"> Pay Salary</h1>
          <form onSubmit={handleFormSubmit}>
            {/* employee name  */}
            <div className="mt-6">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Employee Name
              </label>
              <input
                defaultValue={data.name}
                disabled
                name="name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            {/* salary  */}
            <div className="mt-6">
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Salary
              </label>
              <input
                type="number"
                name="salary"
                required
                defaultValue={data.salary}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="flex gap-2 items-center">
              {/* date  */}
              <div className="mt-4 w-full ">
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="password"
                >
                  Month
                </label>
                <select
                  defaultValue=""
                  name="month"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option disabled value="">
                    Choose month
                  </option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
              </div>

              {/* year  */}
              <div className="mt-4">
                <label htmlFor="year">Year</label>
                <div className="w-full">
                  <DatePicker
                    required
                    className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    selected={showyear}
                    onChange={(date) => setYear(date)}
                    showYearPicker
                    dateFormat="yyyy"
                    placeholderText="Select a year"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="btn bg-green-600 text-white w-full ">
                {" "}
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
