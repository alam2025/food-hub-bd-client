import React from 'react';

const ArrowRigth = (props) => {
      const { onClick } = props;
      return (
            <button
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={onClick}
            >
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                  >
                        <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-5.293-5.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                        />
                  </svg>
            </button>
      );
};

export default ArrowRigth;