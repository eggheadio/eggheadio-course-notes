# [Advanced SQL for Professional Devlopers](https://egghead.io/courses/advanced-sql)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-9-orange.svg?style=flat-square)](#contributors)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

<p align="center"><img src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/449/full/egh_adv-sql_1000.png" width="300"/></p>

## About

These are notes for the [Advanced SQL for Professional Devlopers](https://egghead.io/courses/advanced-sql) course on by [Tyler Clark](https://twitter.com/iamtylerwclark).

They are designed to be studied along side the course. Please add to them and put in a PR, we'd love to hear your thoughts!

## Description

You've got some practice with using SQL to select, update, and join database tables.

But perhaps you've found yourself with a sneaking suspicion that you could be more efficient with your PostgreSQL.

Does your query seem slow?

A lesson on how to profile queries will point you in the direction of a fix.

Are you performing multi-step operations one at a time that are susceptible to errors?

The "all or nothing" transaction is the cure.

These are just a couple of examples of the techniques, tips, and tricks that Tyler Clark has learned in his years of experience working on large scale production applications.

Other topics in this course include working with CSV files, different techniques for aggregating & filtering, and more!

Watch Tyler's course, and continue your journey toward SQL mastery.

## What you'll learn:

- Bulk insert and export from csv
- Casting types in SQL
- Define Custom Types (like ENUMs) for data integrity
- Analyze query performance for optimal queries
- Write concise queries with CTE's (Common Table Expressions) and do/declare blocks
- Filter Aggregate data with having
- Guarantee database interactions with Transactions
- Complex pattern matching

## Essential Questions

_These are the questions that you ask yourself to understand better the content in front of you and connect these ideas to what you have learned in the past._

How does database architecture affect your sql queries?

How much, as a web developer, is this going to be applicable to me?

When should I performance tune my queries?

## Prerequisites

This course picks up from where [Tyler Clark's SQL Fundamentals course](https://egghead.io/courses/sql-fundamentals) leaves off. It's recommended to view the course before diving into these lessons.

- Familiarity with the CRUD actions in SQL.
- Some knowledge in table relationships, conditional selection, data types, aggregate functions, and subqueries.

## Notes Table of Contents

- [01- Bulk Insert And Export Files](notes/01-bulk-insert-and-export-files.md)
- [02- Conflict Do Something](notes/02-on-conflict-do-something.md)
- [03- Casting Types in SQL](notes/03-casting-types-in-sql.md)
- [04- Create a Custom enum Type](notes/04-create-a-custom-enum-type.md)
- [05- Profiling Queries with Explain Analyze](notes/05-profiling-queries-with-explain-analyze.md)
- [06- Common Table Expressions in SQL](notes/06-common-table-expressions-in-sql.md)
- [07- Conditional returns with case / then](notes/07-conditional-returns-with-case-then.md)
- [08- Create Variables and Blocks with Do / Declare](notes/08-create-variables-and-blocks-with-do-declare.md)
- [09- Perform Multiple Steps in One with Transactions](notes/09-perform-multiple-steps-in-one-with-transactions.md)
- [10- Filter Grouped and Aggregated Data with Having](notes/10-filter-grouped-and-aggregated-data-with-having.md)
- [11- Create and Safely Handle Nulls in SQL](notes/11-create-and-safely-handle-nulls-in-sql.md)
- [12- Aggregate Inline filters in SQL](notes/12-aggregate-inline-filters-in-sql.md)
- [13- Pattern Matching and Regular Expressions in SQL](notes/13-pattern-matching-and-regular-expressions-in-sql.md)
- [14- Work with JSON Data in SQL](notes/14-work-with-json-data-in-sql.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ceoraford"><img src="https://avatars2.githubusercontent.com/u/41582216?v=4" width="100px;" alt=""/><br /><sub><b>Ceora Ford</b></sub></a><br /><a href="#content-ceoraford" title="Content">🖋</a></td>
    <td align="center"><a href="https://williamjohnson.dev/"><img src="https://avatars2.githubusercontent.com/u/40403549?v=4" width="100px;" alt=""/><br /><sub><b>William Johnson</b></sub></a><br /><a href="https://github.com/eggheadio-projects/advanced-sql-for-professional-developers/pulls?q=is%3Apr+reviewed-by%3Awjohnson85" title="Reviewed Pull Requests">👀</a> <a href="#maintenance-wjohnson85" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://www.dev.to/thecodepixi"><img src="https://avatars2.githubusercontent.com/u/16492325?v=4" width="100px;" alt=""/><br /><sub><b>Emily Harber</b></sub></a><br /><a href="#content-thecodepixi" title="Content">🖋</a></td>
    <td align="center"><a href="https://zacjones.io"><img src="https://avatars2.githubusercontent.com/u/6188161?v=4" width="100px;" alt=""/><br /><sub><b>Zac Jones</b></sub></a><br /><a href="https://github.com/eggheadio-projects/advanced-sql-for-professional-developers/pulls?q=is%3Apr+reviewed-by%3Azacjones93" title="Reviewed Pull Requests">👀</a> <a href="#infra-zacjones93" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://laurosilva.com"><img src="https://avatars2.githubusercontent.com/u/57044804?v=4" width="100px;" alt=""/><br /><sub><b>Lauro Silva</b></sub></a><br /><a href="#content-laurosilvacom" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Creeland"><img src="https://avatars2.githubusercontent.com/u/518406?v=4" width="100px;" alt=""/><br /><sub><b>Creeland A. Provinsal </b></sub></a><br /><a href="https://github.com/eggheadio-projects/advanced-sql-for-professional-developers/pulls?q=is%3Apr+reviewed-by%3ACreeland" title="Reviewed Pull Requests">👀</a> <a href="#content-Creeland" title="Content">🖋</a></td>
    <td align="center"><a href="http://maggieappleton.com"><img src="https://avatars0.githubusercontent.com/u/5599295?v=4" width="100px;" alt=""/><br /><sub><b>Appleton</b></sub></a><br /><a href="#design-MaggieAppleton" title="Design">🎨</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/oboshto"><img src="https://avatars3.githubusercontent.com/u/903622?v=4" width="100px;" alt=""/><br /><sub><b>Oboshto</b></sub></a><br /><a href="#content-oboshto" title="Content">🖋</a></td>
    <td align="center"><a href="http://darkwark.com"><img src="https://avatars0.githubusercontent.com/u/1868217?v=4" width="100px;" alt=""/><br /><sub><b>Kamil Khadeyev</b></sub></a><br /><a href="#design-darkwark" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
