import { SeekTestPage } from './app.po';

describe('seek-test App', () => {
  let page: SeekTestPage;

  beforeEach(() => {
    page = new SeekTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
