export function Section({
  children,
  heading,
  transparent,
}: {
  children?: any;
  heading: string;
  transparent?: boolean;
}) {
  return (
    <section className={"py-8 " + (!transparent && "bg-white border-b")}>
      <div className="container max-w-6xl mx-auto m-8">
        <h1
          className={
            "my-2 text-2xl lg:text-4xl font-bold text-center " +
            (!transparent && "text-gray-800")
          }
        >
          {heading}
        </h1>
        <div
          className={
            " h-1 mx-auto w-3/6 opacity-25 " +
            (!transparent ? "gradient" : "bg-white")
          }
        ></div>
        <div className={"p-8 " + (!transparent && "text-gray-800")}>
          {children}
        </div>
      </div>
    </section>
  );
}
