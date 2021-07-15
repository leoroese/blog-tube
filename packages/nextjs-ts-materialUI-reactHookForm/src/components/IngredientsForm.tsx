import React, { FC } from 'react';
import { Button, Grid, IconButton, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { IRecipe } from '@src/lib/interfaces/IRecipe';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const IngredientsForm: FC = () => {
  const classes = useStyles();

  const { control, register, watch } = useFormContext<IRecipe>();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray<IRecipe, 'ingredients', 'ingredientId'>(
    {
      control,
      name: 'ingredients',
      keyName: 'ingredientId',
    }
  );

  console.log('ingredients are', watch('ingredients'));

  return (
    <>
      <Grid container direction="row">
        {fields.map((field, index) => (
          <Grid container item xs={12} key={field.ingredientId}>
            <Grid item>
              <TextField
                label="Ingredient"
                key={field.ingredientId} // important to include key with field's id
                {...register(`ingredients.${index}.name` as const)}
                defaultValue={field.name} // make sure to include defaultValue
              />
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => {
                  remove(index);
                }}
              >
                <RemoveIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => {
              append({ ingredientId: fields.length.toString(), name: '' });
            }}
          >
            Add Ingredient
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default IngredientsForm;
