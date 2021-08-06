# Create PostgreSQL Tables Using Supabase's Interface

[Video link](https://www.egghead.io/lessons/supabase-create-postgresql-tables-using-supabase-s-interface?pl=supabase-84e58958)

<TimeStamp start="0:10" end="0:20">

The first table will be named `user`. Description is `Users for our app`. 

</TimeStamp>

<TimeStamp start="0:25" end="0:35">

Name will be an `id` and the Type can be what you want, but for this project it is going to be a `uuid` for more security. Then hit save. 

</TimeStamp>

<TimeStamp start="1:37" end="01:50">

The name of the new column will be `username`. Description is `Public username in interface`. Type is a value of `text`. 

</TimeStamp>

<TimeStamp start="1:37" end="01:50">

Here is a quick [uuid generator](https://www.uuidgenerator.net/)

</TimeStamp>

<TimeStamp start="3:10" end="03:20">

Name will be `message`. Description will be `messages sent from users`. 

</TimeStamp>

<TimeStamp start="3:57" end="04:07">

The first column's name is `content`. Description is `The content of the message`. 

</TimeStamp>

<TimeStamp start="4:17" end="04:22">

The second column's name is `created_at` with a type of `timestamp`.

</TimeStamp>

<TimeStamp start="5:00" end="05:28">

The third column's name is `user_id`. This will be used to corresponding different tables together. It will be a type of `UUID`. For the Foreign Key Relation, the Table will be `user` and the `column` will be `id`.

</TimeStamp>

<TimeStamp start="5:50" end="06:05">

To create a new message, go to the message tab, the `id` will be auto generated, fill in the `content` with text, paste in the `user_id`, then hit `save`. 

</TimeStamp>