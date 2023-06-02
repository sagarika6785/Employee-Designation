import { Component,OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit{

  constructor(private service :SharedService) { }

  Employee:any=[];

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  ngOnInit():void{
    this.refreshEmployee();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Designation:null,
      PermanentAddress:"",
      CorrespondentAddress:""
      
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }

  editClick(item:any){
    console.log(item);
    this.emp= {...item};
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;

  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.DeleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmployee();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmployee();
  }

  refreshEmployee(){
    this.service.GetEmployees().subscribe(data =>{
      this.Employee=data;
    });

  }

}
