import { Injectable } from "@nestjs/common";

export interface TestObject {
  id: number,
  name: string,
  [key: string]: any
}

@Injectable()
export class CrudService {
  returnData(): Array<TestObject> {
    const result: Array<TestObject> = [];

    for (let i = 0; i < 10; i++) {
      result.push({ id: i, age: 10 + i, name: "person_" + i });
    }

    return result;
  }

  postData(times: number): Array<TestObject> {
    const result: Array<TestObject> = [];

    for (let i = 0; i < times; i++) {
      result.push({ id: i, name: "object_" + i });
    }
    return result;
  }

  deleteData(id: number): Array<TestObject> {
    const result: Array<TestObject> = [];

    for (let i = 0; i < id + 5; i++) {
      result.push({ id: i, name: "object_" + i });
    }

    for (let obj of result) {
      if (obj.id == id) {
        result.splice(result.indexOf(obj), 1);
      }
    }

    return result;
  }

  updateData(id: number, newId: number): Array<TestObject> {
    const result: Array<TestObject> = [];

    for (let i = 0; i < id + 5; i++) {
      result.push({ id: i, name: "object_" + i });
    }

    for (let obj of result) {
      if (obj.id == id) {
        obj.id = newId
      }
    }

    return result;
  }
}
