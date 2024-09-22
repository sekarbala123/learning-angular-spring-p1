import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {
  httpClient: HttpClient;
  baseHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', 'https://jsonblob.com/')
  .set("Access-Control-Allow-Methods","POST, PUT, DELETE, HEAD, PATCH, OPTIONS")

  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
    console.log(httpClient.get("https://jsonblob.com/api/jsonBlob/1287465047201538048",{
      headers: this.baseHeaders
    }).subscribe(
      success=>{
        console.log(success);
        
      },failure=>{
        console.log(failure.message);
        
      }
    ));
    
    
  }

  getData(){
    return this.httpClient.get("https://jsonblob.com/api/jsonBlob/1287465047201538048",{
      headers: this.baseHeaders
    }).subscribe(
      success=>{
        console.log(success);
        
      },failure=>{
        console.log(failure);
        
      }
    );
  }
}
