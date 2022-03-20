const { awscdk, SourceCode } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'projen-cdk-tutorial-part-2',
  description: 'This package is for Projen Demo',

  deps: [
    'fastfargate@^0.0.7',
  ],

  // Add License, Gitpod, Eslint, Mergify
  licensed: true,
  license: 'Apache-2.0',
  gitpod: true,
  eslint: true,
  mergify: true,

  // Build Trigger
  buildWorkflow: true,
  buildWorkflowTriggers: { pullRequest: {}, push: {} },
});

project.gitpod.addDockerImage({
  image: 'jsii/superchain:1-buster-slim-node14',
});

project.gitpod.addCustomTask({
  name: 'ConfigAlias',
  command: 'echo \'alias pj="npx projen"\' >> ~/.bashrc && echo \'alias cdk="npx cdk"\' >> ~/.bashrc',
});

project.gitpod.addCustomTask({
  name: 'PersistEnv',
  command: 'eval $(gp env -e)',
});

project.gitpod.addCustomTask({
  name: 'ConfigAws',
  command: 'mkdir ~/.aws',
});

project.gitpod.addCustomTask({
  name: 'ConfigAwsConfig',
  command: 'echo "[default]" >> ~/.aws/config && echo "region = $AWS_DEFAULT_REGION" >> ~/.aws/config && echo "cli_auto_prompt = on-partial" >> ~/.aws/config',
});

project.gitpod.addCustomTask({
  name: 'ConfigAwsCredentials',
  command: 'echo "[default]" >> ~/.aws/credentials && echo "aws_access_key_id = $AWS_ACCESS_KEY_ID" >> ~/.aws/credentials && echo "aws_secret_access_key = $AWS_SECRET_ACCESS_KEY" >> ~/.aws/credentials',
});

project.gitpod.addVscodeExtensions(
  'dbaeumer.vscode-eslint',
  'ms-azuretools.vscode-docker',
  'AmazonWebServices.aws-toolkit-vscode',
);

function ts(path) {
  const src = new SourceCode(project, path);
  src.line('// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".');
  return src;
}

function docker(path) {
  const src = new SourceCode(project, path);
  src.line('# ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".');
  return src;
}

// Ecs App
const EcsApp = ts('src/main.ts');
EcsApp.line('import { App } from \'aws-cdk-lib\';');
EcsApp.line('import { EcsStack } from \'./ecs_stack\';');
EcsApp.line('const app = new App();');
EcsApp.line('new EcsStack(app, \'MyEcsStack\');');
EcsApp.line('app.synth();');

// Ecs Stack
const EcsStack = ts('src/ecs_stack.ts');
EcsStack.line('import { Stack, StackProps } from \'aws-cdk-lib\';');
EcsStack.line('import { Construct } from \'constructs\';');
EcsStack.line('import { MyEcsConstruct } from \'fastfargate\';');

EcsStack.open('export class EcsStack extends Stack {');
EcsStack.open('constructor(scope: Construct, id: string, props: StackProps = {}) {');
EcsStack.line('super(scope, id, props);');
EcsStack.open('new MyEcsConstruct(this, \'MyCluster\', {');
EcsStack.line('maxAzs: 3,');
EcsStack.line('desiredCount: 3,');
EcsStack.line('cpu: 512,');
EcsStack.line('memoryLimitMiB: 1024,');
EcsStack.line('dockerDirAsset: \'../../../src/dockerfiles\',');
EcsStack.line('dockerFileAsset: \'MyImage.Dockerfile\',');
EcsStack.close('});');
EcsStack.close('}');
EcsStack.close('}');

// Dockerfile Asset
const DockerAsset = docker('src/dockerfiles/MyImage.Dockerfile');
DockerAsset.line('FROM nginx:latest');

// Dummy Test
const DummyTest = 'DummyTest';
const Test = ts('test/main.test.ts');

Test.open(`test('${ DummyTest }', () => {`);
Test.line('expect(true).toBe(true);');
Test.close('});');

// Add README.md
function readme(path) {
  const src = new SourceCode(project, path);
  return src;
}

const README = readme('./README.md');
README.line('#### Part1 ([CDK Construct Library])');
README.line('[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)');
README.line('[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/AymanZahran/projen-cdk-tutorial-part-1)');
README.line('[![build](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/build.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/build.yml)');
README.line('[![release](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/release.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/release.yml)');
README.line('[![docker](https://img.shields.io/badge/docker-jsii%2Fsuperchain-brightgreen?logo=docker)](https://hub.docker.com/r/jsii/superchain)');
README.line('[![npm version](https://badge.fury.io/js/fastfargate.svg)](https://badge.fury.io/js/fastfargate)');
README.line('[![PyPI version](https://badge.fury.io/py/fastfargate.svg)](https://badge.fury.io/py/fastfargate)');
README.line('[![NuGet version](https://badge.fury.io/nu/fastfargate.svg)](https://badge.fury.io/nu/fastfargate)');
README.line('#### Part2 ([CDK App])');
README.line('[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)');
README.line('[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/AymanZahran/projen-cdk-tutorial-part-2)');
README.line('[![build](https://github.com/AymanZahran/projen-cdk-tutorial-part-2/actions/workflows/build.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-2/actions/workflows/build.yml)');
README.line('#### Part3 ([CDK Pipelines App])');
README.line('[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)');
README.line('[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/AymanZahran/projen-cdk-tutorial-part-3)');
README.line('[![build](https://github.com/AymanZahran/projen-cdk-tutorial-part-3/actions/workflows/build.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-3/actions/workflows/build.yml)');

README.line('## Part 2');
README.line('![projen-cdk-tutorial-part-2](https://projen-cdk-tutorial.s3.amazonaws.com/projen-cdk-tutorial-part-2.png)');

README.line();
README.line('## License');
README.line('The [Apache-2.0] license');

README.line();
README.line('## References');
README.line('- [CDK Getting Started]');
README.line('- [CDK API Reference]');
README.line('- [CDK Workshop]');
README.line('- [CDK Patterns]');
README.line('- [CDK Construct Hub]');
README.line('- [AWS Solutions Constructs]');
README.line('- [Projen]');
README.line('- [Projen API Reference]');
README.line('- [Projen AWS CDK Construct Library]');
README.line('- [Projen AWS CDK Applications]');
README.line('- [Publish CDK Constructs]');
README.line();

README.line('[CDK Construct Library]: https://github.com/AymanZahran/projen-cdk-tutorial-part-1');
README.line('[CDK App]: https://github.com/AymanZahran/projen-cdk-tutorial-part-2');
README.line('[CDK Pipelines App]: https://github.com/AymanZahran/projen-cdk-tutorial-part-3');
README.line('[Apache-2.0]: https://github.com/AymanZahran/projen-cdk-tutorial-part-2/blob/master/LICENSE');
README.line('[CDK Getting Started]: https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html');
README.line('[CDK API Reference]: https://docs.aws.amazon.com/cdk/api/v2/');
README.line('[CDK Workshop]: https://cdkworkshop.com/');
README.line('[CDK Patterns]: https://cdkpatterns.com/');
README.line('[CDK Construct Hub]: https://constructs.dev/');
README.line('[AWS Solutions Constructs]: https://docs.aws.amazon.com/solutions/latest/constructs/welcome.html');
README.line('[Projen]: https://github.com/projen/projen');
README.line('[Projen API Reference]: https://projen.io/api/API.html');
README.line('[Projen AWS CDK Construct Library]: https://projen.io/awscdk-construct.html');
README.line('[Projen AWS CDK Applications]: https://projen.io/awscdk-apps.html');
README.line('[Publish CDK Constructs]: https://github.com/seeebiii/projen-test');

project.synth();