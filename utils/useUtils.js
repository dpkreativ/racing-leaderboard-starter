// --- Helper functions ---
// =================================================================

// function to sort data by duration
export function sortData(data) {
  return data.sort((a, b) =>
    a.duration > b.duration ? 1 : a.duration < b.duration ? -1 : 0
  );
}
