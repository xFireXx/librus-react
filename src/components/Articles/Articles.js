import React from 'react';

export default function Articles(props) {
  return (
    <>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <h2 className="text-2xl font-bold mb-12 text-center">
            {props.title}
          </h2>
          {props.children}       
        </section>
      </div>
    </>
  );
}
