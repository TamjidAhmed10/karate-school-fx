import { useForm } from "react-hook-form";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config/firebase-config";
import { useRouter } from "next/router";
const ClassTimeForm = ({ data1, changeToggleEdit }: any) => {
  const router = useRouter();
  const docummentRef = doc(db, "classtimes", data1.id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: data1,
  });
  const onSubmit = async (data: any) => {
    await updateDoc(docummentRef, data).then(() => {
      router.replace(router.asPath);
      reset();
      changeToggleEdit(false);
    });
  };
  return (
    <div>
      <div className="grid place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            Hello there 👋,
            <span className="font-normal">
              please fill in New Item to continue
            </span>
          </h1>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  First Semester Name (spring)
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("springclass", {
                    required: "true",
                  })}
                />
                {errors.springclass && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>
            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  First Semester Name Days
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("springdays", {
                    required: "true",
                  })}
                />
                {errors.springdays && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>
            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Non Experience Time
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("springnoobtime", {
                    required: "true",
                  })}
                />
                {errors.springnoobtime && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>
            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Experience Time
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("springprotime", {
                    required: "true",
                  })}
                />
                {errors.springprotime && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>
            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  4-25 Age Fee
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("springfeechild", {
                    required: "true",
                  })}
                />
                {errors.springfeechild && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>
            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  4-25 Age Fee
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("springfeechild", {
                    required: "true",
                  })}
                />
                {errors.springfeechild && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>
            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  25 Above Age Fee
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("springfeeadult", {
                    required: "true",
                  })}
                />
                {errors.springfeeadult && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>

            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Second Semester Name (Autumn)
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("autumnclass", {
                    required: "true",
                  })}
                />
                {errors.autumnclass && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>
            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Second Semester Name Days
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("autumndays", {
                    required: "true",
                  })}
                />
                {errors.autumndays && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>

            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Non Experience Time
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("autumnnoobtime", {
                    required: "true",
                  })}
                />
                {errors.autumnnoobtime && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>

            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Experience Time (2nd sem)
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("autumnprotime", {
                    required: "true",
                  })}
                />
                {errors.autumnprotime && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>
            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  4-25 Age Fee
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("autumnfeechild", {
                    required: "true",
                  })}
                />
                {errors.autumnfeechild && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>

            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  25 Above Age Fee
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("autumnfeeadult", {
                    required: "true",
                  })}
                />
                {errors.autumnfeeadult && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>

            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Body Karate Day
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("bodyclass", {
                    required: "true",
                  })}
                />
                {errors.bodyclass && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>

            <div className="mt-4">
              <span className="w-full">
                <label
                  htmlFor="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Body Karate Times
                </label>
                <input
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  {...register("bodyclasstimes", {
                    required: "true",
                  })}
                />
                {errors.bodyclasstimes && (
                  <span role="alert" className="text-red-600 font-bold text-sm">
                    This Cant be Empty
                  </span>
                )}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              UpDate
            </button>
            <button
              onClick={() => {
                changeToggleEdit(false);
              }}
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              close
            </button>
          </form>
        </div>
      </div>
      ;
    </div>
  );
};

export default ClassTimeForm;
