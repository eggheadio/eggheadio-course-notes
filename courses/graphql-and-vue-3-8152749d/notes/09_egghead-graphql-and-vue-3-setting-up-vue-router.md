# GraphQL and Vue 3 setting up vue router

[Video link](https://www.egghead.io/lessons/egghead-graphql-and-vue-3-setting-up-vue-router?pl=graphql-and-vue-3-8152749d)

<TimeStamp start="0:01" end="0:05">
  
  `npm i vue-router@next`
  
</TimeStamp>

create router folder

create index.js

tracking navigation history is important in an SPA 

<TimeStamp start="0:55" end="1:15">
  
  Each object has three keys. `path`, `name` (optional), and `component`.
  
</TimeStamp>

create the router. Pass create web history and the routes array

<TimeStamp start="2:06" end="2:11">
  
  `.use(router)` BEFORE you mount your app
  
</TimeStamp>