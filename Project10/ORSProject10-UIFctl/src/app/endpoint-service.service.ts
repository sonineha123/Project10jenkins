import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EndpointServiceService {

  constructor() { }

  public SERVER_URL = "http://localhost:8084";
  public MESSAGE = this.SERVER_URL + "/Message";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL+ "/Subject";
  public FACULTY = this.SERVER_URL+ "/Faculty";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL+ "/TimeTable";
  public JASPERREPORT = this.SERVER_URL+ "/Jasper";
  public ORDER = this.SERVER_URL + "/Order";
  public JOB = this.SERVER_URL + "/Job";
  public EMPLOYEE = this.SERVER_URL + "/Employee";
  public CLIENT = this.SERVER_URL + "/Client";
  public PATIENT = this.SERVER_URL + "/Patient";
  public LEAD = this.SERVER_URL + "/Lead";
  public WISH = this.SERVER_URL + "/Wish";
  public PRES = this.SERVER_URL + "/Prescription";
  public USERS = this.SERVER_URL + "/Users";
  public FOLLOWUP = this.SERVER_URL + "/FollowUp";
  public SUPPLIER = this.SERVER_URL + "/Supplier";
  public SHOPPING = this.SERVER_URL + "/Shopping";
  public ROUTE = this.SERVER_URL + "/Route";
}
