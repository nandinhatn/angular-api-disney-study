import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/assets/data/dataFake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

 
  constructor(private service:PostService,private route:ActivatedRoute){}

  photoCover:string=""
  name:string=""
  private id: string | null="0"
  posts:any= []
  filmsList:string[]=[]
  showsList:string[]=[]
  shortFilms:string[]=[]
  
 

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id= value.get("id")
    )
    this.service.getPosts().subscribe(response=>{
      this.posts.push(response)
      console.log(this.posts[0].data)
      this.setValuesToComponent(this.id)
    })
   
  }
  setValuesToComponent(id:string | null){
/*     const result = dataFake.filter(article => article.id==id)[0] */
    const result = this.posts[0].data.filter((el: { _id: string | null })=> el._id==id)[0]

    this.name= result.name
    this.photoCover= result.imageUrl
    this.filmsList=result.films
    this.showsList= result.tvShows
    this.shortFilms=result.shortFilms

    

    

  }
 
}
