import Link from "next/link";

import { MagneticButton } from "@/components";
import { socialMedias } from "@/data";

import styles from "./styles.module.scss";

export function Contacts() {
  function Item({ href, title }) {
    return (
      <li className={styles.link}>
        <MagneticButton translateRate={0.3} className="p-0">
          <Link href={href} target="_blank" rel="noopener">
            {title}
          </Link>
        </MagneticButton>
      </li>
    );
  }

  function Li({ children }) {
    return (
      <li>
        <p>{children}</p>
      </li>
    );
  }
  function Socials() {
    return (
      <>
        {socialMedias.map((social, i) => (
          <Item key={i} href={social.href} title={social.title} />
        ))}
      </>
    );
  }

  return (
    <div className={styles.contacts}>
      <h5>Contact Details</h5>
      <ul className={styles.links_wrap}>
        <Item
          href={"mailto:eregeikechukwu@gmail.com"}
          title={"eregeikechukwu@gmail.com"}
        />
        <Item href="tel:+2347019211773" title={"+234 701 9211 773"} />
      </ul>
      <h5>Business Details</h5>
      <ul className={styles.links_wrap}>
        <Li>Nelson Erege DEV</Li>
        <Li>CoC: 92411711</Li>
        <Li>VAT: NL866034080B01</Li>
        <Li>Location: Owerri, Nigeria</Li>
      </ul>
      <ul className={`${styles.links_wrap} max-md:!hidden`}>
        <Socials />
      </ul>
    </div>
  );
}
// CoC: 92411711

// VAT: NL866034080B01

// Location: The Netherlands
