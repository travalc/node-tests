const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');

    });
  });


  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(4);

    expect(res).toBe(16).toBeA('number');

  });

  it('should async square a number', (done) => {
    utils.asyncSquare(4, (res) => {
      expect(res).toBe(16).toBeA('number');
      done();
    });
  });

  // it('should expect some values', () => {
  //   //expect(12).toNotBe(11);
  //   //expect({name: 'Travis'}).toNotEqual({name: 'travis'});
  //   //expect([2,3,4]).toExclude(1);
  //   expect({
  //     name: 'Travis',
  //     age: 29,
  //     location: 'Hayward'
  //   }).toExclude({
  //     age: 28
  //   })
  // });

  it('should verify first and last names are set', () => {
    var user = {age: 29, location: 'Hayward'};
    var res = utils.setName(user, 'Travis Alcantara');
    expect(res).toInclude({
      firstName: 'Travis',
      lastName: 'Alcantara'
    });
    expect(res.firstName).toBe('Travis').toBeA('string');
    expect(res.lastName).toBe('Alcantara').toBeA('string');
  });
});
