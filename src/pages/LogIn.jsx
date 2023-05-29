import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await loginUser({ email, password });

    localStorage.setItem("Loggedin", true);
    return redirect("/host");
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  const errorMessage = useActionData();
  const navigation = useNavigation;
  const message = useLoaderData();

  return (
    <div className="py-[51px] px-[27px] bg-[#FFF7ED] h-[600px]">
      <h1 className="text-[32px] font-bold leading-6 text-center ">
        Sign in to your account
      </h1>
      {message && <h3 className="text-red-700">{message}</h3>}
      <Form
        method="post"
        replace
        className="flex flex-col px-52 py-12 space-y-12"
      >
        <div className="flex flex-col">
          <input
            className="p-5 outline-none border rounded-md border-gray-200"
            name="email"
            type="email"
            placeholder="Email address"
          />
          <input
            className="p-5 outline-none border rounded-md border-gray-200"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <button
          className="bg-[#FF8C38] py-[27px]"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "Logging in ..." : "Log in"}
        </button>
      </Form>
      <h1 className="text-center text-base leading-6 font-bold">
        Don’t have an account?
        <span className="text-[#FF8C38]">Create one now</span>
      </h1>
    </div>
  );
}
