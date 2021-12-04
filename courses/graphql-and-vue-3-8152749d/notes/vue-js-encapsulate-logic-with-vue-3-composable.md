# GraphQL and Vue 3 what is composable

[Video link](https://www.egghead.io/lessons/egghead-graphql-and-vue-3-what-is-composable?pl=graphql-and-vue-3-8152749d)

composables are like custom hooks. Contain common logic

<TimeStamp start="0:29" end="0:33">
  
  Prefix composable names with `use`. Like React hooks
  
</TimeStamp>

<TimeStamp start="1:30" end="1:36">
  
  Make sure to import and use `computed` for computed values in your composables
  
</TimeStamp>

with the options API you just import your composable and destructure it in a `setup` object inside your export. Then you return the destructured variables. 

setup script is more straightforward. All you do is import and destructure

composable is for grouping logic and safe guards reactive data 