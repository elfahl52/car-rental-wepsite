import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Best value",
    icon: (
      <FaCameraRetro className="text-5xl text-primary duration-300 group-hover:text-black" />
    ),
    link: "#",
    description: "Competitive daily rates and clear options for every budget.",
    aosDelay: "0",
  },
  {
    name: "Fast & safe",
    icon: (
      <GiNotebook className="text-5xl text-primary duration-300 group-hover:text-black" />
    ),
    link: "#",
    description: "Well-maintained vehicles, verified drivers, and secure service.",
    aosDelay: "500",
  },
  {
    name: "Expert support",
    icon: (
      <SlNote className="text-5xl text-primary duration-300 group-hover:text-black" />
    ),
    link: "#",
    description: "Friendly assistance before, during, and after every booking.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Why choose us
            </p>
            <h2
              data-aos="fade-up"
              className="mt-4 text-3xl font-semibold font-serif sm:text-4xl"
            >
              Everything you need for a smooth ride.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="group rounded-lg bg-dark p-4 text-center text-white transition duration-300 hover:bg-primary hover:text-black sm:space-y-6 sm:p-8"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h3 className="text-2xl font-bold">{skill.name}</h3>
                <p className="mt-3 text-sm text-slate-300 group-hover:text-slate-800">
                  {skill.description}
                </p>
                <a
                  href={skill.link}
                  className="mt-4 inline-block text-lg font-semibold text-primary duration-300 group-hover:text-black"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;