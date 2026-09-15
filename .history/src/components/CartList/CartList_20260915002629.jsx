import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  {
    name: "BMW 5 Series",
    price: 120,
    image: whiteCar,
    badge: "Executive",
    detail: "Automatic • Leather seats",
    aosDelay: "0",
  },
  {
    name: "KIA Sportage",
    price: 95,
    image: car2,
    badge: "SUV",
    detail: "4x4 • Spacious cabin",
    aosDelay: "500",
  },
  {
    name: "Mercedes C-Class",
    price: 140,
    image: car3,
    badge: "Luxury",
    detail: "Premium comfort • Business ready",
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div id="cars" className="pb-24 pt-16">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Our fleet
          </p>
          <h2
            data-aos="fade-up"
            className="mt-4 text-3xl font-semibold font-serif sm:text-4xl"
          >
            Premium cars for every plan.
          </h2>
          <p data-aos="fade-up" data-aos-delay="400" className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Choose the right vehicle for business travel, family trips, or a polished city arrival.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {carList.map((data) => (
            <div
              key={data.name}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="group relative space-y-3 rounded-2xl border-2 border-gray-300 bg-white p-4 transition duration-300 hover:border-primary hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {data.badge}
                </span>
                <p className="text-sm font-medium text-slate-500">12 km</p>
              </div>

              <div className="h-[140px] w-full overflow-hidden rounded-xl bg-slate-50">
                <img
                  src={data.image}
                  alt={data.name}
                  className="h-[140px] w-full object-contain duration-700 group-hover:translate-x-3"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900">{data.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-300">{data.detail}</p>
                <div className="flex items-center justify-between text-xl font-semibold">
                  <p className="text-slate-900 dark:text-white">${data.price}/day</p>
                  <a href="#" className="text-sm text-primary hover:text-primary/80">
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid place-items-center">
          <button data-aos="fade-up" className="button-outline">
            View all cars
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;