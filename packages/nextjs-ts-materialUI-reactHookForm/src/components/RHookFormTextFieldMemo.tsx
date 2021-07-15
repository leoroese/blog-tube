import React, { memo } from 'react';
import { TextField } from '@material-ui/core';
import { UseFormReturn } from 'react-hook-form';

interface IReactHookFormTextFieldProps {
  methods: UseFormReturn;
  label: string;
  name: string;
}

const ReactHookFormTextFieldMemo = memo(
  ({ methods, label, name }: IReactHookFormTextFieldProps) => (
    <TextField
      label={label}
      variant="outlined"
      error={!!methods.formState.errors[name]}
      helperText={methods.formState.errors[name]?.message ?? ''}
      fullWidth
      margin="dense"
      {...methods.register(name)}
    />
  ),
  (prevProps, nextProps) => {
    return (
      prevProps.methods.formState.isDirty === nextProps.methods.formState.isDirty &&
      prevProps.methods.formState.errors !== nextProps.methods.formState.errors
    );
  }
);

export default ReactHookFormTextFieldMemo;
