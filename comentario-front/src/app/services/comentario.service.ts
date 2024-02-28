import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

 private http = inject(HttpClient);

 list(){
  return this.http.get('http://localhost:9001/api/comentario');
 }

 get(id: number){
  return this.http.get(`http://localhost:9001/api/comentario/${id}`);
 }

 create(comentario: any){
  return this.http.post('http://localhost:9001/api/comentario', comentario);
 }

 update(id: number, comentario: any){
  return this.http.put(`http://localhost:9001/api/comentario/${id}`, comentario);
 }

 delete(id: number){
  return this.http.delete(`http://localhost:9001//api/comentario/${id}`);
 }

}
