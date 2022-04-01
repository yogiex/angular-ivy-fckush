import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AdminService {
  url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.url}/data`);
  }
  postData() {
    let datas = {};
    return this.http.post(`${this.url}/data`, datas);
  }
  updateData({ id, data }) {
    let datas = {};
    return this.http.put(`${this.url}/data`, datas);
  }
  deleteData(id) {
    return this.http.delete(`${this.url}/data/${id}`);
  }
}
