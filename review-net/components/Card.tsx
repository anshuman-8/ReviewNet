import Link from "next/link";
import React from "react";

export default function Card() {
  return (
    <div className="border-2 border-gray-300 my-3 mx-5 max-w-7xl rounded-md">
      <div
        className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Automated Anatomical Labeling of Activations in SPM Using a
          Macroscopic Anatomical Parcellation of the MNI MRI Single-Subject
          Brain
        </h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400">
          An anatomical parcellation of the spatially normalized single-subject
          high-resolution T1 volume provided by the Montreal Neurological
          Institute (MNI) (D. L. Collins et al., 1998, Trans. Med. Imag. 17,
          463-468) was performed. The MNI single-subject main sulci were first
          delineated and further used as landmarks for the 3D definition of 45
          anatomical volumes of interest (AVOI) in each hemisphere...
        </p>
        <Link
          href="https://www.sciencedirect.com/science/article/abs/pii/S1053811901909784?dgcid=api_sd_search-api-endpoint"
          className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
        >
          Read now
          <svg
            className="w-6 h-6 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
