import Footer from "../components/Footer";

export function MainFooter() {
  return (
    <Footer
      brand="Marko Fediv"
      other={[
        {
          heading: "Kontakt",
          links: [
            {
              name: "Instagram",
              to: "instagram.com/maggggoooooo/",
            },
          ],
        },
        {
          heading: "Legales",
          links: [
            {
              name: "Impressum",
              to: "/impressum",
            },
          ],
        },
      ]}
    />
  );
}
