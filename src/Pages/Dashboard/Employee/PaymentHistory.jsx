import React from "react";

const PaymentHistory = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto  bg-white rounded-md shadow-md dark:bg-gray-800 p-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-blue-600 text-xl text-white ">
              <tr>
                <th>Month</th>
                <th>Amount</th>
                <th>Transaction Id.</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1
              {worksheet?.map((workData, idx) => (
                <tr key={workData._id}>
                  <th>{idx + 1}</th>
                  <td>{workData.task}</td>
                  <td>{workData.work}</td>
                  <td>{new Date(workData.date).toLocaleDateString()}</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
