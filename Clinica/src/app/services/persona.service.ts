import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  selectedPersona: Persona;
  personas: Persona[];
  readonly URL_API = 'http://localhost:3000/api/clinica';

  constructor(private http: HttpClient) {
      this.selectedPersona = new Persona();
   }

   getPersonas(){
     return this.http.get(this.URL_API);
   }

   postPersona(Persona: Persona){
     return this.http.post(this.URL_API, Persona);
   }

   putPersona(Persona: Persona){
     return this.http.put(this.URL_API + `/${Persona._id}`, Persona);
   }

   deletePersona(_id: String){
     return this.http.delete(this.URL_API + `/${_id}`);
   }

}
