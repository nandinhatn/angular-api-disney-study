import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  constructor(private service:PostService){}

  @Input()
  photoCover:string = "https://static.wikia.nocookie.net/disney/images/3/3f/Profile_-_Abu.png"
  @Input()
  title:string ="Abu"
  @Input()
  link:string = "https://disney.fandom.com/wiki/Abu"
  @Input()
  filmsList:string[]=[]
   @Input()
   id:string="0";
   posts:any;
   @Input()  
   showsList:string[]=[]
   

    getDates(){
    return this.posts.data
   } 

  ngOnInit(): void {
    console.log('filmslist',this.filmsList[0].length)
    this.service.getPosts().subscribe(response=>{
     
      this.posts= response
      
    })
   
  }
  
}
