import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoaDto } from 'src/app/models/PessoaDto';
import { API_CONFIG } from 'src/app/config/api.config';
import { Injectable } from '@angular/core';

@Injectable()
export class PessoaService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<PessoaDto[]> {
    return this.http.get<PessoaDto[]>(`${API_CONFIG.baseUrl}/pessoa`);
  }

  findById(id: number): Observable<PessoaDto> {
    return this.http.get<PessoaDto>(`${API_CONFIG.baseUrl}/pessoa/${id}`);
  }

  insert(pessoa: PessoaDto) {
    return this.http.post(`${API_CONFIG.baseUrl}/pessoa`, pessoa, {
      observe: 'response',
      responseType: 'text',
    });
  }

  update(pessoa: PessoaDto) {
    return this.http.put(
      `${API_CONFIG.baseUrl}/pessoa/${pessoa.id}`,
      pessoa,
      {
        observe: 'response',
        responseType: 'text',
      }
    );
  }

  delete(id: number) {
    return this.http.delete(`${API_CONFIG.baseUrl}/pessoa/${id}`);
  }
}
