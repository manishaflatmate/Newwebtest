import { FlatmatePage } from './app.po';

describe('flatmate App', () => {
  let page: FlatmatePage;

  beforeEach(() => {
    page = new FlatmatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
