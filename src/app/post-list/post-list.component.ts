import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  // Fonction => Ajouter un like
  onAddLike(){
    return this.postLoveIts++;
  }

  // Fonction => Supprimer un like
  onRemoveLike(){
    return this.postLoveIts--;
  }

  // Fonction => Retourne le nombre de likes total pour un post
  getLikes(){
    return this.postLoveIts;
  }

  // Fonction => Retourne la couleur verte ou rouge en fonction du nombre de like
  getColor(){
    if(this.postLoveIts >= 1){
      return 'green';
    } else if(this.postLoveIts <= -1){
      return 'red';
    }
  }

}
