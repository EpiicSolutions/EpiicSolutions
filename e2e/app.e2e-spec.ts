import { EpiicPage } from './app.po';

describe('epiic App', () => {
  let page: EpiicPage;

  beforeEach(() => {
    page = new EpiicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
