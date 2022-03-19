// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyEcsConstruct } from 'ecs-package';
export class EcsStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);
    new MyEcsConstruct(this, 'MyCluster', {
      maxAzs: 3,
      desiredCount: 3,
      cpu: 512,
      memoryLimitMiB: 1024,
      dockerDirAsset: '../../../src/dockerfiles',
      dockerFileAsset: 'MyImage.Dockerfile',
    });
  }
}