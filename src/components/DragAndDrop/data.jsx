let uniqueId = 0;

function getItems(count) {
  return Array.from({ length: count }, (v, k) => {
    const hey = uniqueId++;
    return {
      id: `id:${hey}`,
      text: `item ${hey}`,
      // axios use
    };
  });
}

const initial = {
  columns: {
    'column-0': {
      id: 'column-0',
      title: '1st Custom Column',
      items: getItems(10),
    },
    'column-1': {
      id: 'column-1',
      title: '2nd Custom Column',
      items: getItems(10),
    },
  },
  columnOrder: ['column-0', 'column-1'],
};

export default function InitialData() {
  return initial;
}
