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
  public question:any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService,
  ) { 
    this.question =  JSON.parse(localStorage.getItem('question')|| '{}');

    // if(undefined == this.question.token){
    //   this.router.navigate(['/login'], { queryParams: {}, skipLocationChange: false });
    // }

  }

  ngOnInit(): void {
    this.getTotalQuestions();
  }

  getTotalQuestions(){
    this.backendService.getTotalQuestions().
    subscribe({
      next:(response)=>{
        this.totalQuestions = response.count
      }
    })
  }
}
