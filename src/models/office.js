
const idGenerator = (() => {
  let id = 3;
  return () => {
    id += 1;
    return id;
  };
})();

class Office {
  constructor() {
    this.list = [
      {
        id: 1,
        type: 'Federal',
        name: 'President',
      },
      {
        id: 2,
        type: 'Legislative',
        name: 'Senate',
      },
      {
        id: 2,
        type: 'State',
        name: 'Governor',
      },
    ];
  }

  create(entry) {
    const { type, name } = entry;
    const id = idGenerator();
    this.list.push({ id, type, name });
    return { id, type, name };
  }

  findOne(id) {
    return this.list.find(elem => elem.id === id);
  }

  findAll() {
    return this.list;
  }
}

export default new Office();
