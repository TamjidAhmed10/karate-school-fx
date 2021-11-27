import { useForm } from "react-hook-form";
import useStore from "../zust/zustfig";
const FormX = () => {
  const { setFormdata } = useStore();
  const { register, handleSubmit } = useForm();
  function getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  const onSubmit = (data: any) => {
    const age = getAge(data.birthDate);
    data["age"] = age.toString();
    data["submitDate"] = new Date().toLocaleDateString();

    setFormdata(data);
  };
  return (
    <section>
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div
          className="w-full p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
      px-6 py-10 sm:px-10 sm:py-6
      bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Membership Form
          </h2>
          <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Full Name"
              autoComplete="name"
              className="block w-full py-3 px-1 mt-2
              text-gray-800 appearance-none
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              {...register("fullName")}
              required
            />
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              type="email"
              placeholder="E-mail address"
              autoComplete="email"
              className="block w-full py-3 px-1 mt-2
              text-gray-800 appearance-none
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              {...register("emailAdress")}
              required
            />

            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Gender
            </label>
            <select
              className="select select-bordered w-full my-4 text-gray-400"
              {...register("gender")}
            >
              <option disabled={true} selected={true}>
                Choose your Gender
              </option>

              <option className="text-gray-500" value="Male">
                Male
              </option>
              <option className="text-gray-500" value="Female">
                Female
              </option>
              <option className="text-gray-500" value="Others">
                Others
              </option>
            </select>
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Karate Type
            </label>
            <select
              className="select select-bordered w-full my-4 text-gray-400"
              {...register("karateType")}
            >
              <option className="text-gray-500" value="karate">
                Karate
              </option>
              <option className="text-gray-500" value="bodyKarate">
                Body Karate
              </option>
            </select>
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Birthdate
            </label>
            <input
              type="date"
              className="block w-full py-3 px-1 mt-2 mb-4
              text-gray-800 appearance-none
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              {...register("birthDate")}
              required
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Telephone
            </label>
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              autoComplete="phone"
              className="block w-full py-3 px-1 mt-2 mb-4
              text-gray-800 appearance-none
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              {...register("telePhone")}
              required
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Postal Code
            </label>
            <input
              type="text"
              placeholder="Postel Code"
              autoComplete="postal-code"
              className="block w-full py-3 px-1 mt-2 mb-4
              text-gray-800 appearance-none
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              {...register("postalCode")}
              required
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Town
            </label>
            <input
              type="text"
              placeholder="Enter Your Town Name"
              autoComplete="town"
              className="block w-full py-3 px-1 mt-2 mb-4
              text-gray-800 appearance-none
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              {...register("town")}
              required
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Enter Your adress
            </label>
            <textarea
              placeholder="Enter Your Adress"
              autoComplete="street-address"
              className="block w-full py-3 px-1 mt-2 mb-4
              text-gray-800 appearance-none
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200"
              {...register("adress")}
              required
            />
            <button
              type="submit"
              className="w-full py-3 mt-10 bg-green-500 rounded-sm
              font-medium text-white uppercase
              focus:outline-none hover:bg-green-700 hover:shadow-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormX;
