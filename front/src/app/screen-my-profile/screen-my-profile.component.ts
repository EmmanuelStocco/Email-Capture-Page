import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-screen-my-profile',
  templateUrl: './screen-my-profile.component.html',
  styleUrls: ['./screen-my-profile.component.css']
})
export class ScreenMyProfileComponent implements OnInit {
  myData?: any = {
    email: '',
    password: '',
    confirmPassword:'',
    dateCreatedUser: null,
    username: ''
  };

  exibition: boolean = false;
  id: any = null;
  token: any = null;

  page: number = 0;
  size: number = 5;
  totalItems: number = 0;


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.id = this.tokenStorage.getUser().id
    this.token = this.tokenStorage.getUser().accessToken
    this.authService.getMyUserData(this.id, this.token).subscribe(data => {
      console.log(data)
      this.myData.email = data.email,
      this.myData.password = data.password,
      this.myData.username = data.username,
      this.myData.createdAt = data.createdAt
    })
  };

  reloadPage(): void {
    window.location.reload();
  };

  handleAlterValueEditExibition() {
    this.exibition = !this.exibition
  };

  submit(){
    const id = this.tokenStorage.getUser().id
    const token = this.tokenStorage.getUser().accessToken
    this.authService.myProfileDataEdit(id, token).subscribe(data => {
      console.log(data)
    })
  };

}
