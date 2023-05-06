import React from 'react';

export default function ArticlesLeft(props) {
  return (
    <>
      <div className="flex flex-wrap lg:flex-row-reverse mb-12">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
            style={{ backgroundPosition: '50%' }}
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/city/033.jpg"
              class="w-full"
              alt="Louvre"
            />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
              ></div>
            </a>
          </div>
        </div>

        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
          <h3 className="text-2xl font-bold mb-4">{props.name}</h3>
          <p className="text-gray-500">
            {props.text}
          </p>
        </div>
      </div>
    </>
  );
}
