/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { get } from 'lodash';

interface ILambdaResponse {
  statusCode: number;
  body: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handler = async (event: any): Promise<ILambdaResponse> => {
  const requestBody = get(event, 'body');
  const parsedBody = JSON.parse(requestBody);
  const response: ILambdaResponse = {
    statusCode: 200,
    body: `Goodbye ${parsedBody?.name}`,
  };
  return response;
};
