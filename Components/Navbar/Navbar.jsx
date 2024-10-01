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
    link: "/product-details/6",
    name: "Product Details",
  },
];
const Navbar = () => {
  console.log("navBarData", navBarData);

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
