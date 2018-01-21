import { NgxDiffDemoPage } from './app.po';

describe('ngx-diff-demo App', () => {
  let page: NgxDiffDemoPage;

  beforeEach(() => {
    page = new NgxDiffDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
