import React from "react";
import { AiFillStar } from "react-icons/ai";

type Props = {};

export default function MessageComponent({}: Props) {
  return (
    <div>
      <article>
        <div className="flex items-center mb-4 space-x-4">
          <div className="space-y-1 font-medium dark:text-white">
            <p className="text-gray-400">
              Anonymous{" "}
              <span className="block text-sm text-gray-500 dark:text-gray-400">
                on 19 August 2023
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center mb-1 text-sm">
          <AiFillStar className="w-5 h-5 text-yellow-400" />
          <AiFillStar className="w-5 h-5 text-yellow-400" />
          <AiFillStar className="w-5 h-5 text-yellow-400" />
            <p className="px-3">Rated </p>
          {/* <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
            Thinking to buy another one!
          </h3> */}
        </div>
        <p className="my-2 font-light text-gray-600 text-sm">
          A more thorough investigation of the tradeoff between performance and
          additional levels of conservatism would be helpful. As stated above,
          as we make the behavior more conservative, we would expect some
          tradeoff with a decrease in performance in other aspects, but this is
          not investigated at all. I believe it is important that an experiment
          exploring this aspect, and comparing to the performance of (Fatemi et
          al., 2021), is included.
        </p>
        <p className="mb-3 font-light text-gray-600 text-sm">
          The approach proposed in this work estimates an entire distribution
          rather than just the mean, as is done in (Fatemi et al., 2021). One
          would expect this to lead to a degradation in performance in low data
          regimes, as it is more difficult to estimate an entire distribution
          than just the mean. This should be investigated more thoroughly with
          an experiment in the low-data regime, showing what the loss in
          performance is.
        </p>
        <a
          href="#"
          className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Read more
        </a>
        <aside>
          {/* <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            19 people found this helpful
          </p> */}
          <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a
              href="#"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Comment
            </a>
            <a
              href="#"
              className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Report abuse
            </a>
          </div>
        </aside>
      </article>
    </div>
  );
}
