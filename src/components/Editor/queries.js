export const hasActiveMarks = ({ value }, type) => {
  if (!value.activeMarks.size) {
    return false;
  }

  return value.activeMarks.some(mark => mark.type === type);
};

export const hasInlines = ({ value }, type) => {
  if (!value.inlines.size) {
    return false;
  }

  return value.inlines.some(inline => inline.type === type);
};

export const hasDataKeyEqualValueInSomeBlocks = ({ value }, dataKey, dataValue) => {
  if (!value.blocks.size) {
    return false;
  }

  return value.blocks.some(block => block.get('data').has(dataKey) && block.get('data').get(dataKey) === dataValue);
};

export const getInlines = ({ value }, type) => value.inlines.filter(inline => inline.type === type);
