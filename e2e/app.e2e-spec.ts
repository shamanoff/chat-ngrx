import { ChatNgrxPage } from './app.po';

describe('chat-ngrx App', () => {
  let page: ChatNgrxPage;

  beforeEach(() => {
    page = new ChatNgrxPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
