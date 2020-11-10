# The Project

## The Brief

Our clients wants to continue working on the demo that you built for them using React and GraphQL subscriptions (the finished course demo!). With the proof of concept finished, a real-time chat through GitHub issues, your job is to build on this feature by displaying all the issues in a repository as a list.

The client liked the real-time nature of the chat app and wants you to implement a similer user experience for viewing the list of issues.

## Requirements

- [ ] (1) Build out query for initial load
- [ ] (2) Build out subscription for conversations that are started while in the app
- [ ] (3) Integrate GraphQL queries into React App
- [ ] (4) Display GraphQL data as a list
    - Each list item should: 
        - (4a) contain the title of the issue
        - (4b) total comment count
        - (4c) preview last comment (if available)

### Stretch Goals

- [ ] (5) Navigate to individual issue conversations from list
    - (5a) Parameterize issue being loaded as React props
    - (5b) add state to keep track of current issue
- [ ] (6) Build a form to add a issue to the list
    - (6a) Add mutation to create new issue

## Hints

- (1)  Query Multiple Services with OneGraph GraphiQL Editor
- (2)  Write a Subscription GraphQL Query with Urql
- (3)  Use a GraphQL Query and Subscription Together to Fetch the History and Current Comments
- (4)  Display GraphQL Subscription Results to the UI
- (4)  Display GraphQL Data with a React Compontent
- (6)  Use a GraphQL Mutation to Create a GitHub Issue Comment
- (6a) Use Urqls useMutation to Create GitHub Issues in a React App

