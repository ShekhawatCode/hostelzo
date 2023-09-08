import Image from 'next/image';

type Props = object;

const CategoryCard = (props: Props) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="w-96">
        <div className="relative">
          <Image
            src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/Llaes-Castle-Spain.jpeg?resize=1024%2C686"
            width={400}
            height={400}
            className="rounded-lg"
            alt="Picture of the blogs"
          />
          <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white">
            <span>10 min read</span>
          </div>
        </div>
        <h5 className="mt-4 text-lg font-semibold text-black">
          Airbnb.org, alice + olivia and Lele Pons partner for World
          Humanitarian Day
        </h5>
        <p className="mb-2 text-sm text-gray">August 18, 2023</p>
      </div>
      <div className="w-96">
        <div className="relative">
          <Image
            src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/Llaes-Castle-Spain.jpeg?resize=1024%2C686"
            width={400}
            height={400}
            className="rounded-lg"
            alt="Picture of the blogs"
          />
          <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white">
            <span>10 min read</span>
          </div>
        </div>
        <h5 className="mt-4 text-lg font-semibold text-black">
          Airbnb.org, alice + olivia and Lele Pons partner for World
          Humanitarian Day
        </h5>
        <p className="mb-2 text-sm text-gray">August 18, 2023</p>
      </div>
    </div>
  );
};

export default CategoryCard;
