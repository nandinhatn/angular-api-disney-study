import { Component , OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service:PortfolioService){}
  posts:any=[]
  name:string="Fernanda"
  photoCover:string=""
  email:string=""
  location:string=""
  job: string=""
  phone:string=""
  languages:string[]=[]
  education:string[]=[]
  ngOnInit(): void {
  this.service.getPosts().subscribe(response=>{
   this.posts.push(response)
   console.log(this.posts[0])
   this.name = this.posts[0].name
   this.photoCover = this.posts[0].photo
   this.email = this.posts[0].email
   this.location = this.posts[0].location
   this.job = this.posts[0].job
   this.languages = this.posts[0].languages
   this.phone = this.posts[0].phone
   this.education = this.posts[0].education


 
   console.log(this.education) 
  })  
  
  }
   
}
