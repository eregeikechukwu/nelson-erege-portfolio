import Link from "next/link";

import { MagneticButton } from "@/components";

import styles from "./styles.module.scss";

export function Contacts() {
  function Item({ href, title }) {
    return (
      <li className={styles.link}>
        <Link href={href} target="_blank" rel="noopener">
          <MagneticButton className="p-0">{title}</MagneticButton>
        </Link>
      </li>
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
      </ul>
    </div>
  );
}
