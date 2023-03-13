import React from "react";
import { AiFillBook,AiTwotoneStar } from "react-icons/ai";
import { IoMdQuote } from "react-icons/io";
import MessageComponent from "components/MessageComponent";

export default function ArticleView() {
  return (
    <div>
      <div className="max-w-6xl flex-1 mx-10 mt-10 border-b-2 border-gray-600 pb-10">
        <div className="text-3xl">
          Automated Anatomical Labeling of Activations in SPM Using a
          Macroscopic Anatomical Parcellation of the MNI MRI Single-Subject
          Brain
        </div>
        <p className="my-5 ">
          An anatomical parcellation of the spatially normalized single-subject
          high-resolution T1 volume provided by the Montreal Neurological
          Institute (MNI) (D. L. Collins et al., 1998, Trans. Med. Imag. 17,
          463-468) was performed. The MNI single-subject main sulci were first
          delineated and further used as landmarks for the 3D definition of 45
          anatomical volumes of interest (AVOI) in each hemisphere. This
          procedure was performed using a dedicated software which allowed a 3D
          following of the sulci course on the edited brain. Regions of interest
          were then drawn manually with the same software every 2 mm on the
          axial slices of the high-resolution MNI single subject. The 90 AVOI
          were reconstructed and assigned a label. ...
          <span className="text-blue-500 cursor-pointer">more</span>
        </p>
        <div className="flex flex-row justify-between mx-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-600 hover:text-white focus:z-10 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400"
            >
              <AiTwotoneStar className="w-4 h-4 mr-2 fill-current"/>
              Review
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 hover:bg-gray-600 hover:text-white focus:z-10 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400"
            >
              <IoMdQuote className="w-4 h-4 mr-2 fill-current"/>
              Cite
            </button>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-600 hover:text-white focus:z-10 dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-400"
            >
              <AiFillBook className="w-4 h-4 mr-2 fill-current"/>
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
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className="mx-10 text-2xl my-5">
          Discussions
        </div>
        <div className="bg-gray-50 mx-10 p-5 rounded-md max-w-6xl">
          <MessageComponent />
        </div>
      </div>
    </div>
  );
}
