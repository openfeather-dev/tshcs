import { CalendarUtilsModule } from './calendar-utils.module';

describe('CalendarUtilsModule', () => {
  let calendarUtilsModule: CalendarUtilsModule;

  beforeEach(() => {
    calendarUtilsModule = new CalendarUtilsModule();
  });

  it('should create an instance', () => {
    expect(calendarUtilsModule).toBeTruthy();
  });
});
