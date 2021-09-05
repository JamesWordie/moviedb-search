import { useState, useEffect, useContext } from "react";
import API from '../API';

// Helpers
import { isPersistedState } from "../helpers";

// Context
import { SearchContext } from "../searchContext";

export const useActorFetch = actorId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { actors, setActors } = useContext(SearchContext);
  console.log(actors)

  useEffect(() => {
    const fetchActor = async () => {
      try {
        setLoading(true);
        setError(false);

        const actor = await API.fetchActor(actorId);
        const movieCredits = await API.fetchActorMovies(actorId);

        let topMovies = movieCredits.cast.filter(
          rating => rating.vote_average >= 7
        ).sort(
          (a, b) => a.vote_average >= b.vote_average
        );

        topMovies = topMovies.length > 20 ? topMovies.slice(0,19) : topMovies;

        setState({
          ...actor,
          movies: topMovies
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }

    // const sessionState = isPersistedState(actorId);
    const actorContext = Object.keys(actors).find(actor => actor === actorId);
    console.log(actors[actorContext])

    if (actorContext) {
      setState(actorContext);
      setLoading(false);
      return;
    }

    fetchActor();
  }, [actorId]);

  useEffect(() => {
    // sessionStorage.setItem(actorId, JSON.stringify(state));
    setActors({
      ...actors,
      [actorId]: state
    })
  }, [actorId, state, setActors]);

  return { state, loading, error };
};
