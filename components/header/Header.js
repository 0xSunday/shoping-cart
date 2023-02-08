import Link from "next/link";

const NavBar = (props) => {
  let con = props.con;
  let cont = props.cont;
  let allp = false;
  allp = props.allp;
  return (
    <nav className="w-full  flex py-6 justify-between items-center navbar text-white">
      <h1
        className="font-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white "
        animate={{ x: ["-100vh", "50vh", "0vh"] }}
        transition={{ delay: 0.2, type: "spring", duration: 0.7 }}
      >
        <Link
          href="/"
          className=" text-transparent  bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-500 to-yellow-900"
        >
          CART
        </Link>
      </h1>

      <ul
        className="list-none flex justify-end items-center flex-1 z-10"
        animate={{ x: ["100vh", "-50vh", "0vh"] }}
        transition={{ delay: 0.2, type: "spring", duration: 0.6 }}
      >
        <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] mr-5 sm:mr-10  hover ">
          <Link href="/posts">All Posts</Link>
        </li>
        <li className="menu font-poppins font-normal  text-dimWhite cursor-pointer text:[18px] sm:text-[26px] hover ">
          <Link href="/contect">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
