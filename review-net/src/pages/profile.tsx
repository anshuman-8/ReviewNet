import React from "react";

export default function Profile() {
  return (
    <div className="m-10">
      <div className="flex flex-row">
        <img
          className="rounded w-36 h-36"
          src="https://avatars.githubusercontent.com/u/90995338?v=4"
          alt="Extra large avatar"
        />
        <div className="m-3">
          <p className="text-2xl">Anshuman Swain</p>
          <span>~Anshuman_Swain</span>
        </div>
      </div>
      <div className="flex items-start my-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Make username visible to all.
        </label>
      </div>
    </div>
  );
}
