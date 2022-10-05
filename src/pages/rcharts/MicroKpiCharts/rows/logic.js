function divideIntoQuarters(entryIndex, numberOfEntries) {
  for (let i = 1; i < 5; i += 1) {
    if (entryIndex < ((numberOfEntries / 4) * i)) {
      return i;
    }
  }
  return 1;
}

function createSampleMicroData(entries = 4, withEdgeCases = false) {
  const newEntries = new Array(entries).fill(null).map((_x, index) => ({
    value: (index + 1) * 200,
    quarter: `Q${divideIntoQuarters(index, entries)}`,
  }));

  return withEdgeCases ? newEntries.map((entry) => {
    const zeroValuedEntry = Object.assign(entry, { value: 0 });
    return zeroValuedEntry;
  }) : newEntries;
}

export { divideIntoQuarters, createSampleMicroData };
