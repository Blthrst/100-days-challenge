import { Injectable } from '@nestjs/common';

@Injectable()
export class CrudService {
  returnData(): Array<Object> {
    const result: Array<Object> = [];

    for (let i = 0; i < 10; i++) {
      result.push({id: i, age: 10+i, name: "person_"+i});
    }

    return result
  }

  postData(times: number): Array<Object> {
    const result: Array<Object> = []

    for (let i = 0; i < times; i++) {
        result.push({id: i, name: "object_"+i})
    }
    return result
  }
}
