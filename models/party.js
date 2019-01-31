
const generateId = (() => {
  let id = 0;
  return function x() {
    id += 1;
    return id;
  };
})();

class Party {
  constructor() {
    this.list = [];
  }

  post(entry) {
    const { name, hqAddress, logoUrl } = entry;
    const id = generateId();
    this.list.push({
      id, name, hqAddress, logoUrl,
    });
    return { id, name };
  }

  getOne(id) {
    const party = this.list.find(elem => elem.id === id);
    const { name, logoUrl } = party;
    return { id, name, logoUrl };
  }

  getAll() {
    const parties = this.list;
    const filter = parties.map((party) => {
      const { id, name, logoUrl } = party;
      return { id, name, logoUrl };
    });
    return filter;
  }

  patch(id, prop) {
    const party = this.list.find(elem => elem.id === id);
    const i = this.list.indexOf(party);

    this.list[i].name = prop;
    const { name } = this.list[i];
    return { id, name };
  }

  delete(id) {
    const party = this.list.find(elem => elem.id === id);
    const index = this.list.indexOf(party);
    this.list.splice(index, 1);
    return { message: 'Party deleted successfully.' };
  }
}

module.exports = new Party();
