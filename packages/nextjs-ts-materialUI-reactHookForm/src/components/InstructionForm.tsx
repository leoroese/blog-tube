import React, { FC } from 'react';
import { Button, Grid, IconButton, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { IRecipe } from '@src/lib/interfaces/IRecipe';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const InstructionForm: FC = () => {
  const classes = useStyles();

  const { control, register, watch } = useFormContext<IRecipe>();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray<
    IRecipe,
    'instructions',
    'instructionId'
  >({
    control,
    name: 'instructions',
    keyName: 'instructionId',
  });

  console.log('instructions are', watch('instructions'));

  return (
    <>
      <Grid container direction="row">
        {fields.map((field, index) => (
          <Grid container item xs={12} key={field.instructionId}>
            <Grid item>
              <TextField
                label="Instruction"
                key={field.instructionId} // important to include key with field's id
                {...register(`instructions.${index}.message` as const)}
                defaultValue={field.message} // make sure to include defaultValue
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
              append({ instructionId: fields.length.toString(), message: '' });
            }}
          >
            Add Instruction
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default InstructionForm;
