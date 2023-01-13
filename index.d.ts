export type Ethnicity = 'jew' | 'muslim' | 'christian' | 'druze' | 'other';

export type Gender = 'male' | 'female';

export function getFirstName(ethnicity?: Ethnicity, gender?: Gender): string;

export function getLastName(ethnicity?: Ethnicity): string;

export function getFullName(ethnicity?: Ethnicity, gender?: Gender): string;
