import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApplicationService } from './application.service';

describe('ApplicationService', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports:[ 
            HttpClientTestingModule,  
      ],
      providers:[ApplicationService]
    })
    .compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationService = TestBed.get(ApplicationService);
    expect(service).toBeTruthy();
  });
});
