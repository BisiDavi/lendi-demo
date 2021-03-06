import Link from "next/link";
import footerLinks from "@json/footer.json";
import s from "@styles/footer.module.scss";

function displayLink(menu, className) {
  return menu.map((mainLink, index) => (
    <Link key={index} href={mainLink.link} passHref>
      <a className={className}>{mainLink.text}</a>
    </Link>
  ));
}

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container p-4 m-auto">
        <div className="content px-28">
          <h4 className="font-normal text-white text-3xl my-3">
            Still looking?
          </h4>
          <div className="footer-links flex m-auto justify-center">
            {footerLinks.siteLink.map((footerLink, index) => (
              <div key={index} className={`row-${index} w-1/4`}>
                {displayLink(
                  footerLink.main,
                  "font-medium text-white text-xl my-2"
                )}
                <hr className="my-3" />
                <div className="sub flex align-items flex-col">
                  {displayLink(
                    footerLink.sub,
                    "font-medium text-white text-lg my-2"
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="pageLinks flex m-auto item-center justify-center my-12">
            {footerLinks.sitePages.map((siteLink, index) => (
              <li key={index}>
                <Link href={siteLink.link} passHref>
                  <a className="text-center text-white text-xl mx-3">
                    {" "}
                    {siteLink.name}
                  </a>
                </Link>{" "}
                <span className="text-white mx-2 font-medium">|</span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
