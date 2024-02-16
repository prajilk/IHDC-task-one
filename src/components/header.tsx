import Container from "./container";
import { Profile } from "./profile";
import { SideNav } from "./side-nav";

const navItems = ["Home", "Dashboard", "Products", "Transactions", "Journal"];

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;

const HeaderTop = () => {
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

const HeaderBottom = () => {
  return (
    <Container className="relative flex items-center justify-start py-4 lg:justify-center">
      {/* Navigation List */}
      <ul className="mx-auto hidden gap-5 lg:flex">
        {navItems.map((navItem, i) => (
          <li
            className="cursor-pointer font-medium duration-300 hover:text-blue-400 active:scale-95"
            key={i}
          >
            {navItem}
          </li>
        ))}
      </ul>

      {/* Side Navigation Bar only for small devices */}
      <SideNav className="lg:hidden" />

      {/* Profile section */}
      <Profile className="absolute right-0 me-2 flex cursor-pointer items-center gap-2 rounded-full bg-gray-200/80 py-1 pe-1.5 ps-1.5 duration-300 hover:bg-gray-200 active:scale-95 lg:me-0 lg:pe-3">
        <img
          src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk"
          className="w-10 rounded-full"
        />
        <div className="hidden flex-col text-left lg:flex">
          <h4 className="text-sm font-semibold">Joseph Lazar</h4>
          <span className="text-xs text-muted-foreground">
            josephlazar@mail.com
          </span>
        </div>
      </Profile>
    </Container>
  );
};
