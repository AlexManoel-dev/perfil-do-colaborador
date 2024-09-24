import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborator-details-ui',
  templateUrl: './collaborator-details-ui.component.html',
  styleUrl: './collaborator-details-ui.component.scss',
})
export class CollaboratorDetailsUiComponent implements OnInit {
  @Input() details: any;

  titles: { [key: string]: string } = {
    birthDate: 'Aniversário',
    cellphoneNumber: 'Telefone',
    companyAdmissionDate: 'Tempo de atuação',
    email: 'Email',
    employeeName: 'Nome',
    jobName: 'Ocupação',
    courseName: 'Curso',
    entity: 'Entidade',
    period: 'Período',
    course: 'Curso',
    local: 'Instituição',
    language: 'Idioma',
    status: 'Status',
    job: 'Trabalho',
    company: 'Empresa'
  };

  ngOnInit(): void {
  }

  renderValues(cardItems: any | any[]) {
    const boldStyle = 'font-weight: bold;';

    if (Array.isArray(cardItems)) {
      // Array
      return cardItems.map(cardItem => {
        const properties = Object.entries(cardItem).map(([key, value]) => {
          return `<div class="mb-2"><strong style="${boldStyle}">${this.titles[key]}:</strong> ${value || 'N/A'}</div>`;
        }).join('');
        return `<div class="card mb-3"><div class="card-body">${properties}</div></div>`;
      }).join('');
    } else {
      // Object
      const properties = Object.entries(cardItems).map(([key, value]) => {
        return `<div class="mb-2"><strong style="${boldStyle}">${this.titles[key]}:</strong> ${value || 'N/A'}</div>`;
      }).join('');
      return `<div class="card mb-3"><div class="card-body">${properties}</div></div>`;
    }
  }
}
