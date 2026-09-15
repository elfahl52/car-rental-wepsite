import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";

const Hero = ({ theme }) => {
  return (
    <div className="relative overflow-hidden bg-slate-50 duration-300 dark:bg-slate-950 dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(246,160,26,0.18),_transparent_55%)]" />
      <div className="container relative min-h-[620px] py-16">
        <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt="Luxury rental car"
              className="relative max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] sm:scale-125"
            />
          </div>

          <div className="order-2 space-y-6 sm:order-1 sm:pr-20">
            <p data-aos="fade-up" className="text-2xl font-serif text-primary">
              Premium mobility
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl font-semibold font-serif text-slate-900 dark:text-white lg:text-7xl"
            >
              Book a better drive.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300"
            >
              Discover premium rental cars for business trips, weekend escapes,
              and everyday comfort — all with a seamless booking experience.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="1500"
              className="flex flex-wrap items-center gap-4"
            >
              <button className="rounded-md bg-primary px-6 py-3 text-base font-medium text-black transition duration-500 hover:bg-primary/80">
                Reserve now
              </button>
              <a href="#cars" className="button-outline">
                Explore fleet
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-4 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <span className="block text-2xl font-bold text-slate-900 dark:text-white">
                  4.9/5
                </span>
                Guest rating
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900 dark:text-white">
                  1200+
                </span>
                Happy rides
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900 dark:text-white">
                  24/7
                </span>
                Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;