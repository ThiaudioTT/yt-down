import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class YtServiceService {
  private servicePort = 6786;

  constructor(private http: HttpClient) {}

  public getVideo(url: string) {
    // todo: validate url
    return this.http.get(`http://localhost:${this.servicePort}/video`, {
      params: { url: url },
    });
  }
}
