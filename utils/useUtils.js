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

// function to format race duration
export function formatDuration(duration) {
  let hours = Math.floor(duration / 3600);
  let minutes = Math.floor((duration - hours * 3600) / 60);
  let seconds = Math.floor(duration - hours * 3600 - minutes * 60);

  const dd = (x) => {
    return x.toString().length === 1 ? `0${x}` : x;
  };

  return `${dd(hours)} : ${dd(minutes)} : ${dd(seconds)}`;
}

// function to format race position
export function formatPosition(position) {
  if (position === 1) {
    return `${position}st`;
  } else if (position === 2) {
    return `${position}nd`;
  } else if (position === 3) {
    return `${position}rd`;
  } else {
    return `${position}th`;
  }
}
