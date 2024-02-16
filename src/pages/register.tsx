import Container from "../components/container";
import RegisterForm from "../components/form/register-form";
import HeaderOne from "../components/header-one";

const Register = () => {
  return (
    <>
      <HeaderOne />
      <Container className="my-10 grid max-w-4xl grid-cols-1 gap-5 px-5 md:my-20 md:grid-cols-2 md:px-0">
        <div>
          <h1 className="text-center text-2xl font-light text-[#61BAF5] md:text-4xl">
            Unlock Exclusive Benefits
          </h1>
          <RegisterForm />
        </div>
        <img
          src="/celeb.png"
          alt="celebrating illustration"
          className="md:ms-5"
        />
      </Container>
    </>
  );
};

export default Register;
