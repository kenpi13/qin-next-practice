import styles from "@/styles/Footer.module.css";

export function Footer(props) {
  console.table(props);
  const { name, number, array, bool, comp, children } = props;
  return (
    <footer className={styles.footer}>
      こんにちは{name}
      <br></br>
      数字は{number}
      <br></br>
      配列は{array}
      <br></br>
      真偽値は{bool}
      {children}
    </footer>
  );
}
