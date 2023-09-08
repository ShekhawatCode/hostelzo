import React from 'react';
import SwiperCard from './SwiperCard';

type Props = object;

const SwiperBlog = (props: Props) => {
  return (
    <>
      <div className="px-20 pt-2 mt-20 bg-gray-light">
        <div className="my-20 ">
          <h1 className="text-4xl font-medium text-black">
            The economic opportunities of hosting
          </h1>
          <p className="w-1/2 mt-6 text-lg text-gray-dim">
            More people are turning to hosting for the first time. From
            community stories, to the latest Host earnings data and trends,
            discover how it has never been easier to host and earn on Airbnb.
          </p>
          <SwiperCard />
        </div>
      </div>
    </>
  );
};

export default SwiperBlog;
