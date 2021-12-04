import { useForm } from "react-hook-form";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase-config/firebase-config";
import { useRouter } from "next/router";
const PaymentDetails = ({ data1, changeToggleEdit }: any) => {
  const router = useRouter();
  const docummentRef = doc(db, "paymentmethod", data1.id);
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
          <div className="w-11/12 p-12 bg-white ">
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
                    IBAN
                  </label>
                  <input
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("ibanid", {
                      required: "true",
                    })}
                  />
                  {errors.ibanid && (
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
                    BIC Kod
                  </label>
                  <input
                    placeholder="Image link"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("biccode", {
                      required: "true",
                    })}
                  />
                  {errors.biccode && (
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
                    BIC Adress
                  </label>
                  <input
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("biccodeadress", {
                      required: "true",
                    })}
                  />
                  {errors.biccodeadress && (
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
                    Payment Method 1 Name
                  </label>
                  <input
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("payment1name", {
                      required: "true",
                    })}
                  />
                  {errors.payment1name && (
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
                    Payment Method 1 Details
                  </label>
                  <input
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("payment1details", {
                      required: "true",
                    })}
                  />
                  {errors.payment1details && (
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
                    Payment Method 2 Name
                  </label>
                  <input
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("payment2name", {
                      required: "true",
                    })}
                  />
                  {errors.payment2name && (
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
                    Payment Method 2 Details
                  </label>
                  <input
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("payment3details", {
                      required: "true",
                    })}
                  />
                  {errors.payment3details && (
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
                    Payment Method 3 Name
                  </label>
                  <input
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("payment3name", {
                      required: "true",
                    })}
                  />
                  {errors.payment3name && (
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
                    Payment Method 3 Details
                  </label>
                  <input
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("payment3details", {
                      required: "true",
                    })}
                  />
                  {errors.payment3details && (
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
                    Payment Method 4 Name
                  </label>
                  <input
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("payment4name", {
                      required: "true",
                    })}
                  />
                  {errors.payment4name && (
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
                    Payment Method 4 Details
                  </label>
                  <input
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    {...register("payment4details", {
                      required: "true",
                    })}
                  />
                  {errors.payment4details && (
                    <span
                      role="alert"
                      className="text-red-600 font-bold text-sm"
                    >
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
      </div>
    </div>
  );
};

export default PaymentDetails;
