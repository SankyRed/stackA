import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { StackB } from './stackB';

export class StackAStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const testStackB = new StackB(this, 'StackB'); 
  
    this.addDependency(testStackB);
  }
}
