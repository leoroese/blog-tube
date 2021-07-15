import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { SchemaOf, string, object, array } from 'yup';
import ReactHookFormTextFieldContainer from '@src/components/RHookFormTextFieldContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
    },
  })
);

interface IFormProps {
  name: string;
  message: string;
}

const formSchema: SchemaOf<IFormProps> = object({
  name: string().required('Name is required'),
  message: string().required('Message is required'),
});

const FieldArrayForm: FC = () => {
  const classes = useStyles();

  const methods = useForm<IFormProps>({
    resolver: yupResolver(formSchema),
  });

  const submitRecipe: SubmitHandler<IFormProps> = async (data: IFormProps) => {
    console.log('data submitted', data);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submitRecipe)}>
            <Grid item>
              <ReactHookFormTextFieldContainer label="Name" name="name" />
            </Grid>
            <Grid item>
              <ReactHookFormTextFieldContainer label="Message" name="message" />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
    </div>
  );
};

export default FieldArrayForm;
