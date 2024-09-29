import { Component, inject } from '@angular/core';
import { Usuario } from '../../../../auth/usuario';
import { LoginService } from '../../../../auth/login.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  loginService = inject(LoginService)
  usuario!: Usuario;

  constructor(){
    this.usuario = this.loginService.getUsuarioLogado();
  }

}
