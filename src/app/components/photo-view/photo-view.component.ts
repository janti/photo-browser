import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.scss']
})
export class PhotoViewComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log( this.route.snapshot.paramMap.get('id') );
  }

}
