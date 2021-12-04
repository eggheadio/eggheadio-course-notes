<div align="center">
  <img
    height="300"
    width="300"
    alt="Awesome Cheatsheets Logo"
    src="https://raw.githubusercontent.com/laurosilvacom/awesomecheatsheets/master/static/icon.png"
    align="center"
  />
</div>

# Welcome to `eggheadio-course-notes`

This repository is a community garden lead by the eggheadio team and [Learner Advocates](https://howtoegghead.com/advocate).

With `eggheadio-course-notes`, you gain further resources to enrich your learning experience on [egghead.io](http://egghead.io/).
You are encouraged to leverage these notes when taking an egghead course, share, iterate, and contribute to them.

# Getting Started

Each folder contains notes on a course. Inside each folder, you can find one or more of the following resources:

- `Notes`
- `Exercises`
  - `Community solutions`
- `Sketch Notes`

# Contribution

Learner Advocates create the initial set of notes. Once created, anyone from the community can contribute to the collection of notes.

- One set of notes per course
- If a course has already been covered, feel free to submit additions.

## Contributions we are looking for

We are looking for notes that explore holes in the material, fill in gaps, expand with alternative ideas, question the answers given, and give us a stronger sense of depth and understanding.

**This can take several forms.** Including, progressive summarization, sketch notes, illustrations, notes on deprecations, links to additional resources, and code examples.

## Submitting a contribution

- Fork `eggheadio/eggheadio-course-notes`
- Create a new branch
- Expand upon existing course notes
- Pull Request into `eggheadio/eggheadio-course-notes`

## First Pull Request

This is your first Pull Request? We recommend taking the following course:

- [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Code Review

The egghead team will review your contribution. You will hear back from one of the team members about your Pull Request in a timely manner. Either your Pull Request will be merged, or you will receive feedback on how it can be accepted.

## Community

If there is a course on [egghead.io](http://egghead.io/) that you would like to see notes, please feel free to file an issue with the course name.

If you see anything wrong or missing, please [file an issue](https://github.com/eggheadio/eggheadio-course-notes/issues/new)!

## Community Code of Conduct

This is a safe and collaborative environment to work together. This repository follows the **[egghead Community Code of Conduct](https://howtoegghead.com/code-of-conduct/)**.


# Creating Course Directories

1. Run `yarn` to install dependencies
2. Set up Auth
3. Create a file `~/.env` with these contents:
```
CLOUDINARY_API_KEY=insert-key-here
CLOUDINARY_API_SECRET=insert-key-here
CLOUD_NAME=insert-name-here
```
5. Run `yarn start`
6. Paste the course slug you are going to enhance, and hit enter
7. Check the `output` directory
8. ???
9. Profit!

AWS credentials can be created in [the management console](https://console.aws.amazon.com/console/home) for development. (You shouldn't have to worry about this)

## Set up Auth
1. Request a user token from an egghead team lead
 * They will generate an access token from a user on the *production* database
 * `User.find_by_email('example@user.com').access_tokens.create!`
2. Copy the .env-template file
3. Create a .env file
4. Paste what you copied to the contents of the file
5. Replace `YOUR-TOKEN-HERE` with requested token
