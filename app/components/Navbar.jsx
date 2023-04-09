import {CloseIcon, IMDBIcon, NavMovieIcon} from "../utils/svgs"
import {navlist} from "../utils/navListData"
import Link from 'next/link';
import NavbarItems from './NavbarItems';

const Navbar = ({showNavbar, setShowNavbar}) => {

  return (
    <nav className={`fixed top-0 left-0 w-full overflow-hidden ${showNavbar ? "h-[100vh]" : "h-0 -top-10"} z-[10] bg-bgDark2 bg-opacity-[0.5] lg:bg-opacity-100 transition-all duration-300`}>
      {/* navbar container */}
      <div
        className={`navbar-container flex flex-col gap-y-4 bg-bgDark2 lg:bg-none w-full max-w-[300px] lg:max-w-[1000px] lg:mx-auto px-[10px] h-full`}
      >
        {/* navbar header with stripes */}
        <div className="nav-header background-stripes h-[60px] lg:mt-8 lg:bg-none flex justify-between items-center">
          <Link href="/">
            <IMDBIcon width="100" height="100" className="hidden lg:flex" />
          </Link>
          <div className="lg:p-[0.75rem] lg:bg-btnYellow rounded-full lg:text-black cursor-pointer" onClick={() => setShowNavbar(false)}>
            <CloseIcon width="25" height="25" />
          </div>
        </div>

        {/* navbar body presentation */}
        <div className="navbar-presentation flex flex-col flex-wrap shrink-0 lg:flex-row lg:justify-between gap-y-6 lg:gap-y-8 lg:mt-4">
          {/* nav list items */}
          {navlist.map(listItem => (
              <NavbarItems key={listItem.id} {...listItem} />
            ))
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar