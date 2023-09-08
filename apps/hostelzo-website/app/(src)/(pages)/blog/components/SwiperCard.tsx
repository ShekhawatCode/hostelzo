import Image from 'next/image';
import page from '../page';

type Props = object;

const SwiperCard = (props: Props) => {
  return (
    <div className="flex my-8 space-x-10">
      <div className="border rounded-lg border-gray-lighs w-96 h-96">
        <div className="relative">
          <Image
            src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/Llaes-Castle-Spain.jpeg?resize=1024%2C686"
            width={500}
            height={500}
            className="rounded-lg"
            alt="Picture of the blogs"
          />

          <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white">
            <span>10 min read</span>
          </div>
        </div>
        <div className="px-4">
          <h1 className="mt-4 underline text-md">
            Chicago and Denver rank as top cities to start hosting in the US
          </h1>
          <p className="mt-4 text-sm underline text-gray">June 21, 2023</p>
        </div>
      </div>
      <div className="border rounded-lg border-gray-lighs w-96 h-96">
        <div className="relative">
          <Image
            src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/Llaes-Castle-Spain.jpeg?resize=1024%2C686"
            width={500}
            height={500}
            className="rounded-lg"
            alt="Picture of the blogs"
          />

          <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white">
            <span>10 min read</span>
          </div>
        </div>
        <div className="px-4">
          <h1 className="mt-4 underline text-md">
            Chicago and Denver rank as top cities to start hosting in the US
          </h1>
          <p className="mt-4 text-sm underline text-gray">June 21, 2023</p>
        </div>
      </div>
      <div className="border rounded-lg border-gray-lighs w-96 h-96">
        <div className="relative">
          <Image
            src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/Llaes-Castle-Spain.jpeg?resize=1024%2C686"
            width={500}
            height={500}
            className="rounded-lg"
            alt="Picture of the blogs"
          />

          <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white">
            <span>10 min read</span>
          </div>
        </div>
        <div className="px-4">
          <h1 className="mt-4 underline text-md">
            Chicago and Denver rank as top cities to start hosting in the US
          </h1>
          <p className="mt-4 text-sm underline text-gray">June 21, 2023</p>
        </div>
      </div>
    </div>
  );
};
export default SwiperCard;
