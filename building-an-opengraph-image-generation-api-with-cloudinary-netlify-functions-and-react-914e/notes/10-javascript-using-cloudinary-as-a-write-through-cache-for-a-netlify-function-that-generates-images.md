# 10 - Using Cloudinary as a write-through cache for a Netlify Function that generates images

[Video Link](https://egghead.io/lessons/javascript-using-cloudinary-as-a-write-through-cache-for-a-netlify-function-that-generates-images)

<TimeStamp start="0:21" end="0:26">

[Cloudinary](https://cloudinary.com/) is an end-to-end image- and video-management solution for websites and mobile apps

</TimeStamp>

<TimeStamp start="1:09" end="1:17">

Navigate on the right side and click "Upload" button to upload images

</TimeStamp>

<TimeStamp start="1:48" end="2:12 ">

The version of the image is what we'll use in our function to invalidate the cache of the image if we upload a new generation function.

💡Another way to solve this problem is by adding a version number to the url you use on your website to call this function and generate your OpenGraph image. Because the url will change when you update the version number in the string cloudinary will build the function again.

</TimeStamp>

<TimeStamp start="2:16" end="2:24">

To create the new directory run `mkdir process-url` 

</TimeStamp>

<TimeStamp start="2:25" end="2:31">

To initialize a new package.json run `yarn init -y`  and to add cloudinary run `yarn add cloudinary`

</TimeStamp>

<TimeStamp start="2:57" end="3:01">

Note that we're using the V2 API, which is pretty important

</TimeStamp>

<TimeStamp start="4:53" end="5:00">

Remember, if you look at the image URL, it's the URL we're generating that goes to Cloudinary that we're passing in as the location. 

</TimeStamp>

<TimeStamp start="5:01" end="5:19">

We need to add the `cd functions/process-url && npm i` to our `Makefile`.  We can do anything we want inside of install, don't forget to add a `tab` at the beginning of each line, and also remember that each command is run in its own environment. 

</TimeStamp>

<TimeStamp start="5:20" end="5:37">

We use `&&` to chain the calls, first, we go into a directory, then we do an `npm install` and other steps needed. 

</TimeStamp>

<TimeStamp start="5:38" end="5:40">

[set your `ENV` variables in Netlify](https://docs.netlify.com/configure-builds/environment-variables/).

</TimeStamp>

<TimeStamp start="5:52" end="6:03">

We're going to need to set the image version, the `CLOUDINARY_KEY`, and the `CLOUDINARY_SECTRET`.

</TimeStamp>

<TimeStamp start="6:15" end="6:25">

We now have two functions. One function's job is to generate the image. The other functions job is to sign a URL and redirect us to Cloudinary.

</TimeStamp>

 

