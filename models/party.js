
const generateId = (() => {
  let id = 2;
  return () => {
    id += 1;
    return id;
  };
})();

class Party {
  constructor() {
    this.list = [
      {
        id: 1,
        name: 'Party One',
        hqAddress: 'Berger, Lagos, Nigeria',
        logoUrl: 'http://exampleone.com',
      },
      {
        id: 2,
        name: 'Party Two',
        hqAddress: 'Ojota, Lagos, Nigeria',
        logoUrl: 'http://exampletwo.com',
      },
    ];
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
    return this.list.find(elem => elem.id === id);
  }

  getAll() {
    return this.list;
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
