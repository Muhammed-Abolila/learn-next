import Link from "next/link";
const navBarData = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/contact",
    name: "Contact",
  },
  {
    link: "/product-details/1",
    name: "Product Details",
  },
  {
    link: "/fetch-data",
    name: "Fetch Data",
  },
];
const Navbar = () => {
  return (
    <nav>
      <ul>
        {navBarData.map((linkData, index) => 
          <Link href={linkData.link} key={index}>
            <li>{linkData.name}</li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
