

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { PessoaService } from 'src/app/service/domain/pessoa.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],

})
export class CadastroPage implements OnInit {
  public modoDeEdicao = false;
  pessoaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private navController: NavController,
    private route: ActivatedRoute,
    private pessoaService: PessoaService
  ) {}

  submit() {
    if (!this.modoDeEdicao) {
      this.pessoaService.insert(this.pessoaForm.value).subscribe((response) => {

      });
    }
    if (this.modoDeEdicao) {
      this.pessoaService.update(this.pessoaForm.value).subscribe((response) => {
        this.presentAlert('Sucesso', 'Pessoa atualizada com sucesso!', ['OK']);
      });
    }
  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if (id > 0) {
      this.modoDeEdicao = true;
      this.pessoaService.findById(id).subscribe((response) => {
        this.pessoaForm = this.formBuilder.group({
          id: [response.id],
          nomeCompleto: [response.nomeCompleto, Validators.required],
          dataNascimento: [response.dataNascimento, Validators.required],
          genero: [response.genero, Validators.required],
          estrangeiro: [response.estrangeiro, Validators.required],
          CPF: [response.CPF, Validators.required],
          RG: [response.RG, Validators.required],
          outrosDocumentos: [response.outrosDocumentos, Validators.required],
          email: [response.email, Validators.required],
          telefoneCelular: [response.telefoneCelular, Validators.required],
          telefoneFixo: [response.telefoneFixo, Validators.required],
         });
      });
    } else {
      this.modoDeEdicao = false;
      this.pessoaForm = this.formBuilder.group({
        id,
        nomeCompleto: ['', Validators.required],
        dataNascimento: ['', Validators.required],
        genero: ['', Validators.required],
        estrangeiro: ['', Validators.required],
        CPF: ['', Validators.required],
        RG: ['', Validators.required],
        outrosDocumentos: ['', Validators.required],
        email: ['', Validators.required],
        telefoneCelular: ['', Validators.required],
        telefoneFixo: ['', Validators.required],
      })
    }
  }

  async presentAlert(header: string,
    message: string, buttons: string[],) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navController.navigateForward('/home');
          }
        }
      ]
    });

    await alert.present();
  }

}
