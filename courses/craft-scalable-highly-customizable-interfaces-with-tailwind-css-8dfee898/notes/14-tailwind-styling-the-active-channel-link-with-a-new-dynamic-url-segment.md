# 14 - Styling the Active Channel Link with a New Dynamic URL Segment
## Notes

<TimeStamp start="7:08" end="7:10">

```jsx
active ||= router.asPath === href; 
```

</TimeStamp>

<TimeStamp start="7:11" end="7:15">

```jsx
let icon = channel.icon ? Icons(channel.icon) : Icons.Hashtag;
let router = useRouter();
let active = +channel.id === +router.query.cid;
```

</TimeStamp>