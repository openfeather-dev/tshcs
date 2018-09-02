import { EnterAvailabilityRoutingModule } from './enter-availability-routing.module';

describe('EnterAvailabilityRoutingModule', () => {
  let enterAvailabilityRoutingModule: EnterAvailabilityRoutingModule;

  beforeEach(() => {
    enterAvailabilityRoutingModule = new EnterAvailabilityRoutingModule();
  });

  it('should create an instance', () => {
    expect(enterAvailabilityRoutingModule).toBeTruthy();
  });
});
