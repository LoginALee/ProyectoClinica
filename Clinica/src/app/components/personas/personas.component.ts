import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona';

declare var M: any;
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  providers: [PersonaService]
})
export class PersonasComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.getPersonas();
  }

  addPersona(form: NgForm){
    if(form.value._id){
      this.personaService.putPersona(form.value)
        .subscribe(res =>{
          console.log(res);
        })
    }
    else{
      this.personaService.postPersona(form.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Persona guardada'});
      this.getPersonas();
      })
    }
    
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.personaService.selectedPersona = new Persona();
    }
  }

  getPersonas(){
    this.personaService.getPersonas()
      .subscribe(res => {
        this.personaService.personas = res as Persona[];
        console.log(res);
      })
  }

  editPersona(persona: Persona){
    this.personaService.selectedPersona = persona;
  }

  deletePersona(_id: String){
    if(confirm('Estas seguro de borrar a esta persona?')){
      this.personaService.deletePersona(_id)
        .subscribe(res =>{
          this.getPersonas();
          M.toast({html: 'Persona eliminada!'});
        })
    }
    
  }

}
