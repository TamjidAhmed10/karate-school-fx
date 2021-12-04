import { useForm } from "react-hook-form";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config/firebase-config";
import { useRouter } from "next/router";
const LogoEditForm = ({ data1, changeToggleEdit }: any) => {
  const router = useRouter();
  const docummentRef = doc(db, "logos-associated", data1.id);
  interface FormData {
    logoname: string;
    organizationname: string;
    organizationlink: string;
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: data1,
  });

  const onSubmit = async (data: any) => {
    console.log(data);
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
          <div className="w-11/12 p-12 bg-white   ">
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
                    Logo Image Adress
                  </label>
                  <input
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("logoname", {
                      required: "true",
                      pattern: {
                        value: /https?:\/\/.*/,
                        message: "Entered value does not match link format",
                      },
                    })}
                  />
                  {errors.logoname && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      {errors.logoname.message}
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
                    Organization Website
                  </label>
                  <input
                    placeholder="Organization Website Link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("organizationlink", {
                      pattern: {
                        value: /https?:\/\/.*/,
                        message: "Entered value does not match link format",
                      },
                    })}
                  />
                  {errors.organizationlink && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      {errors.organizationlink.message}
                    </span>
                  )}
                </span>
              </div>
              <div className="mt-4">
                <span className="w-full">
                  <label className="block text-xs font-semibold text-gray-600 uppercase">
                    Associate Organization Name
                  </label>
                  <input
                    placeholder="Organization Name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("organizationname")}
                  />
                  {errors.organizationlink && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      {errors.organizationlink.message}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoEditForm;
