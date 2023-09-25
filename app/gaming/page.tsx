import HighlightsBanner from "@/app/gaming/components/HighlightsBanner";
import MainHeadlines from "@/components/MainHeadlines";
import { subtitle, title } from "@/components/primitives";

export default function GamingPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 w-full">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Highlights in&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Gaming&nbsp;</h1>
        <br />
        {/* <h1 className={title()}>
          websites regardless of your design experience.
        </h1> */}
        <h2 className={subtitle({ class: "mt-4" })}>
          {
            "Powering up your Gaming World: Bringing you the Hottest Gaming News and Insights."
          }
        </h2>
      </div>

      <div className="mb-28">
        <HighlightsBanner />
      </div>

      <div>
        <MainHeadlines />
      </div>
    </section>
  );
}