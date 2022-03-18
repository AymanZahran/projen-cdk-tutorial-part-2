import { App } from 'aws-cdk-lib';
import { EcsStack } from './ecs_stack';

const app = new App();
new EcsStack(app, 'MyEcsStack');
app.synth();