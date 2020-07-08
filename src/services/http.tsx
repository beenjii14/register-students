import storage from './localStorage';
class HttpService {
  post(student: any) {
    return storage.addStudent(student);
  }

  get() {
    return storage.getStudents();
  }

  getById(id: number) {
    return storage.getStudent(id);
  }

  delete(id: number) {
    return storage.removeStudent(id);
  }
}

const http = new HttpService();
export default http;
