import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArticleListResponse} from '../interfaces/articles';
import {Article} from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'https://api.spaceflightnewsapi.net/v4/articles/';

  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<ArticleListResponse> {
    return this.http.get<ArticleListResponse>(this.apiUrl);
  }

  getArticle(articleId: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}${articleId}`);
  }
}
