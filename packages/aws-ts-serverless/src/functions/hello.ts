interface ILambdaResponse {
  statusCode: number;
  body: string;
}

// Record<string, never> means empty object since get request
export const handler = async (_event: Record<string, never>): Promise<ILambdaResponse> => {
  const response: ILambdaResponse = {
    statusCode: 200,
    body: 'HELLO YOU ARE MY FRIEND!!!',
  };
  return response;
};
