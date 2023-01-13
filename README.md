# hebrew-names

Random Hebrew name generator

## Usage

This module is available on npm:

```bash
npm install hebrew-names
```

## Usage

 * `Ethnicity` [optional]: jew, muslim, christian, druze or other

 * `Gender` [optional]: male or female

 * Generate random first names:
    ```js
    >>> const { getFirstName } = require('hebrew-names');

    >>> getFirstName('jew', 'female');
    'יעל'
    ````

* Generate random last names:
    ```js
    >>> const { getLastName } = require('hebrew-names');

    >>> getLastName('jew');
    'גלברד'
    ```

* Generate random full names:
    ```js
    >>> const { getFullName } = require('hebrew-names');

    >> getFullName('jew', 'male');
    'משה כהן'
    ```

## License

This project is released under an `MIT License`

Data in the following files are public domain (derived from Israel's Central Bureau of Statistics 1948-2021 data):

- data/jew.male.first
- data/jew.female.first
- data/jew.last
- data/muslim.male.first
- data/muslim.female.first
- data/muslim.last
- data/christian.male.first
- data/christian.female.first
- data/christian.last
- data/druze.male.first
- data/druze.female.first
- data/druze.last
- data/other.male.first
- data/other.female.first
- data/other.last
