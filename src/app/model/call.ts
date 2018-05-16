export class Call {
  id: number;
  /*call id*/
  number: string;
  /*number*/
  value: string;
  /*status*/
  name: string;
  /*language*/
  duration: number;
  /*call duration*/
  cost: number;
  /*call cost*/
  parentId: number;
  /*parent call id*/
  creation: string;
  /*date of call creation*/
  updated: string;
  /*date of the last call update*/
}

export class Alarm {
  id: number;
  language: Language;
}

export class Language {
  id: number;
  code: string;
  name: string;
  intro: string;
}

export enum CallStatus {
  COMPLETED = 4,
  BUSY = 5,
  FAILED = 6,
  NO_ANSWER = 7,
  CANCELED = 8
}
