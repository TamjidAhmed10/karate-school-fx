import { useForm } from "react-hook-form";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config/firebase-config";
import { useRouter } from "next/router";
const ProfessionalForm = ({ data1, changeToggleEdit }: any) => {
  const router = useRouter();
  const docummentRef = doc(db, "lsskdetails", data1.id);
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
                    Name
                  </label>
                  <input
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("name", {
                      required: "true",
                    })}
                  />
                  {errors.name && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
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
                    Image Adress
                  </label>
                  <input
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("imagelink", {
                      required: "true",
                      pattern: {
                        value: /https?:\/\/.*/,
                        message: "Entered value does not match link format",
                      },
                    })}
                  />
                  {errors.imagelink && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      {errors.imagelink.message}
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
                    Role
                  </label>
                  <textarea
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("role", {
                      required: "true",
                    })}
                  />
                  {errors.role && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      This cant be empty
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
                    Details
                  </label>
                  <textarea
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("details", {
                      required: "true",
                    })}
                  />
                  {errors.details && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      This cant be empty
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
                    Facebook Link
                  </label>
                  <input
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("facebooklink", {
                      required: "true",
                      pattern: {
                        value: /https?:\/\/.*/,
                        message: "Entered value does not match link format",
                      },
                    })}
                  />
                  {errors.facebooklink && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      {errors.facebooklink.message}
                    </span>
                  )}
                </span>
              </div>
              <div className="mt-4">
                <span className="w-full">
                  <label className="block text-xs font-semibold text-gray-600 uppercase">
                    Twitter Link
                  </label>
                  <input
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("twitterlink", {
                      required: "true",
                      pattern: {
                        value: /https?:\/\/.*/,
                        message: "Entered value does not match link format",
                      },
                    })}
                  />
                  {errors.twitterlink && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      {errors.twitterlink.message}
                    </span>
                  )}
                </span>
              </div>
              <div className="mt-4">
                <span className="w-full">
                  <label className="block text-xs font-semibold text-gray-600 uppercase">
                    Linked In Link
                  </label>
                  <input
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("linkedinlink", {
                      required: "true",
                      pattern: {
                        value: /https?:\/\/.*/,
                        message: "Entered value does not match link format",
                      },
                    })}
                  />
                  {errors.linkedinlink && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      {errors.linkedinlink.message}
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
      </div>
    </div>
  );
};

export default ProfessionalForm;
