import { Component, OnInit, OnDestroy } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Subscription } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router, Event as RouterEvent, NavigationStart, NavigationCancel, NavigationEnd, NavigationError } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { UserService } from '../services/user.service';
import { isDevMode } from '@angular/core';
import { ConfigService } from '../services/config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  isCollapsed: Boolean = true;
  isAuthorizedSubscription: Subscription;
  isAuthorized: Boolean = false;
  userData: any;
  userInfo: any;
  loading = true;
  menuColor = 'primary';
  version = '';

  constructor(
    public oidcSecurityService: OidcSecurityService,
    private sessionStorage: SessionStorageService,
    private translateService: TranslateService,
    private userService: UserService,
    private configService: ConfigService,
    router: Router
  ) {

    if (this.oidcSecurityService.moduleSetup) {
      this.doCallbackLogicIfRequired();
    } else {
      this.oidcSecurityService.onModuleSetup.subscribe(() => {
        this.doCallbackLogicIfRequired();
      });
    }

    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else {
        this.loading = false;
      }
    });
    this.version = configService.config.Version;
    console.log('############ DevMode: ' + isDevMode() + '  ###################');
  }


  ngOnInit(): void {
    this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(
      (isAuthorized: boolean) => {
        this.isAuthorized = isAuthorized;
        if (this.isAuthorized === true) {
          this.saveUserInfo();
        }
      });
    if (isDevMode()) {
      this.menuColor = 'warn';
    }
  }

  private doCallbackLogicIfRequired() {
    if (window.location.hash) {
      this.oidcSecurityService.authorizedCallback();
    }
  }

  ngOnDestroy(): void {
    this.oidcSecurityService.onModuleSetup.unsubscribe();
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

  saveUserInfo() {
    // GetUserInfo and set sessionStorage
    this.oidcSecurityService.getUserData().subscribe(
      (data) => {
        if (data !== '') {
          this.userData = data;
          const id: number = +this.userData.sub;
          // Get your user informatin form service
          this.userService.getUser(id).subscribe(serviceResponse => {
            if (serviceResponse != null) {
              this.userInfo = serviceResponse.Data;
              this.sessionStorage.clear('userinfo');
              this.sessionStorage.store('userinfo', this.userInfo);
            }
          });
        }
      }
    );
  }

  langChange(language: string, country: string) {
    this.translateService.use(language + '-' + country);
    console.log('set language: ' + language);
  }
}
