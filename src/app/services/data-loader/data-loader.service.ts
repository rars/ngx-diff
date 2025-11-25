import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ExampleDiff = {
  before_content: string;
  after_content: string;
  commit_sha: string;
  file_path: string;
};

@Injectable({
  providedIn: 'root',
})
export class DataLoaderService {
  public constructor(private readonly httpClient: HttpClient) {}

  public getExampleDiffs(): Observable<ExampleDiff[]> {
    return this.httpClient.get<ExampleDiff[]>('assets/ngx_diff_diff_benchmark.json');
  }
}
