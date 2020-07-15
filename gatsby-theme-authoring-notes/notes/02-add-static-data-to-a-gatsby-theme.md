# Add Static Data to a Gatsby Theme

**[📹 Video](https://egghead.io/lessons/gatsby-add-static-data-to-a-gatsby-theme)**

## Summary

In this lesson we learn how to load data from MDX (or any data source) and ensure the necessary folders exist.

## ⚡ Getting the Data

In our gatsby-theme-events folder, add a new folder named "data" and within that create an events.yml file. Then, within that:

### gatsby-theme-events/data/events.yml
```
- name: React Rally
  location: Salt Lake City, UT
  start_date: 2019-08-22
  end_date: 2019-08-23
  url: https://www.reactrally.com/

- name: DinosaurJS
  location: Denver, CO
  start_date: 2019-06-20
  end_date: 2019-06-21
  url: https://dinosaurjs.org/

- name: JSHeroes
  location: Cluj-Napoca, Romania
  start_date: 2020-04-23
  end_date: 2020-04-24
  url: https://jsheroes.io/

- name: The Lead Developer
  location: Austin, TX
  start_date: 2019-11-08
  end_date: 2019-11-08
  url: https://austin2019.theleaddeveloper.com/
```
### ⚡ Reading the Data
In order to read the .yaml file above, we must install new dependencies as follows:
```
yarn workspace gatsby-theme-events add gatsby-source-filesystem gatsby-transformer-yaml
```
### gatsby-config.js
Next, within the gatsby-theme-events folder, create a gatsby-config.js

Following the lesson, our gatsby-config.js should look like:
```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'data'
      }
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Event'
      }
    }
  ]
}
```
### ⚡ Starting the GraphQL server
After running
```
yarn workspace gatsby-theme-events develop
```
We can access GraphQL at localhost:8000/\_\_\_graphql

![GraphQL playground](https://res.cloudinary.com/dg3gyk0gu/image/upload/v1593019628/transcript-images/02-add-static-data-to-a-gatsby-theme-graphql-playground.png)

Opening up *allEvent* then *nodes* on the side bar **allows us to query properties of our events.**

## Resources
- [Lesson 2 Code](https://github.com/ParkerGits/authoring-gatsby-themes/tree/02-gatsby-add-static-data-to-a-gatsby-theme)
- [Gatsby Plugin Configuration](https://www.gatsbyjs.org/docs/gatsby-config/#plugins)
- [YAML Syntax](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)
- [GraphQL](https://graphql.org/)
