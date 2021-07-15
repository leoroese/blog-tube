import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import ReactHookFormTextFieldMemo from './RHookFormTextFieldMemo';

interface ReactHookFormTextFieldContainerProps {
  name: string;
  label: string;
}

const ReactHookFormTextFieldContainer: FC<ReactHookFormTextFieldContainerProps> = ({
  name,
  label,
}: ReactHookFormTextFieldContainerProps) => {
  const methods = useFormContext();

  return <ReactHookFormTextFieldMemo methods={methods} label={label} name={name} />;
};

export default ReactHookFormTextFieldContainer;
