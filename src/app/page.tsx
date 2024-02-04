import React from "react"

export default function page() {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen bg-purple-700 p-5">
        {/* <!-- Sidebar & Header Placeholder --> */}
        <div className="text-white">Sidebar & Header Placeholder</div>

        {/* <!-- Main Content --> */}
        <div className="bg-white m-5 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-5">Leave Management</h2>

          {/* <!-- Tabs --> */}
          <div className="mb-5 flex space-x-4">
            <button className="bg-purple-500 text-white px-4 py-2 rounded">
              Leave Requests
            </button>
            <button className="text-purple-500 px-4 py-2 rounded">
              Leave Balances
            </button>
            <button className="text-purple-500 px-4 py-2 rounded">
              Leave Calendar
            </button>
          </div>

          {/* <!-- Actions --> */}
          <div className="flex justify-between items-center mb-5">
            <div className="space-x-2">
              <button className="bg-purple-500 text-white px-4 py-2 rounded">
                Approve Selected
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Decline Selected
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                + Add New Leave Request
              </button>
            </div>
            <div>
              <input
                className="border-2 border-gray-300 p-2 rounded"
                placeholder="Status: Pending"
              />
            </div>
          </div>

          {/* <!-- Table --> */}
          <div className="responsive-table">
            <table className="min-w-full">
              <thead>
                <tr className="bg-purple-100">
                  <th className="px-6 py-3 text-left">Personnel</th>
                  <th className="px-6 py-3 text-left">Leave Type</th>
                  <th className="px-6 py-3 text-left">Dates Requested</th>
                  <th className="px-6 py-3 text-left">Duration</th>
                  <th className="px-6 py-3 text-left">Clashes</th>
                  <th className="px-6 py-3 text-left">
                    Remaining (If Approved)
                  </th>
                  <th className="px-6 py-3 text-left">Info</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr>
                  <td className="px-6 py-4">Marie Curie</td>
                  <td className="px-6 py-4">Annual Leave</td>
                  <td className="px-6 py-4">04 Dec 2023 - 22 Dec 2023</td>
                  <td className="px-6 py-4">15 days</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center">
                      <span className="h-4 w-4 bg-purple-500 rounded-full mr-2"></span>{" "}
                      1
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <i className="fas fa-info-circle"></i>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-yellow-500 text-white px-4 py-1 rounded-full">
                      PENDING
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded hover:bg-gray-300">
                      Actions
                    </button>
                  </td>
                </tr>
                {/* <!-- Repeat for each row --> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
