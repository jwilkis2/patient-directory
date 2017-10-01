import { PatientDirectoryPage } from './app.po';

describe('patient-directory App', () => {
  let page: PatientDirectoryPage;

  beforeEach(() => {
    page = new PatientDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
