const generateSampleData = (numItems, error) => {
  const retItems = Array(numItems).fill().map((_, i) => `Option ${i + 1}`);
  if (error) {
    retItems.push('Error Option');
  }
  return retItems;
};

export default generateSampleData;
