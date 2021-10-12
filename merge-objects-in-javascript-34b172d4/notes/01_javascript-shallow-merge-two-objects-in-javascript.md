# Shallow Merge Two Objects in JavaScript

[Video link](https://www.egghead.io/lessons/javascript-shallow-merge-two-objects-in-javascript?pl=merge-objects-in-javascript-34b172d4)

<TimeStamp start="00:50" end="01:05">

Object.assign will copy all enumerable own properties from one or more source objects to a target object. Keep in mind though that this will replace the original object. 

</TimeStamp>

<TimeStamp start="01:30" end="01:45">

To not completely replace that original object, you can add a third parameter to Object.assign, an empty object {}. This will allow you to update the `merge` object without replacing the `person` object. 

</TimeStamp>

<TimeStamp start="03:00" end="03:15">

The simple spread (...) operator works very similarly to Object.assign. It is important to note that it is only for shallow merges. If you have an object inside of an object, that will get overridden during the merge. 

</TimeStamp>