import MainHeadlines from "@/components/MainHeadlines";
import { subtitle, title } from "@/components/primitives";

// Your Source for Today's Headlines and Tomorrow's Insights!
// Delivering News That Matters

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 md:gap-24 py-8">
      <div className="inline-block max-w-2xl text-center justify-center">
        <h1 className={title()}>Delivering&nbsp;</h1>

        <h1 className={title({ color: "violet" })}>{"News"}&nbsp;</h1>
        <br />
        <h1 className={title()}>that Matters, Wherever You Are.</h1>

        <h2 className={subtitle({ class: "mt-4" })}>
          {" Your Source for Today's Headlines and Tomorrow's Insights!"}
        </h2>
      </div>
      <MainHeadlines />
    </section>
  );
}
