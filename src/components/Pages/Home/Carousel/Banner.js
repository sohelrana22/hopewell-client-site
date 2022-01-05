import React from "react";
import slider_1 from "../../../../assets/images/slider_1.jpg";
import slider_2 from "../../../../assets/images/slider_2.jpg";
import slider_3 from "../../../../assets/images/slider_3.jpg";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade relative border-b-4 border-cyan-500"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src={slider_1}
              className="block w-full carousel-height blur-sm"
              alt="..."
            />
            <div className="carousel-caption md:block absolute text-center">
              <div>
                <h5 className="text-xl text-cyan-500">Advanced Technologies</h5>
                <p className="leading-relaxed text-base text-gray-800">
                  We are using the most advanced and smart Technologies to treat
                  your diseases in a best way
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={slider_2}
              className="block w-full carousel-height blur-sm"
              alt="..."
            />
            <div className="carousel-caption md:block absolute text-center">
              <h5 className="text-xl text-cyan-500">24/7 Support</h5>
              <p className="leading-relaxed text-base text-gray-800">
                We can assured you that we are available at any time at you
                service. Our patients is the most important for us nothing else.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={slider_3}
              className="block w-full carousel-height blur-sm"
              alt="..."
            />
            <div className="carousel-caption md:block absolute text-center">
              <h5 className="text-xl font-semibold text-cyan-500">
                Specialist
              </h5>
              <p className="leading-relaxed text-base text-gray-800">
                As a reputed hospital, We have almost all kind of specialist for
                any diseases of any kind of pain of you. We are hired the top
                best specialist for each and every sector of human diseases. So
                you can rely on us.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon hover:bg-gray-800 rounded-full inline-block bg-no-repeat transition duration-150 ease-in-out"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon hover:bg-gray-800 rounded-full inline-block bg-no-repeat transition duration-150 ease-in-out"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
