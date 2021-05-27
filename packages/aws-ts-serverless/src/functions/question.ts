import { SNSHandler, SNSEvent, SNSEventRecord } from 'aws-lambda';

/*
    SNS Topics don't expect a return value. Usually you either publish to another topic or just do some work and finish
*/
export const handler: SNSHandler = async (event: SNSEvent) => {
  const records: SNSEventRecord[] = event.Records;
  // For the sake of this tutorial I am just using a fire and forget with this forEach. If you want to try and catch you can use await Promise.all or something
  records.forEach(record => {
    console.log('Message is: ', record.Sns.Message);
  });
};
