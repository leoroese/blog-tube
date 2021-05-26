import { FC } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import styles from '../styles/Home.module.css';

interface SupProps {
  message: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: 'red',
    },
  })
);

const Sup: FC<SupProps> = ({ message }: SupProps) => {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <button type="button">I am so fucking boring!</button>
      <Button className={classes.root} variant="contained">
        {message}
      </Button>
    </div>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      message: 'sup',
    },
  };
};

export default Sup;
