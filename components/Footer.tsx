import Link from "next/link";

type FooterProps = {
  icon?: any;
  brand: string;
  other?: any;
};

export default function Footer({icon, brand, other}: FooterProps) {
  return (
    <footer className="bg-white mt-12">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6 text-center md:text-left">
          <div className="flex flex-1 mb-6 text-black pr-8 justify-center">
            <Link
              className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex items-start"
              href="/"
            >
              <a>
                {icon}
                {brand}</a>
            </Link>
          </div>

          {other &&
            other.map((element: any) => {
              return (
                <div className="flex-1" key={element.heading}>
                  <p className="uppercase text-gray-500 md:mb-6">
                    {element.heading}
                  </p>
                  <ul className="list-reset mb-6">
                    {element.links &&
                      element.links.map((link: any) => {
                        return (
                          <li
                            className="mt-2 inline-block mr-2 md:block md:mr-0"
                            key={link.name}
                          >
                            <Link
                              href={link.to}
                            >
                              <a
                                className="no-underline hover:underline text-gray-800 hover:text-orange-500">{link.name}</a>

                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </footer>
  );
}
