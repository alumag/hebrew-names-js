const { getFirstName, getLastName, getFullName } = require('.');

describe('test hebrew-names', () => {
  describe('getFirstName', () => {
    test.each([
      ['christian', 'male', 'אליאס'],
      ['christian', 'female', 'מריה'],
      ['druze', 'male', 'סולימאן'],
      ['druze', 'female', 'נור'],
      ['jew', 'male', 'דוד'],
      ['jew', 'female', 'נועה'],
      ['muslim', 'male', 'מוחמד'],
      ['muslim', 'female', 'פאטמה'],
      ['other', 'male', 'דניאל'],
      ['other', 'female', 'ניקול'],
    ])('should get random first name for ethnicity=%s and gender=%s', (ethnicity, gender, expectedName) => {
      expect(getFirstName(ethnicity, gender)).toMatch(expectedName);
    });

    test('should get random first name', () => {
      expect(getFirstName()).toStrictEqual(expect.any(String));
    });

    test('should throw an error with unsupported gender', () => {
      expect(() => getFirstName(undefined, 'unknown')).toThrow(TypeError);
    });

    test('should throw an error with unsupported ethnicity', () => {
      expect(() => getFirstName('unknown', undefined)).toThrow(TypeError);
    });
  });

  describe('getLastName', () => {
    test.each([
      ['christian', "ח'ורי"],
      ['druze', 'חלבי'],
      ['jew', 'כהן'],
      ['muslim', 'אגבאריה'],
      ['other', ''],
    ])('should get random last name for ethnicity=%s', (ethnicity, expectedName) => {
      expect(getLastName(ethnicity)).toMatch(expectedName);
    });

    test('should get random last name', () => {
      expect(getLastName()).toStrictEqual(expect.any(String));
    });


    test('should throw an error with unsupported ethnicity', () => {
      expect(() => getLastName('unknown')).toThrow(TypeError);
    });
  });

  describe('getFullName', () => {
    test('should get random full name', () => {
      expect(getFullName()).toStrictEqual(expect.any(String));
    });

    test('should throw an error with unsupported gender', () => {
      expect(() => getFullName(undefined, 'unknown')).toThrow(TypeError);
    });

    test('should throw an error with unsupported ethnicity', () => {
      expect(() => getFullName('unknown', undefined)).toThrow(TypeError);
    });
  });
});
