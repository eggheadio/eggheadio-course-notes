[Video Link](https://egghead.io/lessons/graphql-explore-refactored-graphql-queries)

## Summary

In this lesson we go over the refactored Pet Library and get a look at some of the new queries.

## Notes

Our refactored pet library just got some new queries and can be found at [https://funded-pet-library.moonhighway.com/](https://funded-pet-library.moonhighway.com/).

With the updates, we can now query `totalPets`, `availablePets`, `checkedOutPets` and `customersWithPets` without any additional filters. 🎉

```graphql
query {
  customersWithPets {
    username
    name
  }
  totalPets
  availablePets
  checkedOutPets
}
```

![alt text](https://i.ibb.co/jbZsnvG/scrnli-1-25-2020-2-06-14-PM.png)
