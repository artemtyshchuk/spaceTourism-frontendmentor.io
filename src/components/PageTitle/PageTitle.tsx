import styles from "./PageTitle.module.scss";

interface PageTitleProps {
  title: string;
  number: string;
}

export const PageTitle = ({ number, title }: PageTitleProps) => {

  return (
    <div className={styles.titleContainer} data-testid="page-title">
      <p className={styles.title}>
        <span className={styles.titleNumber}>{number}</span>
        {title}
      </p>
    </div>
  );
};
