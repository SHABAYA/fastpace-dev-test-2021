import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

import { environment } from '../../environments/environment';


const BASE_URL = 'http://localhost:3000';
// const BASE_URL = 'https://spz-backend.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  constructor(private httpClient: HttpClient) { }
  private env = environment;

  registerUser(formData: any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    return this.httpClient.post<any>('/users/add', formData, {
      headers: httpHeaders,
    });
  }

  loginUserIn(formData: any): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    return this.httpClient.post<any>('/users/login', formData, {
      headers: httpHeaders,
    });
  }

  getTotalAnswered(userId:string): Observable<any> {
    let user =  JSON.parse(localStorage.getItem('user')|| '{}');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Authorization': user.token
    });

    return this.httpClient.get<any>('/question_user_answer/countByUser/'+userId, {
      headers: httpHeaders
    });

  }

  getTotalQuestions(): Observable<any> {
    let user =  JSON.parse(localStorage.getItem('question')|| '{}');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'Authorization': user.token
    });

    return this.httpClient.get<any>('/questions/countAll', {
      headers: httpHeaders
    });

  }
  // updateUserRole(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/update-role', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateUserMembership(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/update-membership', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // getUserDetails3(formData: string): Observable<User> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });

  //   return this.httpClient.get<User>(BASE_URL + 'users/' + formData + '/details', {
  //     headers: httpHeaders
  //   });

  // }

  // createUserEducation(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/education/create', formData, {
  //     headers: httpHeaders,
  //   });
  // }
  // createUserEmployment(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/employment/create', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateUserEducation(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/education/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateUserEmployment(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/employment/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // createUserSocialMediaAccount(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/socialmediaaccount/create', formData, {
  //     headers: httpHeaders,
  //   });
  // }
  // updateUserSocialMediaAccount(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/socialmediaaccount/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }


  // getInspirationalQuotes(formData: any = 'all'): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   let httpParams = new HttpParams()
  //     .append("category", formData);
  //   return this.httpClient.get<any>(BASE_URL + 'inspirations/quotes', {
  //     headers: httpHeaders,
  //     params: httpParams
  //   });

  // }

  // getInspirationalQuote(id: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'inspirations/quotes/' + id, {
  //     headers: httpHeaders,
  //   });

  // }

  // getInspirationalCategories(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.get<any>(BASE_URL + 'inspirations/categories', {
  //     headers: httpHeaders,
  //   });

  // }
  // createInspirationalQuote(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'inspirations/create', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateInspirationalQuote(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'inspirations/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // deleteInspirationalQuote(id: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.get<any>(BASE_URL + 'inspirations/delete/' + id, {
  //     headers: httpHeaders,
  //   });

  // }

  // deleteUserEducation(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.post<any>(BASE_URL + 'users/education/delete', formData, {
  //     headers: httpHeaders,
  //   });

  // }

  // deleteUserEmployment(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.post<any>(BASE_URL + 'users/employment/delete', formData, {
  //     headers: httpHeaders,
  //   });

  // }

  // deleteUserSocialMediaAccount(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.post<any>(BASE_URL + 'users/socialmediaaccount/delete', formData, {
  //     headers: httpHeaders,
  //   });
  // }


  // getCountries(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'assets/files/json/countries', {
  //     headers: httpHeaders
  //   });
  // }

  // getMembershipQuestionnaire(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'assets/files/json/membership-questionnaire', {
  //     headers: httpHeaders
  //   });
  // }

  // chechIfUsernameExist(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/checkusername', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // createUser(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/createuser', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateUserProfileImage(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/profile/updateprofileimage', formData, {
  //     headers: httpHeaders,
  //   });
  // }
  // updateUserProfileBiography(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/profile/updateprofilebiography', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateUserAccount(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/account/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // setUserMembership(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/setmembership', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // saveQuestionnaireAnswers(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'questionnaire/saveanswers', formData, {
  //     headers: httpHeaders,
  //   });
  // }


  // getMembership(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'membership', {
  //     headers: httpHeaders
  //   });

  // }

  // verifyUserStatus(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/account/verifystatus', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateUserProfile(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/profile/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateUserContact(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/contact/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }


  // changeUserPassword(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/account/changepassword', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // resetUserPassword(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/account/resetpassword', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // createPasswordReset(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'passwordreset/create', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // checkPasswordResetStatus(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'passwordreset/checkstatus', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updatePasswordResetStatus(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'passwordreset/uodatestatus', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // sendPasswordResetMail(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'passwordreset/sendmail', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // sendVerifyAccountMail(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/account/sendverifyaccountmail', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // createGoal(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'goals/create', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateGoal(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'goals/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // deleteGoal(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.post<any>(BASE_URL + 'goals/delete', formData, {
  //     headers: httpHeaders,
  //   });

  // }

  // getGoals(formData: string): Observable<Goal[]> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.get<Goal[]>(BASE_URL + 'users/' + formData + '/goals', {
  //     headers: httpHeaders
  //   });

  // }

  // getGoal(formData: string): Observable<Goal> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.get<Goal>(BASE_URL + 'goals/' + formData, {
  //     headers: httpHeaders
  //   });

  // }

  // createActionPlan(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'goals/actionplans/create', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateActionPlan(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'goals/actionplans/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // deleteActionPlan(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.post<any>(BASE_URL + 'goals/actionplans/delete', formData, {
  //     headers: httpHeaders,
  //   });

  // }

  // getActionPlans(formData: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.get<any>(BASE_URL + 'goals/' + formData + '/actionplans', {
  //     headers: httpHeaders
  //   });

  // }

  // getActionPlan(formData: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.get<any>(BASE_URL + 'goals/actionplans/' + formData, {
  //     headers: httpHeaders
  //   });

  // }

  // createGoalCategories(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'goals/categories/create', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateGoalCategories(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'goals/categories/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // deleteGoalCategories(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.post<any>(BASE_URL + 'goals/categories/delete' + formData, {
  //     headers: httpHeaders,
  //   });

  // }

  // getGoalCategories(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.get<any>(BASE_URL + 'goals/categories', {
  //     headers: httpHeaders
  //   });

  // }

  // getGoalCategory(formData: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.get<any>(BASE_URL + 'goals/categories/' + formData, {
  //     headers: httpHeaders
  //   });

  // }

  // uploadFile(files: Array<UploadFile>, extraData?: object): any {
  //   const formData: FormData = new FormData();
  //   files.forEach(fileItem => {
  //     formData.append('file', fileItem.file, fileItem.name);
  //   });
  //   if (extraData) {
  //     for (let key in extraData) {
  //       // iterate and set other form data
  //       formData.append(key, extraData[key]);
  //     }
  //   }

  //   const httpHeaders = new HttpHeaders({
  //     //'Content-Type': 'multipart/form-data',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'assets/uploadfile', formData, {
  //     headers: httpHeaders,
  //     reportProgress: true
  //   });
  // }

  // createEvent(data: Event): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     //'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   const formData: FormData = new FormData();
  //   if (data.imageFiles.length > 0) {
  //     data.imageFiles.forEach(fileItem => {
  //       formData.append('file', fileItem.file, fileItem.name);
  //     });
  //   }
  //   delete data.imageFiles;

  //   var extraData = data;
  //   if (extraData) {
  //     for (let key in extraData) {
  //       // iterate and set other form data
  //       formData.append(key, extraData[key]);
  //     }

  //     formData.forEach((a, b, c) => {
  //       console.log('key : ' + b + ' value : ' + a);
  //     });
  //   }

  //   return this.httpClient.post<any>(BASE_URL + 'events/create', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateEvent(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'events/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // deleteEvent(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.post<any>(BASE_URL + 'events/delete', formData, {
  //     headers: httpHeaders,
  //   });

  // }

  // getEvents(formData: string = 'all'): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   let httpParams = new HttpParams()
  //     .append("category", formData);
  //   return this.httpClient.get<any>(BASE_URL + 'events', {
  //     headers: httpHeaders,
  //     params: httpParams
  //   });

  // }


  // getEvent(formData: string): Observable<Event> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.get<Event>(BASE_URL + 'events/' + formData, {
  //     headers: httpHeaders
  //   });

  // }

  // createEventCategories(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'events/categories/create', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // updateEventCategories(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'events/categories/update', formData, {
  //     headers: httpHeaders,
  //   });
  // }

  // deleteEventCategories(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.post<any>(BASE_URL + 'events/categories/delete' + formData, {
  //     headers: httpHeaders,
  //   });

  // }

  // getEventCategories(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.get<any>(BASE_URL + 'events/categories', {
  //     headers: httpHeaders
  //   });

  // }

  // getEventCategory(formData: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });

  //   return this.httpClient.get<any>(BASE_URL + 'events/categories/' + formData, {
  //     headers: httpHeaders
  //   });

  // }

  // verifyCaptcha(formData: any): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache',
  //     'Access-Control-Allow-Origin': '*'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'users/verifycaptcha', formData, {
  //     headers: httpHeaders,
  //   });

  // }

  // public requestMentor(formData: MentorRequestData): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.post<MentorRequestData>(BASE_URL + 'mentorship/engagements/request-mentor', formData, {
  //     headers: httpHeaders
  //   });

  // }

  // public assignMentor(formData: MentorRequestData): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.post<MentorRequestData>(BASE_URL + 'mentorship/engagements/assign-mentor', formData, {
  //     headers: httpHeaders
  //   });

  // }

  // getMentorshipRequest(formData: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });

  //   return this.httpClient.get<any>(BASE_URL + 'mentorship/engagements/getmentorship-request/' + formData, {
  //     headers: httpHeaders
  //   });

  // }

  // getMentorshipRequests(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'mentorship/engagements/getmentorship-requests?requestType=REQUEST_MENTOR', {
  //     headers: httpHeaders
  //   });
  // }

  // getBecomeMentorRequests(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'mentorship/engagements/getmentorship-requests?requestType=BECOME_MENTOR', {
  //     headers: httpHeaders
  //   });
  // }

  // getMentorshipRequestsByUser(userId: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'mentorship/engagements/getmentorship-requests-byuser/' + userId, {
  //     headers: httpHeaders
  //   });
  // }

  // public sendMail(formData: {}): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });

  //   return this.httpClient.post<any>(BASE_URL + 'users/sendmail', formData, {
  //     headers: httpHeaders
  //   });

  // }

  // getAllMentors(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'mentors', {
  //     headers: httpHeaders
  //   });
  // }

  // getMentorById(id: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'mentors/' + id, {
  //     headers: httpHeaders
  //   });
  // }

  // getMenteesByMentorId(id: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'mentors/' + id + '/mentees', {
  //     headers: httpHeaders
  //   });
  // }

  // getUsers(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'users', {
  //     headers: httpHeaders
  //   });
  // }
  // public setUserRole(formData: {}): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });

  //   return this.httpClient.post<any>(BASE_URL + 'users/set-role', formData, {
  //     headers: httpHeaders
  //   });
  // }

  // public getInvitations(): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.get<any>(BASE_URL + 'invitations', {
  //     headers: httpHeaders
  //   });
  // }

  // public deleteInvitation(id): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'invitations/delete/' + id, {
  //     headers: httpHeaders
  //   });
  // }

  // public createInvitation(formData): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'invitations/create', formData, {
  //     headers: httpHeaders
  //   });
  // }

  // public sendInvitation(formData): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'invitations/send', formData, {
  //     headers: httpHeaders
  //   });
  // }

  // public verifyInvitation(formData): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'invitations/verify', formData, {
  //     headers: httpHeaders
  //   });
  // }

  // public createMentor(formData): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'mentors/create', formData, {
  //     headers: httpHeaders
  //   });
  // }
  
  // public updateMentor(formData): Observable<any> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  //   });
  //   return this.httpClient.post<any>(BASE_URL + 'mentors/update', formData, {
  //     headers: httpHeaders
  //   });
  // }

}
