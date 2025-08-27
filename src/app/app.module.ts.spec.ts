import {AppModule} from './app.module';

class AppModuleTs {
}

describe('AppModuleTs', () => {
  it('should create an instance', () => {
    const directive = new AppModuleTs();
    expect(directive).toBeTruthy();
  });
});
