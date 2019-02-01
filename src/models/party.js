
const generateId = (() => {
  let id = 7;
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
      {
        id: 3,
        name: 'Party Three',
        hqAddress: 'Ojota, Lagos, Nigeria',
        logoUrl: 'http://exampleThree.com',
      },
      {
        id: 4,
        name: 'Party Four',
        hqAddress: 'Ojota, Lagos, Nigeria',
        logoUrl: 'http://exampleFour.com',
      },
      {
        id: 5,
        name: 'Party Five',
        hqAddress: 'Ojota, Lagos, Nigeria',
        logoUrl: 'http://exampleFive.com',
      },
      {
        id: 6,
        name: 'Party Six',
        hqAddress: 'Ojota, Lagos, Nigeria',
        logoUrl: 'http://exampleSix.com',
      },
      {
        id: 7,
        name: 'Party Seven',
        hqAddress: 'Ojota, Lagos, Nigeria',
        logoUrl: 'http://exampleSeven.com',
      },
    ];
  }

  create(entry) {
    const { name, hqAddress, logoUrl } = entry;
    const id = generateId();
    this.list.push({
      id, name, hqAddress, logoUrl,
    });
    return { id, name };
  }

  findOne(id) {
    return this.list.find(elem => elem.id === id);
  }

  findAll() {
    return this.list;
  }

  update(id, prop) {
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

export default new Party();
