import { MyAppIsliPage } from './app.po';

describe('my-app-isli App', () => {
  let page: MyAppIsliPage;

  beforeEach(() => {
    page = new MyAppIsliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
