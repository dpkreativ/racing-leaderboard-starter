// --- Helper functions ---
// =================================================================

// function to sort data by duration
export function sortData(data) {
  return data.sort((a, b) =>
    a.duration > b.duration ? 1 : a.duration < b.duration ? -1 : 0
  );
}

// function to update state with value
export function updateState(state, newValue) {
  // check if new value exists
  const i = state.findIndex((x) => x.$id === newValue.$id);

  // update state
  if (i !== -1) {
    state[i] = newValue;
  } else {
    state = { ...state, ...newValue };
  }

  // sort data
  sortData(state);
}
