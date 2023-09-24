import { subtitle, title } from "@/components/primitives";
import BlogList from "@/app/blog/components/blogList";

export default function BlogPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Your&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Blogs&nbsp;</h1>
        <br />
        {/* <h1 className={title()}>
          websites regardless of your design experience.
        </h1> */}
        <h2 className={subtitle({ class: "mt-4" })}>
          Brought to you with love from Sire.
        </h2>
      </div>

      <div className="">
        <BlogList />
      </div>
    </section>
  );
}
