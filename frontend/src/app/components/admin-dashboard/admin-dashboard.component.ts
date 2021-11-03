import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public totalQuestions: number = 0;
  public user:any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
  ) { 
    this.user =  JSON.parse(localStorage.getItem('user')|| '{}');

    if(undefined == this.user.token){
      this.router.navigate(['/login'], { queryParams: {}, skipLocationChange: false });
    }

  }

  ngOnInit(): void {
    this.getTotalQuestionAnsweredByUser(this.user.id);
  }

  getTotalQuestionAnsweredByUser(userId:string){
    this.backendService.getTotalAnswered(userId).
    subscribe({
      next:(response)=>{
        this.totalQuestions = response.count
      }
    })
  }
}
