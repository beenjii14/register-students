class LocalStorage {
  private tbStudents: Array<any>;
  constructor() {
    this.tbStudents = [];
  }

  public addStudent(data: any) {
    this.tbStudents = [...this.getTable()];
    const size = this.tbStudents.length;
    return new Promise((resolve, reject) => {
      this.add(data);
      if (size < this.tbStudents.length) {
        setTimeout(() => {
          resolve({ status: true });
        }, 2000);
      } else {
        reject();
      }
    });
  }

  public removeStudent(id: number) {
    this.tbStudents = [...this.getTable()];
    const size = this.tbStudents.length;
    return new Promise((resolve, reject) => {
      this.remove(id);
      if (size > this.tbStudents.length) {
        resolve({ status: true });
      } else {
        reject();
      }
    });
  }

  public getStudents() {
    this.tbStudents = [...this.getTable()];
    return new Promise((resolve, reject) => {
      resolve(this.tbStudents);
    });
  }

  public getStudent(id: number) {
    this.tbStudents = [...this.getTable()];
    const student: any = this.tbStudents[id];
    return new Promise((resolve, reject) => {
      resolve(student);
    });
  }

  private add(student: any) {
    this.tbStudents.push(student);
    this.setItem();
  }

  private remove(id: number) {
    this.tbStudents.splice(id, 1);
    this.setItem();
  }

  private setItem() {
    localStorage.setItem('tbStudents', JSON.stringify(this.tbStudents));
  }

  private getTable() {
    const students = localStorage.getItem('tbStudents');
    return students !== null ? JSON.parse(students) : [];
  }
}

const storage = new LocalStorage();

export default storage;
