import Link from "next/link";
import React from "react";
import Router from "next/router";

export default function Card(props) {
  const { title, abstract, link, slug } = props;
  return (
    <div>
      <div className="border-2 border-gray-300 my-3 mx-5 max-w-6xl rounded-md">
        <div
          className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <h2
            className="mb-3 text-2xl font-extrabold tracking-tight hover:text-blue-700 text-gray-900 dark:text-white cursor-pointer"
            onClick={() => Router.push("/article/" + slug)}
          >
            {title}
          </h2>
          <div className="mb-2 text-gray-500 inline-block dark:text-gray-400 max-h-24 overflow-hidden">
              {abstract}...
          </div>
          <div>
          <Link
            href={link}
            className="inline-flex items-center bg-blue-100 p-1 rounded-md font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
          >
            Read now
            <svg
              className="w-6 h-6 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
