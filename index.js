const fs = require('fs');
const path = require('path');

const ETHNICITIES = ['jew', 'muslim', 'christian', 'druze', 'other'];
const GENDERS = ['male', 'female'];

const environment = process.env.JEST_WORKER_ID ? 'testing' : 'production';

const getFilePath = filename => path.join(__dirname, environment === 'testing' ? 'test' : 'data', filename);

const FILES = {
  'first:jew:male': getFilePath('jew.male.first'),
  'first:jew:female': getFilePath('jew.female.first'),
  'first:muslim:male': getFilePath('muslim.male.first'),
  'first:muslim:female': getFilePath('muslim.female.first'),
  'first:christian:male': getFilePath('christian.male.first'),
  'first:christian:female': getFilePath('christian.female.first'),
  'first:druze:male': getFilePath('druze.male.first'),
  'first:druze:female': getFilePath('druze.female.first'),
  'first:other:male': getFilePath('other.male.first'),
  'first:other:female': getFilePath('other.female.first'),
  'last:jew': getFilePath('jew.last'),
  'last:muslim': getFilePath('muslim.last'),
  'last:christian': getFilePath('christian.last'),
  'last:druze': getFilePath('druze.last'),
  'last:other': getFilePath('other.last'),
}

const CUMULATIVES = {
  'first:jew:male': 100,
  'first:jew:female': 100,
  'first:muslim:male': 100,
  'first:muslim:female': 100,
  'first:christian:male': 100,
  'first:christian:female': 100,
  'first:druze:male': 100,
  'first:druze:female': 100,
  'first:other:male': 100,
  'first:other:female': 100,
  'last:jew': 87.81657841999986,
  'last:muslim': 93.36219688600355,
  'last:christian': 87.11965461299987,
  'last:druze': 95.52368873200001,
  'last:other': -1,
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function selectEthnicity(ethnicity) {
  ethnicity = ethnicity ?? choose(ETHNICITIES);
  if (!ETHNICITIES.includes(ethnicity)) {
    throw new TypeError(`${ethnicity} is not supported as ethnicity. Valid ethnicities: ${ETHNICITIES}`);
  }
  return ethnicity;
}

function selectGender(gender) {
  gender = gender ?? choose(GENDERS);
  if (!GENDERS.includes(gender)) {
    throw new TypeError(`${gender} is not supported as gender. Valid genders: ${GENDERS}`);
  }
  return gender;
}

function getName(filename) {
  const selected = Math.random() * CUMULATIVES[filename];
  const lines = fs.readFileSync(FILES[filename], 'utf16le').split('\n');
  for (const line of lines) {
    const [name, , , cumulative, ] = line.split('\t');
    if (Number(cumulative) >= selected) {
      return name
    }
  }
  return '';
}

function getFirstName(ethnicity, gender) {
  ethnicity = selectEthnicity(ethnicity);
  gender = selectGender(gender);
  return getName(`first:${ethnicity}:${gender}`);
}

function getLastName(ethnicity) {
  ethnicity = selectEthnicity(ethnicity);
  return getName(`last:${ethnicity}`);
}

function getFullName(ethnicity, gender) {
  ethnicity = selectEthnicity(ethnicity);
  return `${getFirstName(ethnicity, gender)} ${getLastName(ethnicity)}`.trim();
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName
};
