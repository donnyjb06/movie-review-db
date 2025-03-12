import { FC } from "react";
import styles from "./Main.module.scss";

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ( { children } ) => {
  return(
    <main className={styles.main}>{children}</main>
  )
}

export default Main;