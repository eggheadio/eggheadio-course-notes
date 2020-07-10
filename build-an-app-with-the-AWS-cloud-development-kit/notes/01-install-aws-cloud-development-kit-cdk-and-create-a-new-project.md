# Install AWS Cloud Development Kit (CDK) and create a new project

**[📹 Video](https://egghead.io/lessons/aws-install-aws-cloud-development-kit-cdk-and-create-a-new-project)**

We'll start by installing the [AWS Cloud Development Kit](https://aws.amazon.com/cdk/).

* `npm install -g aws-cdk`

`-g` stands for global (meaning that once installed, this package will be available anywhere on your computer)

👍 Throughout the course, Tomasz will use both `yarn` and `npm` package mangers, and it's really up to you to decide which one to use, as both work fine.

Verify that`cdk` was installed.

* `cdk --version`

Initialize a new `cdk` project.

* `cdk init`

```bash
* sample-app: Example CDK Application with some constructs
   └─ cdk init sample-app --language=[csharp|fsharp|java|javascript|python|typescript]
```
We are going to choose the `sample app`, `typescript` template:

* `cdk init sample-app --language=typescript`

This will create a bunch of files with the following directory structure (note that I'm displaying files just one level deep here):

```
.
├── .git
├── .gitignore
├── .npmignore
├── README.md
├── bin
├── cdk.json
├── jest.config.js
├── lib
├── node_modules
├── package-lock.json
├── package.json
├── test
└── tsconfig.json
```
👍 You can run `tree -la 1` to display the tree.