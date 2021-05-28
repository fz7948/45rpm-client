import axios from 'axios';

let uniqueId = 0;

const getItems = (count) => {
  return Array.from({ length: count }, (v, k) => {
    const hey = uniqueId++;
    return {
      id: `id:${hey}`,
      text: `hey ${hey}`,
    };
  });
};

const initial = {
  columns: {
    'column-0': {
      id: 'column-0',
      title: 'My SongList',
      items: getItems(10),
    },
  },
  columnOrder: ['column-0'],
};

export default function InitialData() {
  return initial;
}
