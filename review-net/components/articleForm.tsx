import React from "react";
import { useRouter } from "next/router";
import { MdAddBox } from "react-icons/md";

export default function ArticleForm() {
  const baseURL = "http://127.0.0.1:8000/api/";
  // const baseURL = 'https://anshuman.pythonanywhere.com/api/';
  const url = baseURL + "articles/create/";

  const [authors, setAuthors] = React.useState([
    {
      userName: "",
      fullName: "",
      email: "",
    },
  ]);
  const [type, setType] = React.useState("op");

  const router = useRouter();

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submitting");
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(value.author);
    console.log(JSON.stringify(value));

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    router.push("/");
  };

  const typeData = {
    sb: {
      title: "Single blinded",
      content: "The Article(manuscript) is open to public review. But, reviewers' identities will be anonymous.",
    },
    db: {
      title: "Double blinded",
      content: "The Article(manuscript) is open to public review. But, reviewers' and authors' identities will be anonymous."
    },
    op: {
      title: "Open ",
      content: "The Article(manuscript) is open to public review. Your and reviewers' identities will be visible to each public. ",
    },
  };

  const addAuthor = () => {
    setAuthors([
      ...authors,
      {
        userName: "",
        fullName: "",
        email: "",
      },
    ]);
  };

  return (
    <div className="mx-14 max-w-6xl">
      <form onSubmit={(e) => submitForm(e)}>
        <div className="grid gap-6 mb-6 ">
          <div>
            <label
              htmlFor="title"
              className="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="id"
              className=" text-base mb-2 font-medium text-gray-900 dark:text-white flex flex-row"
            >
              Author(s)
              <MdAddBox
                className="h-7 w-7 mx-2 shadow-md fill-blue-500 active:shadow-none"
                onClick={addAuthor}
              />
            </label>
            {authors.map((author, index) => {
              return (
                <div className="grid gap-2 md:grid-cols-3" key={index}>
                  <div>
                    <label
                      htmlFor="userName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      User Id
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="author"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="tel"
                      id="fullName"
                      name="fullName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="keywords"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Keywords(separated with {'","'})
          </label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="tldr"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            TL;DR
          </label>
          <input
            type="text"
            id="tldr"
            name="tldr"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="articleUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            URL to article
          </label>
          <input
            type="url"
            id="articleUrl"
            name="articleUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="abstract"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Abstract
          </label>
          <textarea
            id="absctract"
            name="abstract"
            rows={4}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div className=" flex flex-row items-start space-x-5">
          <div className="max-w-xs">
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Article Submission Type
            </label>
            <select
              className="w-full p-2.5 text-gray-500 bg-gray-50 border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              onChange={(e) => {
                setType(e.target.value);
              }}
              name="type"
            >
              <option selected value={"op"}>
                Open
              </option>
              <option value={"sb"}>Single Blinded</option>
              <option value={"db"}>Double Blinded</option>
            </select>
          </div>

          {alertTypeData(typeData[type].title, typeData[type].content)}
        </div>
        <div className="flex items-start mb-6">
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
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const alertTypeData = (head, info) => {
  return (
    <>
      <div
        id="dropdown-cta"
        className="p-3 my-1 rounded-lg bg-blue-50 dark:bg-blue-900 max-w-xl"
        role="alert"
      >
        <div className="flex items-center mb-1">
          <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
            {head}
          </span>
        </div>
        <p className="mb-2 text-sm text-blue-800 dark:text-blue-400">{info}</p>
        <a
          className="text-sm text-blue-800 underline hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
          href="#"
        >
          Know more about {head}
        </a>
      </div>
    </>
  );
};
