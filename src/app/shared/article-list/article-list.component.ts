import { Component, Input, OnInit } from '@angular/core';
import { Advisories } from '../../api/advisories/advisories.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  @Input() currentUrl: string;
  @Input() data: Advisories;
  list: Advisories;
  constructor() {}

  ngOnInit(): void {}
}
