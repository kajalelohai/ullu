export const recordify = (items: any[], id = 'id') =>
  items.reduce((a, i) => ({ ...a, [i[id]]: i }), {});
