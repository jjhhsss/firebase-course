import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { appservice } from './services/services';
import { Entrys } from './model/entrys';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private appService: appservice
  ) { }

  ngOnInit() {

    this.reloadArticles();

  }

  articles$: Observable<Entrys[]>

  public show: boolean = true;
  public title: string = null;
  public date: string = null;
  public body: string = null;

  toggle() {
    this.show = true;
  }

  clicked(index) {
    this.articles$.subscribe(
      data => {
        console.log(data, 'hello')
        this.title = data[index].title;
        this.date = data[index].date;
        this.body = data[index].fullarticle;
        this.show = false;
      }
    )
    console.log(index, "asdfasdf sadf", this.articles$)
  }

  reloadArticles() {
    this.articles$ = this.appService.loadAllArticles()
    this.articles$.subscribe(res => console.log(res));

  }

}



// [
//   {
//       "id": "",
//       "previewDescription": "eeeeeeeeee",
//       "date": "April 13",
//       "title": "asdeasef asdf",
//       "fullarticle": "jsadfj klsidjflah laksjgjkl a;lfdasdf",
//       "link": ""
//   },
//   {
//       "id": "",
//       "fullarticle": "eeeee",
//       "title": "eeeeeee",
//       "link": "",
//       "previewdescription": "asdfasdfdf",
//       "date": "arpasdf"
//   },
//   {
//       "id": "",
//       "previewdescription": "asdfasfd",
//       "fullarticle": "asdfsadfdf",
//       "title": "ooh lal haa",
//       "link": "",
//       "date": "asdfasdf"
//   }
// ]