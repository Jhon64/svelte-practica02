import { writable } from "svelte/store";

export let searchCount = writable(0);

function searchFilms() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    actualizar: (value) => update((films) => (films = value)),
    reset: () => set({}),
  };
}

export const Resultsearch = searchFilms();
