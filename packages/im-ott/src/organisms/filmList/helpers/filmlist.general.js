import cx from "classnames";

// Styles
import styles from "../filmlist.module.scss";

export const getFilmListClassName = (isFeatured) => {
  return cx(styles.filmCard, {
    [styles.filmSpacing]: !isFeatured,
  });
};
