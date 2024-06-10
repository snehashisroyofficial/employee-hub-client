import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { IoMdClose } from "react-icons/io";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
const Modal = ({ data, onClose }) => {
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [showyear, setYear] = useState(null);
  const [error, setError] = useState("");
  const modalRef = useRef();
  const [totalPrice, setPrice] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (totalPrice) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [totalPrice, axiosSecure]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      console.log("payment error", error);
    } else {
      setError("");
      console.log("payment method", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: cardConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: data.email,
            name: data.name,
          },
        },
      });

    if (cardConfirmError) {
      console.log("confirm error", cardConfirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const form = e.target;
        const name = form.name.value;
        const userId = data._id;
        const monthlySalary = data.salary;
        const email = data.email;
        const salary = totalPrice;
        const month = form.month.value;
        const year = showyear;
        const transactionID = paymentIntent.id;

        const formData = {
          name,
          userId,
          monthlySalary,
          email,
          salary,
          month,
          year,
          transactionID,
        };
        console.log(formData);
        axiosSecure
          .post("/salary-sheet", formData)
          .then(() => {
            setTransactionId("");
            Swal.fire({
              icon: "success",
              title: "Payment Successfull",
              showConfirmButton: false,
              timer: 1500,
            });
            onClose();
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: `${error.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    }
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
                onBlur={(e) => setPrice(e.target.value)}
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

            {/* payment  */}
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />

            <div className="mt-6">
              <button
                // disabled={!stripe || !clientSecret}
                className="btn bg-green-600 text-white w-full "
              >
                {" "}
                Pay
              </button>
            </div>
            <p className="text-red-600">{error}</p>
            {transactionId && (
              <p className="text-green-600 text-center my-6">
                Payment Successfull
              </p>
            )}
          </form>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
