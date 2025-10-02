import DesktopNav from "./DesktopNav.tsx";
import MobileNav from "./MobileNav.tsx";

function NavBar() {
  return (
      <nav className="sticky top-0 w-full bg-[#131313] h-16">
        <div>
          <div>
            <div>0</div>
            <div>jack corless</div>
          </div>
          {/*name and photo visible on all screens*/}

          <DesktopNav></DesktopNav>
          <MobileNav></MobileNav>
        </div>
      </nav>
  );
}

export default NavBar;