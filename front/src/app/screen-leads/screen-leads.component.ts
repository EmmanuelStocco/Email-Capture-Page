import { Component, OnInit } from '@angular/core';
import { LeadService } from '../services/lead.service';

interface Lead {
  id?: string | null,
  username?: string | null,
  email?: string | null,
  city?: string | null,
  gender?: string | null
}

@Component({
  selector: 'app-screen-leads',
  templateUrl: './screen-leads.component.html',
  styleUrls: ['./screen-leads.component.css']
})
export class ScreenLeadsComponent implements OnInit {
  leadCadast?: boolean
  dataSource?: Lead[];
  form: Lead = {
    id: null,
    email: '',
    username: '',
    city: '',
    gender: ''
  };

  searchTypesGender = [
    {id: 'Masculino', type: 'Masculino'},
    {id: "Feminino", type: 'Feminino'},
  ];

  searchTypesCity = [
    {id: 'Franca', type: 'Franca'},
    {id: "Ribeirao", type: 'Ribeirao'},
    {id: 'Batatais', type: 'Batatais'},
    {id: "spaulo", type: 'São Paulo'},
  ];

  constructor(
    private leadService: LeadService,

  ) { }

  ngOnInit(): void {
  }

  submit(){
    const objToSave: Lead= {
      id: this.form.id,
      email: this.form.email,
      username: this.form.username,
      city: this.form.city,
      gender: this.form.gender
    }

    return this.leadService.createLead(objToSave).subscribe(data => {
      //this.location.back()
      this.leadCadast = true;
    }, (err) => {
      if(err && err.error)
      alert('deu error')
    })
  }

  title='screen_leads';

}
