import { Team5TemplatePage } from './app.po';

describe('Team5 App', function() {
  let page: Team5TemplatePage;

  beforeEach(() => {
    page = new Team5TemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
