# Use Cypress and Storybook to test your React Components in Isolation

**[📹 Video](https://egghead.io/lessons/egghead-use-cypress-and-storybook-to-test-your-react-components-in-isolation)**

Since we created a storybook with the `--configureCypress`, we can run Cypress with the command:

```shell
yarn nx run store-ui-shared-e2e:e2e
```

_**Note:** `store-ui-shared-e2e` was created because we added that `--configureCypress` flag._

We can use the `--watch` flag to the command that starts the Cypress test and allow us to see what is happening.

## References

- [Cypress](https://www.cypress.io/)
- [Course: Test Production Ready Apps with Cypress](https://egghead.io/courses/test-production-ready-apps-with-cypress)
- [Course: End to End Testing with Cypress](https://egghead.io/courses/end-to-end-testing-with-cypress)
