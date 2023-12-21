import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';
import { ProductCartComponent } from '../product-cart/product-cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userName: string = 'AR';
  public isLogin: boolean = false;

  @ViewChild('cartContainer',{read:ViewContainerRef}) cartContainer!:ViewContainerRef;

  constructor(private AUTHSERVICE: AuthenticationServiceService) {}

  ngOnInit(): void {
    this.AUTHSERVICE.getUserLoggedIn().subscribe({
      next: (success) => {
        if (success) {
          this.userName = success;
          this.isLogin = true;
        }
      },
    });
  }


  showCartComponent(){
    this.cartContainer.createComponent(ProductCartComponent);
    
  }
}
