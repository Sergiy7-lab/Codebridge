import {Component, OnInit} from '@angular/core';
import {Article} from '../../interfaces/article';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article | null = null;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
  }

  ngOnInit(): void {
    const articleId = +this.route.snapshot.paramMap.get('id')!;
    this.getArticle(articleId);
  }

  getArticle(articleId: number) {
    this.articleService.getArticle(articleId)
      .subscribe((article: Article) => {
        this.article = article;
      });
  }
}
