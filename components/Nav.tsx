import {useEffect, useState} from "react";
import Link from "next/link";

type NavProps = {
  icon?: any;
  brand: string;
  action?: string;
  actionTo?: any;
  other?: any | NavOtherProps;
  back?: boolean;
};
type NavOtherProps = {
  name: string;
  to: string;
};

export default function Nav({
                              icon,
                              brand,
                              action,
                              actionTo,
                              other,
                              back,
                            }: NavProps) {
  const [scroll, setScroll] = useState(false);
  //let navigate = useNavigate();

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.scrollY > 10) {
      setScroll(true);
    } else setScroll(false);
  }

  return (
    <nav
      className={
        "fixed w-full z-30 top-0 transition duration-1000 ease-in-out " +
        (scroll ? "text-black bg-white shadow-lg" : "text-white bg-transparent")
      }
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-4">
        <div className="flex items-center">
          {back ? (
            <span
              className={
                "font-bold text-2xl  lg:text-4xl transition duration-1000 ease-in-out " +
                (scroll ? "text-black" : "text-white")
              }
            >
              <span
                className="mr-2"
                onClick={() => {
                  //navigate(-1);
                }}
              >
                {icon}
              </span>
              {brand}
            </span>
          ) : (
            <Link
              href="/"
              className={
                "font-bold text-2xl  lg:text-4xl transition duration-1000 ease-in-out " +
                (scroll ? "text-black" : "text-white")
              }
            >
              <a>
                <span className="mr-2">{icon}</span>
                {brand}</a>
            </Link>
          )}
        </div>

        <div className="flex-grow flex justify-end items-center w-auto mt-0 bg-transparent text-black p-0 z-20">
          {other && (
            <ul className="flex flex-1 items-center justify-end">
              {other.map((element: NavOtherProps) => {
                return (
                  <li className="mr-3 hidden sm:block" key={element.name}>
                    <Link
                      href={element.to}
                      className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    >
                      <a>{element.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          {action && (
            <Link
              href={actionTo}
              className={
                "mx-0 hover:underline font-bold rounded-full mt-0 lg:py-4 lg:px-8 py-2 px-4 shadow text-gray-800 transition duration-1000 ease-in-out " +
                (scroll ? "bg-yellow-500 " : "bg-white")
              }
            ><a>{action}</a>

            </Link>
          )}
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0"/>
    </nav>
  );
}
