import Container from "./container";

const HeaderOne = () => {
  return (
    <div className="bg-[#ECECEC] py-3">
      <Container className="flex items-center">
        <img
          src="/real-estate-house.png"
          alt="Real estate house"
          className="w-16"
        />
        <h1 className="mx-auto font-bold">XYZ SYSTEMS LLP.</h1>
      </Container>
    </div>
  );
};

export default HeaderOne;
