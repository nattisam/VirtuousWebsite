import aboutus1 from "../assets/about-us-1.jpg";
import aboutus2 from "../assets/about-us-2.jpg";
import aboutus3 from "../assets/about-us-3.jpg";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="px-14 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={aboutus1}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={aboutus2}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={aboutus3}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block text-lg mx-auto text-center text-yellow-600 font-semibold text-primary">
                  About Us
                </span>
                <h2 className="mb-5 mx-auto text-center text-xl font-bold sm:text-[20px]/[48px]">
                Virtuous Promotions: Redefining Marketing Excellence
                </h2>
                <p className="mb-8 text-gray-500 text-body-color text-center ">
                Welcome to Virtuous Promotions, your gateway to dynamic marketing solutions! 
                Founded with a vision to revolutionize promotional strategies, we specialize 
                in showcasing exciting products and properties from our prestigious partners. 
                With a focus on innovation, integrity, and excellence, we connect brands with 
                audiences, driving sales and fostering lasting connections. Our diverse portfolio 
                spans across various sectors, including company products, real estate, vehicles, 
                and more. Committed to delivering unparalleled results, we leverage our extensive 
                network and expertise to create impactful campaigns and deliver tangible outcomes. 
                Join us on this journey as we redefine the future of marketing together. Discover 
                the power of promotion with Virtuous Promotions today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
