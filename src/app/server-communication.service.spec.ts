/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServerCommunicationService } from './server-communication.service';

describe('ServerCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerCommunicationService]
    });
  });

  it('should ...', inject([ServerCommunicationService], (service: ServerCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
