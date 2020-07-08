import Http from './http';

class SpecieService {
  add(data: any) {
    return Http.post(data);
  }

  get() {
    return Http.get();
  }

  getById(id: number) {
    return Http.getById(id);
  }

  remove(id: number) {
    return Http.delete(id);
  }
}

const service = new SpecieService();

export default service;
