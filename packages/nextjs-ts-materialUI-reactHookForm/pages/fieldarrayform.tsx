import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SubmitHandler, FormProvider, useForm } from 'react-hook-form';
import { SchemaOf, string, object, array } from 'yup';
import IngredientsForm from '@src/components/IngredientsForm';
import InstructionForm from '@src/components/InstructionForm';
import ReactHookFormTextField from '@src/components/RHookFormTextField';
import { IIngredient } from '@src/lib/interfaces/IIngredient';
import { IInstruction } from '@src/lib/interfaces/IInstruction';
import { IRecipe } from '@src/lib/interfaces/IRecipe';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
    },
  })
);

const ingredientsSchema: SchemaOf<IIngredient> = object({
  ingredientId: string().optional(),
  name: string().optional(),
});

const instructionsSchema: SchemaOf<IInstruction> = object({
  instructionId: string().optional(),
  message: string().optional(),
});

const recipeSchema: SchemaOf<IRecipe> = object({
  recipeId: string().optional(),
  title: string().required('Title is required'),
  description: string().required('Description is required'),
  instructions: array().of(instructionsSchema).optional(),
  ingredients: array().of(ingredientsSchema).optional(),
});

const FieldArrayForm: FC = () => {
  const classes = useStyles();

  const methods = useForm<IRecipe>({
    resolver: yupResolver(recipeSchema),
  });

  const submitRecipe: SubmitHandler<IRecipe> = async (data: IRecipe) => {
    console.log('data submitted', data);
  };

  console.log('title: ', methods.watch('title'));
  console.log('description: ', methods.watch('description'));

  return (
    <div className={classes.root}>
      <Grid container>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submitRecipe)}>
            <Grid item>
              <ReactHookFormTextField label="Title" name="title" />
            </Grid>
            <Grid item>
              <ReactHookFormTextField label="Description" name="description" />
            </Grid>
            <Grid item xs={12}>
              <InstructionForm />
            </Grid>
            <Grid item xs={12}>
              <IngredientsForm />
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
