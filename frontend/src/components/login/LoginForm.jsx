import LoginHeader from "./LoginHeader";
import LoginInputs from "./LoginInputs";

export default function LoginForm() {
  return (
    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
      <LoginHeader />

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
      </div>

      <LoginInputs />
    </div>
  );
}
