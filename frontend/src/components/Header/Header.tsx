import React from "react";
import styles from "./Header.module.scss";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi2";
import { SiThemoviedatabase } from "react-icons/si";
import { useThemeContext } from "../../helpers/hooks/useThemeContext";

const Header: React.FunctionComponent = () => {
  const { theme, handleThemeSwitch } = useThemeContext();

  return (
    <header className={styles.header}>
      <SiThemoviedatabase size="3rem" color="white" title="Header Logo" />
      <button
        className={styles.header__themeToggle}
        onClick={() => handleThemeSwitch()}
      >
        {theme === "dark" ? (
          <IoSunnyOutline color="#121212" size="1.7rem" />
        ) : (
          <HiOutlineMoon color="#F9FAFB" size="1.7rem" />
        )}
      </button>
    </header>
  );
};

export default Header;
