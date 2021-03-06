import { useState, useEffect, useContext } from "react";
import API from '../API';

// Context
import { SearchContext } from "../searchContext";

export const useActorFetch = actorId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { actors, setActors } = useContext(SearchContext);

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

    // check to see if the current actorid exists in the context of the app
    const actorContext = Object.keys(actors).find(actor => actor === actorId);

    if (actorContext) {
      setState(actors[actorContext]);
      setLoading(false);
      return;
    }

    fetchActor();
  }, [actorId]); // ignore actors dependancy, goes into infinite loop if included

  // use effect to store the actor to the Acotrs in the Context, easy reload reducing API calls
  useEffect(() => {
    setActors({
      ...actors,
      [actorId]: state
    })
  }, [actorId, state, setActors]); // ignore actors dependancy, goes into infinite loop if included

  return { state, loading, error };
};
