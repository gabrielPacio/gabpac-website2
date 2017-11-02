import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    constructor(){}

  ngOnInit() {
      console.log('%c Hello fellow programmer!\nI see you`ve got interested in checking out my codebase. This blog was created using the ol`good Word Press, as you`ve probably already guessed by the REST calls format. WP is reliable and easy to configure. I didn`t see too much point in going through all the trouble of rewriting it.\nThe front-end is Angular 2. Why, you`d ask. Isn`t it an overkill? Yes. Sure. But that`s my daily work tool, and it looked too much of a trouble to context-switch to some other framework. Also, it provides some nice tricks and a smooth programming environment that I enjoy very much playing with. If you`d like to take a look at the code, please, send me an email and mention that you`ve seen this tip here. Also, enjoy the blog`s content and drop me a line to say what do you think.', 'color: orange');
      console.log('%c @gabpac', 'color: orange');
  }
}
