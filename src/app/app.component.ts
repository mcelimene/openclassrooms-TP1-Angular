import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    { title: 'Mon premier post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus pellentesque quam eget venenatis. Donec eget feugiat urna. Pellentesque gravida, quam id aliquet imperdiet, orci lorem rutrum velit, ac semper nulla velit ultrices risus. Vestibulum gravida tincidunt urna in fringilla.', loveIts: 0, created_at: new Date()},
    { title: 'Mon deuxième post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus pellentesque quam eget venenatis. Donec eget feugiat urna. Pellentesque gravida, quam id aliquet imperdiet, orci lorem rutrum velit, ac semper nulla velit ultrices risus. Vestibulum gravida tincidunt urna in fringilla.', loveIts: 0, created_at: new Date()},
    { title: 'Encore un post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus pellentesque quam eget venenatis. Donec eget feugiat urna. Pellentesque gravida, quam id aliquet imperdiet, orci lorem rutrum velit, ac semper nulla velit ultrices risus. Vestibulum gravida tincidunt urna in fringilla.', loveIts: 0, created_at: new Date()}
  ];
}
