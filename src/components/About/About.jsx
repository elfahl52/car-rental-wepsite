import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="bg-slate-100 duration-300 dark:bg-dark sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container py-16">
        <div className="grid grid-cols-1 place-items-center gap-12 sm:grid-cols-2">
          <div data-aos="slide-right" data-aos-duration="1500">
            <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] dark:bg-slate-900">
              <img
                src={CarPng}
                alt="Featured car"
                className="max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] sm:-translate-x-11 sm:scale-125"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="space-y-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                About us
              </p>
              <h2
                data-aos="fade-up"
                className="text-3xl font-bold font-serif sm:text-4xl"
              >
                Smart rental solutions for modern life.
              </h2>
              <p data-aos="fade-up" className="leading-8 tracking-wide text-slate-600 dark:text-slate-300">
                We bring together dependable vehicles, transparent pricing, and
                responsive service so every trip feels effortless from the first
                click to the final drop-off.
              </p>

              <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-up">
                <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-900">
                  <h3 className="text-lg font-semibold">Transparent pricing</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Clear rates with no hidden fees.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-900">
                  <h3 className="text-lg font-semibold">Flexible booking</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Daily, weekly, and long-term rentals.
                  </p>
                </div>
              </div>

              <button data-aos="fade-up" className="button-outline">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;