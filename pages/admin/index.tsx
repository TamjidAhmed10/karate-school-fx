import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { app } from "../../firebase-config/firebase-config";
const Index = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [checkSignedIn, setCheckSignedIn]: any = useState("");
  const auth = getAuth(app);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log("Wrong Authentication" + error);
      });
  };
  useEffect(() => {
    setIsLoading(true);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCheckSignedIn(user);
        router.push("admin/dashboard");
        console.log("user", user);
      } else {
        setCheckSignedIn("");
        console.log("not signed in");
      }
      setIsLoading(false);
    });
  }, [auth]);

  return (
    <div>
      {isLoading ? (
        <>
          <div className=" flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="p-10 card bg-base-200 w-96">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-xl">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email Adress"
                  className="input input-info input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input input-info input-bordered"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="form-control mt-5">
                <button className="btn btn-active w-24" type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
