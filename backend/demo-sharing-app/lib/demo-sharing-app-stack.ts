import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class DemoSharingAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloLambda = new lambda.Function(this, 'HelloWorldLambda', {
      code: lambda.Code.fromAsset('functions/hello-world/'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
    });

    // The code that defines your stack goes here
  }
}
