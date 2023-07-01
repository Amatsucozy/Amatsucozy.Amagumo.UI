import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@auth0/auth0-angular";
import {UsersService} from "../../../../services/users.service";
import {take} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-complete-user',
  templateUrl: './complete-user.component.html',
  styleUrls: ['./complete-user.component.scss']
})
export class CompleteUserComponent implements OnInit {
  readonly completeUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private usersService: UsersService, private router: Router) {
    this.completeUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });

    if (!this.usersService.getUserInfoStatus()) {
      this.router.navigate(['/secured-views']);
      return;
    }
  }

  completeUser() {
    this.usersService.createUser(this.completeUserForm.getRawValue())
      .then((success) => {
        if (!success) {
          return;
        }

        this.usersService.completeUserInfo();
        this.router.navigate(['/secured-views']);
      });
  }

  ngOnInit(): void {
    this.authService.user$.pipe(take(1))
      .subscribe({
        next: (user) => {
          if (!user || !this.completeUserForm) {
            return;
          }
          this.completeUserForm.patchValue({
            email: user.email,
          });
          this.completeUserForm.get('email')!.disable();
        }
      });
  }
}
