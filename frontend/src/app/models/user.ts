export class User {
    id: number ;
    lastName: string;
    firstName: string;
    username: string;
    mobileNumber: string;
    role: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    
    constructor(id=0, lastName="", firstName="", createdAt="", updatedAt="", password="", mobileNumber="", username="", role="", email=""){
        this.id= id
        this.lastName=lastName
        this.firstName=firstName
        this.email=email
        this.mobileNumber=mobileNumber 
        this.username=username
        this.role=role
        this.password=password
        this.createdAt=createdAt
        this.updatedAt=updatedAt
    }
}
