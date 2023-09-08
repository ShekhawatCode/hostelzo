import Image from 'next/image';
import Header from '../blog/components/Header';

type Props = object;

const page = (props: Props) => {
  return (
    <div>
      {/* <Header /> */}
      <div className="relative">
        <Image
          src="https://blog.myntra.com/wp-content/uploads/2023/08/Rakhi_Outfit_Ideas_A_Guide_to_Dressing_Up_for_the_Festive_Occasion_Banne.-1.jpg"
          width={1100}
          height={400}
          className="w-full h-full rounded-lg"
          alt="Picture of the blogs"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black rounded-lg opacity-30"></div>
      </div>
      <div className="absolute top-0 bottom-0 w-full px-8 mt-96">
        <div className="px-8 pt-8 bg-white rounded-lg">
          <div className="flex justify-between">
            <div className="flex justify-center">
              <h1 className="w-1/2 text-5xl font-bold text-black">
                Rakhi Outfit Ideas: A Guide to Dressing Up for the Festive
                Occasion
              </h1>
            </div>
            <Image
              src="https://blog.myntra.com/wp-content/uploads/2023/08/Rakhi_Outfit_Ideas_A_Guide_to_Dressing_Up_for_the_Festive_Occasion_Banne.-1.jpg"
              width={1100}
              height={400}
              className="w-10 h-10 rounded-lg"
              alt="Picture of the blogs"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex mt-6 space-x-2">
              <h5 className="text-black text-md">By:</h5>
              <h5 className=" text-gray text-md">Son Singh shekhawat</h5>
              <span className="px-4 text-black">|</span>
              <div>
                <span className="px-2 py-1 text-sm text-center text-black rounded bg-gray-lighs">
                  10 min read
                </span>
              </div>
            </div>

            {/* here */}
            <div className="flex mt-6 space-x-2">
              <Image
                src="https://blog.myntra.com/wp-content/uploads/2023/08/Rakhi_Outfit_Ideas_A_Guide_to_Dressing_Up_for_the_Festive_Occasion_Banne.-1.jpg"
                width={1100}
                height={400}
                className="w-10 h-10 rounded-lg"
                alt="Picture of the blogs"
              />
              <Image
                src="https://blog.myntra.com/wp-content/uploads/2023/08/Rakhi_Outfit_Ideas_A_Guide_to_Dressing_Up_for_the_Festive_Occasion_Banne.-1.jpg"
                width={1100}
                height={400}
                className="w-10 h-10 rounded-lg"
                alt="Picture of the blogs"
              />
              <Image
                src="https://blog.myntra.com/wp-content/uploads/2023/08/Rakhi_Outfit_Ideas_A_Guide_to_Dressing_Up_for_the_Festive_Occasion_Banne.-1.jpg"
                width={1100}
                height={400}
                className="w-10 h-10 rounded-lg"
                alt="Picture of the blogs"
              />
            </div>
          </div>
          <div className="my-8 border bg-gray "></div>

          <div className="mt-8">
            <p className="text-black text-md">
              Have we not had at least one memorable experience with our cousins
              or siblings? Well, it wouldn’t be surprising if that
              cherish-worthy memory is from the auspicious day of Raksha
              Bandhan. This occasion is not just celebrated with gifts and
              feasts but also with dressing up in style. So allow us to help you
              with some traditional and glamorous Rakhi outfit ideas.
            </p>
            <h1 className="mt-8 text-xl font-semibold text-black">
              Discover Exciting Rakhi Dress Ideas with Myntras Collection
            </h1>
            <p className="text-gray text-md">
              Have we not had at least one memorable experience with our cousins
              or siblings? Well, it wouldn’t be surprising if that
              cherish-worthy memory is from the auspicious day of Raksha
              Bandhan. This occasion is not just celebrated with gifts and
              feasts but also with dressing up in style. So allow us to help you
              with some traditional and glamorous Rakhi outfit ideas.
            </p>
            <div className="mt-8">
              <Image
                src="https://blog.myntra.com/wp-content/uploads/2023/08/Kurta_Pajama_for_Classic_Elegance-1.jpg"
                width={1100}
                height={400}
                className="w-full h-full rounded-lg"
                alt="Picture of the blogs"
              />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-black text-md">
              Have we not had at least one memorable experience with our cousins
              or siblings? Well, it wouldn’t be surprising if that
              cherish-worthy memory is from the auspicious day of Raksha
              Bandhan. This occasion is not just celebrated with gifts and
              feasts but also with dressing up in style. So allow us to help you
              with some traditional and glamorous Rakhi outfit ideas.
            </p>
            <h1 className="mt-8 text-xl font-semibold text-black">
              Discover Exciting Rakhi Dress Ideas with Myntras Collection
            </h1>
            <p className="text-gray text-md">
              Have we not had at least one memorable experience with our cousins
              or siblings? Well, it wouldn’t be surprising if that
              cherish-worthy memory is from the auspicious day of Raksha
              Bandhan. This occasion is not just celebrated with gifts and
              feasts but also with dressing up in style. So allow us to help you
              with some traditional and glamorous Rakhi outfit ideas.
            </p>
            <div className="mt-8">
              <Image
                src="https://blog.myntra.com/wp-content/uploads/2023/08/Kurta_Pajama_for_Classic_Elegance-1.jpg"
                width={1100}
                height={400}
                className="w-full h-full rounded-lg"
                alt="Picture of the blogs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
