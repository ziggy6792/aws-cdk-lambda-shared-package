import { v4 as uuid } from 'uuid';
import mylib from 'my-lib/MyLib';

exports.handler = async function (event: AWSLambda.APIGatewayEvent) {
  console.log('event', JSON.stringify(event, null, 0));

  console.log(`here is a uuid ${uuid()}`);

  const result = mylib();

  console.log(`Result from lib is ${result}`);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: 'Hello from lambda',
  };
};
