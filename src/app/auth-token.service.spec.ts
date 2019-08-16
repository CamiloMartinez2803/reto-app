import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthTokenService } from './auth-token.service';

describe('AuthTokenService', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports:[ 
            HttpClientTestingModule,  
      ],
      providers:[AuthTokenService,JwtHelperService]
    })
    .compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthTokenService = TestBed.get(AuthTokenService);
    expect(service).toBeTruthy();
  });
});
