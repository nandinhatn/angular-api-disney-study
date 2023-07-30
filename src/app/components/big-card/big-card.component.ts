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
  filmsList:string[]=["Aladdin (film)",
  "The Return of Jafar",
  "Aladdin and the King of Thieves",
  "Mickey's Magical Christmas: Snowed in at the House of Mouse",
  "Disney Princess Enchanted Tales: Follow Your Dreams",
  "Aladdin (2019 film)"]
   @Input()
   id:string="0";
   posts:any;

   

    getDates(){
    return this.posts.data
   } 

  ngOnInit(): void {
    this.service.getPosts().subscribe(response=>{
     
      this.posts= response
      
    })
   
  }
  
}
