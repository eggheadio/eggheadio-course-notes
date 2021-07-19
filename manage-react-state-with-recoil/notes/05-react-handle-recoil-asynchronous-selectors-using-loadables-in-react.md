<TimeStamp start="0:46" end="1:00">

Unlike `useRecoilValue()`, [useRecoilValueLoadable()](https://recoiljs.org/docs/api-reference/core/useRecoilValueLoadable/) will not throw an Error or Promise when reading from an asynchronous selector (for the purpose of working alongside React Suspense). Instead, this hook returns a Loadable object.

</TimeStamp>