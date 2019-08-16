import { Query } from './query';

describe('Query', () => {
  it('should create an instance', () => {
  	let date = new Date("2019-08-20")
    expect(new Query(2,2,0,date)).toBeTruthy();
  });
});
