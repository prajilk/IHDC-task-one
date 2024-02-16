import { Input } from "../ui/input";

const RegisterForm = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="my-6" onSubmit={handleSubmit}>
      <label htmlFor="phone" className="text-sm font-medium">
        PHONE NUMBER
      </label>
      <div className="mb-3 mt-2 grid grid-cols-2 gap-3">
        <Input
          type="text"
          placeholder="+91 India"
          className="rounded-xl border border-gray-300 bg-zinc-50 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Input
          type="tel"
          placeholder="9645789210"
          className="rounded-xl border border-gray-300 bg-zinc-50 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <label htmlFor="phone" className="text-sm font-medium">
        NAME
      </label>
      <Input
        type="text"
        className="mb-3 mt-2 rounded-xl border border-gray-300 bg-zinc-50 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <label htmlFor="phone" className="text-sm font-medium">
        EMAIL [OPTIONAL]
      </label>
      <Input
        type="email"
        className="mt-2 rounded-xl border border-gray-300 bg-zinc-50 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <button className="my-3 w-full rounded-full bg-[#61BAF5] py-1 text-white duration-300 hover:bg-[#61BAF5]/90 active:scale-95">
        CONTINUE
      </button>
      <span className="text-xs text-muted-foreground">
        Get ready to receive a secret code (OTP) on your phone
      </span>
    </form>
  );
};

export default RegisterForm;
