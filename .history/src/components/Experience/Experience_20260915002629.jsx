const Experience = () => {
  const stats = [
    { value: "12+", label: "Years experience" },
    { value: "60+", label: "Happy clients" },
    { value: "120+", label: "Completed rides" },
    { value: "24/7", label: "Roadside support" },
  ];

  return (
    <div className="bg-slate-950 py-14 text-white dark:text-white">
      <div className="container">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold font-serif sm:text-4xl">
            Trusted by drivers who value reliability.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="grid place-items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="space-y-3">
                <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                <p className="text-sm text-slate-300">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;