import { EpiicSolutionsPage } from './app.po';

describe('epiic-solutions App', () => {
  let page: EpiicSolutionsPage;

  beforeEach(() => {
    page = new EpiicSolutionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
