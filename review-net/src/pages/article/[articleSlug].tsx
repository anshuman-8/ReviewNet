"use client";

import React from "react";
import { useRouter } from "next/router";
import { AiFillBook, AiTwotoneStar } from "react-icons/ai";
import { IoMdQuote } from "react-icons/io";
import MessageComponent from "components/MessageComponent";
import CommentModal from "components/CommentModal";

export default function ArticleView() {
  const [title, setTitle] = React.useState("");
  const [abstract, setAbstract] = React.useState("");
  const [articleType, setArticleType] = React.useState("");

  // get slig value from next router
  const router = useRouter();
  const { articleSlug } = router.query;
  console.log(articleSlug);

  // const baseURL = "http://127.0.0.1:8000/api/";
  const baseURL = 'https://anshuman.pythonanywhere.com/api/';
  const url = baseURL + "articles/" + articleSlug + "/";

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
      setTitle(data.title);
      setAbstract(data.abstract);
      setArticleType(data.type);
    })
    .catch((err) => console.log(err));

    const typeData = {
      "sb":  "Single blinded",
      "db": "Double blinded",
      "op": "Open ",
    };

  return (
    <div>
      <div className="max-w-6xl flex-1 mx-10 mt-10 border-b-2 border-gray-600 pb-10">
        <span className="my-2 p-2 rounded-md bg-blue-100">{typeData[articleType]}</span>
        <div className="text-3xl mt-2">
          {title}
        </div>
        <p className="my-5 max-h-36 overflow-hidden">
          {abstract}...
        </p>
          {/* <span className="text-blue-500 cursor-pointer">more</span> */}
        <div className="flex flex-row justify-between mx-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <CommentModal />
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-600 hover:text-white focus:z-10 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400"
            >
              <IoMdQuote className="w-4 h-4 mr-2 fill-current" />
              Cite
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-600 hover:text-white focus:z-10 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400"
            >
              <AiFillBook className="w-4 h-4 mr-2 fill-current" />
              Bookmark
            </button>
          </div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read now
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className="mx-10 text-2xl my-5">Discussions</div>
        <div className="bg-gray-50 mx-10 p-5 rounded-md max-w-6xl">
          <MessageComponent />
        </div>
      </div>
    </div>
  );
}
