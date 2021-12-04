<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Summary

Nader discusses the impact serverless infrastructure and technology will have on full-stack development. He introduces the workflow that gives front-end developers the tools needed to build full-stack applications.

## Table of Contents

- [About the Speaker](#About-the-Speaker)

- [Abstractions in Web Development](#Abstractions-in-Web-Development)

- [Front-end Abstractions](#Front-end-Abstractions)

  - [Why Front-end Is So Complex](#Why-Front-end-Is-So-Complex)

  - [Why We Need Front-end Abstractions](#Why-We-Need-Front-end-Abstractions)

- [Back-end Abstractions](#Back-end-Abstractions)

  - [Why We Need Back-end Abstractions](#Why-We-Need-Back-end-Abstractions)

  - [Cloud and Serverless](#Cloud-and-Serverless)

- [What's Next After Serverless](#What's-Next-After-Serverless)

- [Serverless is a Spectrum](#Serverless-is-a-Spectrum)

  - [Serverless Functions and Servicefull Services](#Serverless-Functions-and-Servicefull-Services)

- [GraphQL](#GraphQL)

  - [Microservice Architecture](#Microservice-Architecture)

- [Full Stack Serviceless](#Full-Stack-Serviceless)

  - [Full Stack Serverless Assumptions and Acknowledgements](#Full-Stack-Serverless-Assumptions-and-Acknowledgements)

  - [Benefits of Full Stack Serverless](#Benefits-of-Full-Stack-Serverless)

  - [Drawbacks of Full Stack Serverless](#Drawbacks-of-Full-Stack-Serverless)

  - [What You Need to Build a Full Stack Serverless App](#What-You-Need-to-Build-a-Full-Stack-Serverless-App)

  - [Full-stack Serverless Tools](#Full-stack-Serverless-Tools)

- [Conclusion](#Conclusion)

## About the Speaker

[Nader Dabit](https://twitter.com/dabit3) is a Developer Advocate at Amazon Web Services. He recently published a book called Full Stack Serverless that will be released in Novemeber 2020. You can check [his book out here](https://www.oreilly.com/library/view/full-stack-serverless/9781492059882/).

## Abstractions in Web Development

A lot of the things we have to do in web development require a lot of work, time, and effort. Abstractions help lessen the amount of work we have to do. We want most efficient abstraction.

We can get ahead by focusing on best abstractions.

## Front-end Abstractions

The old front end stack looks COMPLETELY different from what we use now.

The **old stack** was HTML, CSS, jQuery.

The **new stack** is huge. We still use HTML and CSS. But there are so many tools, languages, and frameworks front end developers are expected to know a whole lot of different things.

Why has front end engineering become so complex?

### Why Front-end Is So Complex

There are few things that have contributed to the high expectations employers, fellow developers, and users have for front-end developers.

- **SPAS**- Single Page Applications by big companies like FaceBook have a great user experience. So everyone wants to imitate this and do this too.

- **Multiple Targets**- Think about different devices. Access patterns on the backend look different for different devices. This adds complexity.

- **Increased user expectations**- Because of the high quality web applications bigger companies are able to produce, user expectations are a lot higher.

- **Microservices**

- **More powerful devices**- With better hardware and more powerful devices, people can do a lot more with their front-end code.

### Why We Need Front-end Abstractions

Is there a way to solve these problems easily? How can smaller teams with small budgets meet these expectations? This is where front-end abstractions come in.

Here's a list of some of the front-end abstractions you might be familiar with.

- Create React App

- NextJS/Gatsby

- React Native

- Styled Components

- GUI'S

- Managed Auth

- Managed GraphQL

These abstractions don't mean that there's no need to know how these things work under the hood.

## Back-end Abstractions

Back-end development used to look a lot different than what it does today.

Servers and infrastructure was often in house. But thre are problems that come with have _on premise_ servers and infrastructure.

### Why We Need Back-end Abstractions

Having everything on premise meant...

- if your office somehow got destroyed, your website or app would no longer work.

- in order to service users across world wide, you would need too maintain servers across the globe. Otherwise, users in different regions would have a hard time accessing your website.

How were these issues solved?

### Cloud and Serverless

Cloud and serverless technologies are how we're able to solve these problems.

With cloud...

- we don't have to deal with maintaining servers.

- we still have to worry about scaling, uptime, updating, and server patching.

With serverless...

- we don't have to deal with maintaining servers

- there's no need to deal uptime, updating, and server patching.

**Serverless is becoming the better solution**

## What's Next After Serverless

What's next after serverless?

[Cloud Computing Simplified- A Berkeley View on Serverless Computing](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf) is an interesting read on this subject.

Nader's biggest takeway from this paper is that serverless computing is made of two componesnts - **functions as a service (FaaS)** and **back-end as a service (BaaS)**.

Examples of BaaS include...

- Firebase
- AppSync
- Algolia

These are all **Managed Services**

The Berkely paper also predicts that...

- more BaaS storage services will become available - like MongoDB, FaunaDB

- serverless will become simpler - learning curve was pretty steep. Eventually it will become much easier.

- serverless will be much cheaper than servers, regardless of provisioning
  - Sometimes servers are still cheaper especially for bigger companies that have higher traffic
  - The standard now is that most start ups or business that have inconsistent user traffic utilize serverless
- serverful will become less important than serverless
- serverless will become the default paradigm in cloud era

## Serverless is a Spectrum

Serverless is more of a spectrum than a concrete standard. [Ben Kehoe](https://twitter.com/ben11kehoe) is a huge propenent of this idea.

Here are some things to check for when it comes to the serverless spectrum:

- Provides servicefull services and functions as a service

- Tighter correspondence between resources used and resources billed -> paying for what you use versus what's been provisioned

- Smaller and more abstracted control pane. This means that you'll have less code to worry about. No more infrastructure code writing. Managed services help take off some coding burden too.

### Serverless Functions and Servicefull Services

**Serverless functions** and **servicefull services** are two things on the serverless spectrum. But what do they do?

With both serverless functions and servicefull services ...

- we don't have to worry about server operations

- we can scale seamlessly

- we don't need to manage uptime

- we pay variable expense instead of a fixed expense

**Servicefull services** give us some extra capabilities.

- Codeless - meaning no backend code implemented on the frontend

- Assume responsibility for providing a defined set of services

The great thing about this is that you can do a lot with a just a few resources. On the flip side, these things could also limit you if you need to do something out of service scope.

Here are some examples of servicefull services:

- Cloudinary

- AuthO

- Algolia

- Netlify/Amplify

- Appsync/Hasura

- Rekognition

These are managed services.

## GraphQL

Data is very important. But it's a bit more difficult to abstract that layer away. How can we do that?

This is where GraphQL comes in. GraphQL offers a menu of what's available. What does this mean? It means that it makes it easier to digest data.

### Microservice Architecture

Microservice architecture is becoming very popular and whidely used. API gateways have improved with microservice architecture.

Without microservice architecuture, API Gateway have end points that send requests to microservices. The problem with this is that there are different implementation details that differ across different services. This slows down developer velocity becuase there is no consistetnt API data on the backend.

GraphQL can help solve these problems. GraphQL gives us a consistent API gateway. GraphQL abstracts away the API layer, increasing developer velocity.

GraphQL also offers **schema centric development**. This means we have...

- unified data graph

- single entry pint

- front end and backend in sync

- type safety throughout

- simple accesss tp data per client

- consistent API to microservices, lambda functions and databases

## Full Stack Serviceless

What exactly is **full stack serverless**? Here are some key characteristics of full stack serverless:

- Heavy and intentional use of managed services

- Serviceless functions are used to fill in the gaps

- Custom client SDK's for API interactions

- GraphQL is the main data source

### Full Stack Serverless Assumptions and Acknowledgements

- Agility is a key market differentiator
  - Increased developer velocity and efficiency -> Do more with less
- Code is a liability

- Front-end skillset increasingly valuable since a lot of front end stuff isn't easily abstracted away

- Deliberate focus on not reinventing the wheel

- Defintions of front-end vs back-end vs DevOps vs full-stack begin to blur

### Benefits of Full Stack Serverless

Here are some of the benefits of FSS:

- Front end devs move further up the stack

- Increased developer velocity and efficiency --> Do more with less

- Decreased comlexity

- More secure, reliable and scalable

### Drawbacks of Full Stack Serverless

Here are some of the drawbacks of FSS:

- Increased risk when service is no longer available and you have no control.

- Predefined feature set defines available functionality

- Bleeding edge

- Vendor Lock in

### What You Need to Build a Full Stack Serverless App

How can we build FSS apps? There are 4 pieces

1. Manages Services

2. Serverless GraphQL

3. Serverless functions

4. Web/mobile framework

### Full-stack Serverless Tools

What are some FSS tools?

1. Cloudinary, AuthO, Algolia

2. Hasura, CosmoDB, AppSync

3. Netlify, Now, Azure/GCP/AWS

## Conclusion

In conclusion, we can define full-stack in the era of serverless computing like this:

- The definition of front-end, back-end, DevOps, and full-stack begin to blur

- Front-end skill set becomes increasingly valuable

- Serverless becomes the default computing paradigm

- GraphQL becomes increasingly important

- Teams organized by feature vs platform or stack

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ceoraford"><img src="https://avatars2.githubusercontent.com/u/41582216?v=4" width="100px;" alt=""/><br /><sub><b>Ceora Ford</b></sub></a><br /><a href="#content-ceoraford" title="Content">🖋</a></td>
    <td align="center"><a href="https://laurosilva.com"><img src="https://avatars2.githubusercontent.com/u/57044804?v=4" width="100px;" alt=""/><br /><sub><b>Lauro Silva</b></sub></a><br /><a href="https://github.com/eggheadio-projects/egghead-egghead-talks-full-stack-development-in-the-era-of-serverless-computing/pulls?q=is%3Apr+reviewed-by%3Alaurosilvacom" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
