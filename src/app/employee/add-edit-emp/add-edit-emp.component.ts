import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService){}

  @Input() emp:any;
  EmployeeId: string;
  EmployeeName:string;
  Designation:string;
  DesignationId:null;
  PermanentAddress:string;
  CorrespondentAddress:string;
  checkBox:boolean = false;
  designations:any[] = [];
  selectedDesignation:any;
  

  ngOnInit(): void {
    this.loaddesignations();
  }

  loaddesignations(){
    debugger;
    this.service.GetDesignation().subscribe((data:any)=>{
      debugger;
      this.designations=data;

    this.EmployeeId = this.emp.EmployeeId;
    this.EmployeeName = this.emp.EmployeeName;
    this.Designation = this.selectedDesignation;
    this.PermanentAddress = this.emp.PermanentAddress;
    this.CorrespondentAddress = this.emp.CorrespondentAddress;
  });
}

  Save(){
    debugger;
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Designation:this.selectedDesignation,
      PermanentAddress:this.PermanentAddress,
      CorrespondentAddress:this.CorrespondentAddress
    };
      this.service.Save(val).subscribe(res=>{
        alert(res.toString())
      });

    }
     

  Update(){
    var val = {EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Designation:this.Designation,
      PermanentAddress:this.PermanentAddress,
      CorrespondentAddress:this.CorrespondentAddress
    };
    this.service.Update(val).subscribe(res=>{
      alert(res.toString())
    });
  }

   autoFillAddress() {
    this.checkBox = !this.checkBox;
    if(this.checkBox){
      this.CorrespondentAddress = this.PermanentAddress 
    }
    else{
      this.CorrespondentAddress = "";
    }
  }

  }
 


