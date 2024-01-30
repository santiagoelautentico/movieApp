import { useFetch } from "../useFetch";
export function ListCardFunction() {
  const { data } = useFetch(
    "https://movieapp-e34d0-default-rtdb.firebaseio.com/movies"
  );
  return (
    <article>
      <ul>
        {data?.map((movies) => (
          <li key={movies.id}>{movies.name}</li>
        ))}
      </ul>
    </article>
  );
}
