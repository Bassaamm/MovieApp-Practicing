import { useQuery } from "react-query";
import { getMovieList } from "../service/MoviedbApi";

export function useMovieInfo(movieKey: string) {
  let movieApi = `movie/${movieKey}`;
  const { data, isLoading, error } = useQuery({
    queryKey: [movieApi],
    queryFn: () => getMovieList(movieApi),
  });
  console.log(data);
  return { data, isLoading, error };
}
