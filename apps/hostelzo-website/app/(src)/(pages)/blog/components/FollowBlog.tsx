import Image from 'next/image';

type Props = object;

const FollowBlog = (props: Props) => {
  return (
    <div className="flex space-x-32">
      <div className="flex items-center">
        <div className="flex flex-col ">
          <h1 className="w-56 mt-4 text-3xl font-semibold text-black text-md">
            Chicago and Denver rank as top cities to start hosting in the US
          </h1>
          <div className="flex items-center mt-6 space-x-6">
            <Image
              src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/08/GettyImages-1592922886-e1692118128880.jpg?zoom=3&resize=1100%2C725"
              width={50}
              height={50}
              className="rounded-lg"
              alt="Picture of the blogs"
            />
            <Image
              src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/08/GettyImages-1592922886-e1692118128880.jpg?zoom=3&resize=1100%2C725"
              width={50}
              height={50}
              alt="Picture of the blogs"
            />
            <Image
              src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/08/GettyImages-1592922886-e1692118128880.jpg?zoom=3&resize=1100%2C725"
              width={50}
              height={50}
              className="rounded-lg"
              alt="Picture of the blogs"
            />
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/Llaes-Castle-Spain.jpeg?resize=1024%2C686"
            width={450}
            height={400}
            className="rounded-lg"
            alt="Picture of the blogs"
          />
          <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white">
            <span>10 min read</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <Image
            src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/Llaes-Castle-Spain.jpeg?resize=1024%2C686"
            width={450}
            height={400}
            className="rounded-lg"
            alt="Picture of the blogs"
          />
          <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white">
            <span>10 min read</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="w-56 mt-4 text-3xl font-semibold text-black text-md">
            Chicago and Denver rank as top cities to start hosting in the US
          </h1>
          <div className="flex items-center mt-6 space-x-6">
            <Image
              src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/08/GettyImages-1592922886-e1692118128880.jpg?zoom=3&resize=1100%2C725"
              width={50}
              height={50}
              className="rounded-lg"
              alt="Picture of the blogs"
            />
            <Image
              src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/08/GettyImages-1592922886-e1692118128880.jpg?zoom=3&resize=1100%2C725"
              width={50}
              height={50}
              alt="Picture of the blogs"
            />
            <Image
              src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/08/GettyImages-1592922886-e1692118128880.jpg?zoom=3&resize=1100%2C725"
              width={50}
              height={50}
              className="rounded-lg"
              alt="Picture of the blogs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowBlog;
