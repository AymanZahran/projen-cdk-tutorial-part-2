#### Part1 ([CDK Construct Library])
[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/AymanZahran/projen-cdk-tutorial-part-1)
[![build](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/build.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/build.yml)
[![release](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/release.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-1/actions/workflows/release.yml)
[![docker](https://img.shields.io/badge/docker-jsii%2Fsuperchain-brightgreen?logo=docker)](https://hub.docker.com/r/jsii/superchain)
[![npm version](https://badge.fury.io/js/fastfargate.svg)](https://badge.fury.io/js/fastfargate)
[![PyPI version](https://badge.fury.io/py/fastfargate.svg)](https://badge.fury.io/py/fastfargate)
[![NuGet version](https://badge.fury.io/nu/fastfargate.svg)](https://badge.fury.io/nu/fastfargate)
#### Part2 ([CDK App])
[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/AymanZahran/projen-cdk-tutorial-part-2)
[![build](https://github.com/AymanZahran/projen-cdk-tutorial-part-2/actions/workflows/build.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-2/actions/workflows/build.yml)
#### Part3 ([CDK Pipelines App])
[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/AymanZahran/projen-cdk-tutorial-part-3)
[![build](https://github.com/AymanZahran/projen-cdk-tutorial-part-3/actions/workflows/build.yml/badge.svg)](https://github.com/AymanZahran/projen-cdk-tutorial-part-3/actions/workflows/build.yml)
## Part 2
![projen-cdk-tutorial-part-2](https://projen-cdk-tutorial.s3.amazonaws.com/projen-cdk-tutorial-part-2.png)
### Steps
1- Add Gitpod Secrets
```sh
AWS_ACCOUNT_NUMBER
AWS_DEFAULT_REGION
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```
2- Create Project locally or launch using [Gitpod]

```sh
mkdir projen-cdk-tutorial-part-2
cd projen-cdk-tutorial-part-2
code .
alias cdk="npx cdk"
awscdk-app-ts
```
3- Configure Project
```sh
Add your code to .projenrc, This is the only file that will be modified. During projen it will scaffold your whole project including what you are reading right now ! :)
```
4- Execute projen
```sh
pj
```
5- Commit & Push
```sh
git add .
git commit -m "Commit"
git push
```
![projen-cdk-tutorial-part-2-build](https://projen-cdk-tutorial.s3.amazonaws.com/projen-cdk-tutorial-part-2-build.PNG)

6- Deploy the ECS Stack
```sh
npx cdk bootstrap aws://$AWS_ACCOUNT_NUMBER/$AWS_DEFAULT_REGION
cdk deploy
```
![projen-cdk-tutorial-part-2-stack](https://projen-cdk-tutorial.s3.amazonaws.com/projen-cdk-tutorial-part-2-stack.PNG)


## License
The [Apache-2.0] license

## References
- [CDK Getting Started]
- [CDK API Reference]
- [CDK Workshop]
- [CDK Patterns]
- [CDK Construct Hub]
- [AWS Solutions Constructs]
- [Projen]
- [Projen API Reference]
- [Projen AWS CDK Construct Library]
- [Projen AWS CDK Applications]
- [Publish CDK Constructs]
- [projen-cdk-tutorial-part-1]
- [projen-cdk-tutorial-part-2]
- [projen-cdk-tutorial-part-3]

[CDK Construct Library]: https://github.com/AymanZahran/projen-cdk-tutorial-part-1
[CDK App]: https://github.com/AymanZahran/projen-cdk-tutorial-part-2
[CDK Pipelines App]: https://github.com/AymanZahran/projen-cdk-tutorial-part-3
[Gitpod]: https://gitpod.io/#https://github.com/AymanZahran/projen-cdk-tutorial-part-2
[Apache-2.0]: https://github.com/AymanZahran/projen-cdk-tutorial-part-2/blob/master/LICENSE
[CDK Getting Started]: https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html
[CDK API Reference]: https://docs.aws.amazon.com/cdk/api/v2/
[CDK Workshop]: https://cdkworkshop.com/
[CDK Patterns]: https://cdkpatterns.com/
[CDK Construct Hub]: https://constructs.dev/
[AWS Solutions Constructs]: https://docs.aws.amazon.com/solutions/latest/constructs/welcome.html
[Projen]: https://github.com/projen/projen
[Projen API Reference]: https://projen.io/api/API.html
[Projen AWS CDK Construct Library]: https://projen.io/awscdk-construct.html
[Projen AWS CDK Applications]: https://projen.io/awscdk-apps.html
[Publish CDK Constructs]: https://github.com/seeebiii/projen-test
[projen-cdk-tutorial-part-1]: https://github.com/AymanZahran/projen-cdk-tutorial-part-1
[projen-cdk-tutorial-part-2]: https://github.com/AymanZahran/projen-cdk-tutorial-part-2
[projen-cdk-tutorial-part-3]: https://github.com/AymanZahran/projen-cdk-tutorial-part-3