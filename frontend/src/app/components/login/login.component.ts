import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
  ) { }


  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });


  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  login() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.backendService.loginUserIn(
      {
        username: this.f.username.value,
        password: this.f.password.value

      }

    )
      .subscribe(
        {
          next: (response) => {
            console.log(response)
            if (undefined != response) {
              localStorage.setItem('user', JSON.stringify(response));
              if (response.role === 'Admin') {
                //router. admin dash
               this.router.navigate(['/adminDashboard'], { queryParams: {}, skipLocationChange: false });
              } else {
                //user dashboard
               this.router.navigate(['userDashboard'], { queryParams: {}, skipLocationChange: false });
              }
            } else {
              console.log('invalid credentials')
            }
          },
          error: (err) => {
            console.log(err)
          }
        }
      );
  }
}
