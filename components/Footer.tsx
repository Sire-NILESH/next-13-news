import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { DiscordIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "./icons";

const Footer = () => {
  return (
    <section className="">
      <div className="mt-28 max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {/* Footer Links items */}
          {siteConfig.footerMenuItems.map((item) => (
            <div key={item.label} className="px-5 py-2">
              <a href="#" className="text-base leading-6 text-gray-500">
                {item.label}
              </a>
            </div>
          ))}
        </nav>

        <div className="flex justify-center mt-8 space-x-6">
          <Link
            // isExternal
            href={siteConfig.links.facebook}
            aria-label="Facebook"
          >
            <FacebookIcon className="text-gray-500" />
          </Link>

          <Link
            // isExternal
            href={siteConfig.links.instagram}
            aria-label="Instagram"
          >
            <InstagramIcon className="text-gray-500" />
          </Link>

          <Link
            // isExternal
            href={siteConfig.links.twitter}
            aria-label="Twitter"
          >
            <TwitterIcon className="text-gray-500" />
          </Link>

          <Link
            // isExternal
            href={siteConfig.links.discord}
            aria-label="Discord"
          >
            <DiscordIcon className="text-gray-500" />
          </Link>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-500">
          {`© ${new Date(
            Date.now()
          ).getFullYear()} ATLAS TODAY, Inc. from Sire. All rights reserved.`}
        </p>
      </div>
    </section>
  );
};

export default Footer;
