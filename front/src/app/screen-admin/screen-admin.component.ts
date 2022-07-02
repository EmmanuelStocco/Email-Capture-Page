import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LeadService } from '../services/lead.service';
interface Lead {
  id?: string | null,
  username?: string | null,
  email?: string | null
}
@Component({
  selector: 'app-screen-admin',
  templateUrl: './screen-admin.component.html',
  styleUrls: ['./screen-admin.component.css']
})
export class ScreenAdminComponent implements OnInit {
  dataSource?:any;
  result?: string;
  inProcessXML: boolean = false;
  page: number = 0;
  size: number = 5;
  totalItems: number = 0;

  formSearch = this.fb.group({
    type: '',
    value: '',
    dataInicial: '',
    dataFinal: ''
  })

  searchTypes = [
    // {id: 'nome', type: 'Nome'},
    // {id: 'email', type: 'Email'},
    {id: 'cidade', type: 'Cidade'},
    {id: "sexo", type: 'Sexo'},
  ];

  constructor(
    private leadService: LeadService,
    private fb: FormBuilder
  ) { }

  fileToUpload: File | null = null;

  submit() {
    console.log(this.formSearch.value);
    this.leadService.getLeadByFilter(this.formSearch.value.type, this.formSearch.value.value).subscribe(data => {
      this.dataSource = data.clients;
      this.totalItems = data.totalItems;
    });
  };

  a(){
    alert('alertando')
  }

  clear(){
    this.leadService.getAllLeads(this.page, this.size).subscribe(data => {
      this.dataSource = data.clients;
      this.totalItems = data.totalItems
    })
    this.formSearch.reset();
  }

  ngOnInit(): void {
    this.leadService.getAllLeads(this.page, this.size).subscribe(data => {
      this.dataSource = data.clients;
      this.totalItems = data.totalItems;
    });
  };

  downloadFile(data: any) {
    const blob = new Blob([data], {type: 'text/xml'});
    let downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.setAttribute('download', 'clients.xml');
    document.body.appendChild(downloadLink);
    downloadLink.click();
    alert('Download inciado com sucesso')
  };

  exportFile(){
    this.leadService.getExportFile().subscribe({
      next: data => {
        this.downloadFile(data)
        this.result = data;
      },
      error: err => {
        alert('deu errado')
      }
    })
  };

  nextAndReturnPage(page: any){
    this.leadService.getAllLeads(page -1, this.size).subscribe(data => {
      this.dataSource = data.clients
      this.totalItems = data.totalItems
    });
  };



}
