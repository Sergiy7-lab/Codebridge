import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Articles, ArticleListResponse} from '../../interfaces/articles';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles: Articles[] = [];
  filteredArticles: Articles[] = [];
  keyword: string = '';

  constructor(private articleService: ArticleService, private router: Router) {
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe((data: ArticleListResponse) => {
      this.articles = data.results;
      this.applyFilter();
    });
  }

  applyFilter(): void {
    if (!this.keyword) {
      this.filteredArticles = this.articles;
    } else {
      this.filteredArticles = this.articles.filter(article =>
        article.title.toLowerCase().includes(this.keyword.toLowerCase()) ||
        article.summary.toLowerCase().includes(this.keyword.toLowerCase())
      );
    }
  }

  goToArticle(articleId: string): void {
    this.router.navigate(['/article', articleId]);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {day: 'numeric', month: 'long', year: 'numeric'});
  }
}
