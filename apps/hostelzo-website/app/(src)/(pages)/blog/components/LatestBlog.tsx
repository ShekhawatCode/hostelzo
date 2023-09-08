import Image from 'next/image';

type Props = object;

const LatestBlog = (props: Props) => {
  return (
    <div className="flex items-center space-x-6 ">
      <div style={{ flex: '1' }}>
        <div className="relative">
          <Image
            src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/Llaes-Castle-Spain.jpeg?resize=1024%2C686"
            width={350}
            height={350}
            className="rounded-lg"
            alt="Picture of the blogs"
          />

          <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white">
            <span>10 min read</span>
          </div>
        </div>
      </div>
      <div style={{ flex: '2' }}>
        <p className="mt-2 text-2xl text-black font-sm">
          Governor Green and Airbnb.org announce housing support for Maui
        </p>
        <span className="text-sm text-gray">August 15, 2023</span>
      </div>
      <div style={{ flex: '1' }}>
        <div className="relative">
          <Image
            src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/Llaes-Castle-Spain.jpeg?resize=1024%2C686"
            width={550}
            height={550}
            className="rounded-lg"
            alt="Picture of the blogs"
          />

          <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white">
            <span>10 min read</span>
          </div>
        </div>
      </div>
      <div style={{ flex: '2' }}>
        <p className="mt-2 text-2xl text-black font-sm">
          Governor Green and Airbnb.org announce housing support for Maui
        </p>
        <span className="text-sm text-gray">August 15, 2023</span>
      </div>
    </div>
  );
};

export default LatestBlog;
