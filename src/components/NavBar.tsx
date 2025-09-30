import DesktopNav from "./DesktopNav.tsx";
import MobileNav from "./MobileNav.tsx";

function NavBar() {
  return (
      <nav className="sticky top-0 w-full bg-[#131313] h-16">
        <div>
          <DesktopNav></DesktopNav>
          <MobileNav></MobileNav>
        </div>
      </nav>
  );
}

export default NavBar;