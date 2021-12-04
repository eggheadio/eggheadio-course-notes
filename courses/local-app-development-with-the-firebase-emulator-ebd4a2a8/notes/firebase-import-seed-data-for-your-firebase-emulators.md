<TimeStamp start="0:50" end="1:00">
  
  Emulator data is lost on restart since it is all in memory
  
</TimeStamp>

<TimeStamp start="2:10" end="2:20">
  
  You can export the current data in the database with `firebase emulators:export` and a path to wherever you'd like the backup to be stored. `./emulators.backup` is the standard convention.
  
</TimeStamp>

<TimeStamp start="3:20" end="3:35">
  
  You have to use the `--import` flag to get the seed data each time you start the emulators. This is a good opportunity to create an alias.
  
</TimeStamp>