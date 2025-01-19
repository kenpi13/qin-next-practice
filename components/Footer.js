import styles from "@/styles/Home.module.css";

export function Footer(props) {
  const { name } = props;
  return (
    <footer className={styles.footer}>
      こんにちは{name}
    </footer>
  );
}
