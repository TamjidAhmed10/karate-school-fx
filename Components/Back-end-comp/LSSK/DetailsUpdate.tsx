import { useForm } from "react-hook-form";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config/firebase-config";
import { useRouter } from "next/router";
const DetailsUpdate = ({ data1, changeToggleEdit }: any) => {
  const router = useRouter();
  //refing the id
  const docummentRef = doc(db, "lsskdetails", data1.id);
  //types of formdata
  interface FormData {
    heading1: string;
    heading2: string;
    heading3: string;
    img1: string;
    img2: string;
    img3: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  }
  // using of form
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
                    Heading 1
                  </label>
                  <input
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("heading1", {
                      required: "true",
                    })}
                  />
                  {errors.heading1 && (
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
                    {...register("img1", {
                      required: "true",
                      pattern: {
                        value: /https?:\/\/.*/,
                        message: "Entered value does not match link format",
                      },
                    })}
                  />
                  {errors.img1 && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      {errors.img1.message}
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
                    Pragraph no 1
                  </label>
                  <textarea
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("paragraph1", {
                      required: "true",
                    })}
                  />
                  {errors.paragraph1 && (
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
                    Heading 2
                  </label>
                  <input
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("heading2", {
                      required: "true",
                    })}
                  />
                  {errors.heading2 && (
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
                    Image Link 2
                  </label>
                  <input
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("img2", {
                      required: "true",
                      pattern: {
                        value: /https?:\/\/.*/,
                        message: "Entered value does not match link format",
                      },
                    })}
                  />
                  {errors.img2 && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      {errors.img2.message}
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
                    Logo Image Adress
                  </label>
                  <textarea
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("paragraph2", {
                      required: "true",
                    })}
                  />
                  {errors.paragraph2 && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      This Field cant not be Empty
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
                    Logo Image Adress
                  </label>
                  <input
                    placeholder="Heading 3"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("heading3", {
                      required: "true",
                    })}
                  />
                  {errors.heading3 && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      This Place Cant Be empty
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
                    Image Adress 3
                  </label>
                  <input
                    placeholder="Heading 3"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("img3", {
                      required: "true",
                      pattern: {
                        value: /https?:\/\/.*/,
                        message: "Entered value does not match link format",
                      },
                    })}
                  />
                  {errors.img3 && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      {errors.img3.message}
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
                    Paragraph No 3
                  </label>
                  <textarea
                    placeholder="Heading 3"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("paragraph3", {
                      required: "true",
                    })}
                  />
                  {errors.paragraph3 && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
                      This Place Cant Be empty
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

export default DetailsUpdate;
