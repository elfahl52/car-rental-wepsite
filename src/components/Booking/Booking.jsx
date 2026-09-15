import { useState } from "react";

const initialBooking = {
  pickup: "",
  dropoff: "",
  pickupDate: "",
  returnDate: "",
  carType: "",
};

function Booking() {
  const [booking, setBooking] = useState(initialBooking);
  const [submitted, setSubmitted] = useState(false);

  const updateBooking = (event) => {
    const { name, value } = event.target;
    setBooking((currentBooking) => ({ ...currentBooking, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-slate-50 py-16 dark:bg-slate-950">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Reserve your ride
            </p>
            <h1 className="mt-4 text-4xl font-semibold font-serif sm:text-5xl">
              Plan a better drive.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-300">
              Tell us when and where you need a car, and we will prepare the right option for your trip.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6 rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900 sm:grid-cols-2 sm:p-10">
            <label className="grid gap-2 text-sm font-semibold">
              Pick-up location
              <input required name="pickup" value={booking.pickup} onChange={updateBooking} placeholder="City or airport" className="rounded-md border border-slate-300 bg-transparent px-4 py-3 font-normal outline-none transition focus:border-primary dark:border-slate-700" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Drop-off location
              <input required name="dropoff" value={booking.dropoff} onChange={updateBooking} placeholder="City or airport" className="rounded-md border border-slate-300 bg-transparent px-4 py-3 font-normal outline-none transition focus:border-primary dark:border-slate-700" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Pick-up date
              <input required type="date" name="pickupDate" value={booking.pickupDate} onChange={updateBooking} className="rounded-md border border-slate-300 bg-transparent px-4 py-3 font-normal outline-none transition focus:border-primary dark:border-slate-700" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Return date
              <input required type="date" name="returnDate" value={booking.returnDate} onChange={updateBooking} className="rounded-md border border-slate-300 bg-transparent px-4 py-3 font-normal outline-none transition focus:border-primary dark:border-slate-700" />
            </label>
            <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
              Vehicle type
              <select required name="carType" value={booking.carType} onChange={updateBooking} className="rounded-md border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-primary dark:border-slate-700 dark:bg-slate-900">
                <option value="">Choose a vehicle</option>
                <option value="executive">Executive</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury</option>
              </select>
            </label>
            <button type="submit" className="rounded-md bg-primary px-6 py-3 font-semibold text-black transition hover:bg-primary/80 sm:col-span-2">
              Check availability
            </button>
            {submitted && (
              <p role="status" className="text-center text-sm font-medium text-green-600 sm:col-span-2">
                Thanks. Your booking request is ready for confirmation.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default Booking;