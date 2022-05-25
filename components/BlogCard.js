import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

export default function BlogPost({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className={styles.card}>
      <Link href={"/posts/" + slug}>
        <img src={coverPhoto} />
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div style={author.url} alt=""></div>
        </div>
      </div>
    </div>
  );
}
