# []()

<TimeStamp start="0:07" end="0:20">

In this lesson we are going to test the accessability of our app in the web browser using selenium, a browser automation library, and `@axe-core` Run `npm install selenium-webdriver @ace-core/webdriverjs --save -dev`

</TimeStamp>

<TimeStamp start="0:35" end="0:40">

To install the necessary dependencies follow this [tutorial](https://www.selenium.dev/documentation/getting_started/installing_browser_drivers/)

</TimeStamp>

<TimeStamp start="2:40" end="2:45">

We run the script `node src/login/tests/Login.e2e-test.js`

</TimeStamp>

<TimeStamp start="3:39" end="3:55">
 
 In the report you are going to be looking for the *violations* property, in this section you'll find all the rules the page violated, there will be a description, suggested solution and extra resources, id, the impact, the node and tags for the violation. 

</TimeStamp>
