import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { dataFake } from 'src/assets/data/dataFake';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:PostService){}
  posts:any =[]
  teste:any=[]
  
  ngOnInit(): void {

   this.setValuesToComponent()
   this.service.getPosts().subscribe(response=>{
     this.teste.push(response)
   
    console.log(this.teste[0].data)
  })
  }
  setValuesToComponent(){
    const result = dataFake.map((el)=>{
     
      this.posts.push(el)
    })
    
  }

}
