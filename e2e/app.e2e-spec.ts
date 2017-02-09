import { JojoNewProjFinalPage } from './app.po';

describe('jojo-new-proj-final App', function() {
  let page: JojoNewProjFinalPage;

  beforeEach(() => {
    page = new JojoNewProjFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
