import Image from 'next/image';
import LatestBlog from './components/LatestBlog';
import SwiperBlog from './components/SwiperBlog';
import FollowBlog from './components/FollowBlog';
import CategoryBlog from './components/CategoryBlog';
import Footer from './components/Footer';

type Props = object;

const page = (props: Props) => {
  return (
    <>
      <div className="px-20 my-40 ">
        <div className="flex items-center space-x-6">
          <div style={{ flex: '1' }}>
            <span className="text-sm text-gray">August 15, 2023</span>
            <p className="mt-2 text-5xl text-black font-sm">
              Governor Green and Airbnb.org announce housing support for Maui
            </p>
            <button className="px-8 py-3 mt-8 text-white border rounded-lg shadow-md bg-pink hover:shadow-xl active:scale-90">
              Read more
            </button>
          </div>

          <div style={{ flex: '2' }}>
            <div className="relative">
              <Image
                src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/08/GettyImages-1592922886-e1692118128880.jpg?zoom=3&resize=1100%2C725"
                width={1100}
                height={400}
                className="rounded-lg"
                alt="Picture of the blogs"
              />
              <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white rounded-md">
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </div>
        <h2 className="my-16 text-5xl font-semibold text-black">Latest Blog</h2>

        <LatestBlog />
        <div className="mt-12">
          <LatestBlog />
        </div>
      </div>
      <div className="mt-12">
        <SwiperBlog />
      </div>
      <div className="px-20 mt-12 ">
        <FollowBlog />
      </div>
      <div className="mt-12">
        <SwiperBlog />
      </div>

      <div className="px-20 mt-12 ">
        <CategoryBlog />
      </div>
      <div className="flex items-center px-20 mt-12 space-x-6">
        <div style={{ flex: '2' }}>
          <div className="relative">
            <Image
              src="https://news.airbnb.com/wp-content/uploads/sites/4/2023/09/Llaes-Castle-Spain.jpeg?resize=1024%2C686"
              width={900}
              height={400}
              className="rounded-lg"
              alt="Picture of the blogs"
            />

            <div className="absolute top-0 right-0 p-1 m-2 text-xs font-bold text-black bg-white">
              <span>10 min read</span>
            </div>
          </div>
        </div>
        <div style={{ flex: '1' }}>
          <span className="text-sm text-gray">August 15, 2023</span>
          <p className="mt-2 text-5xl text-black font-sm">
            Governor Green and Airbnb.org announce housing support for Maui
          </p>
          <button className="px-8 py-3 mt-8 text-white border rounded-lg shadow-md bg-pink hover:shadow-xl active:scale-90">
            Read more
          </button>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default page;
