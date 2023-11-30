import { faker } from '@faker-js/faker/locale/ja';
import { createDummyWorkday } from './useWorkdays';

export interface Staff {
  staffName: string;
  photo: string;
  // workdays: {}[];
  experience: string;
  skills: string;
}

export const createRandomStaff = (): Staff => {
  //const workdays = createDummyWorkday([]);
  const staff = {
    staffName: `${faker.name.lastName()} ${faker.name.firstName()} `,
    photo: faker.image.avatar(),
    experience: faker.name.jobArea(),
    skills: faker.name.jobDescriptor()
  };

  return staff;
}

export const createStaff = (microcmsClient: any, successCallback: any, staff: any) => {
  microcmsClient.create({
    endpoint: 'staffs',
    content: staff,
  })
  .then(successCallback)
  .catch((err: any) => console.error(err));

  return staff;
}

// workshop: deleteStaff を追加しましょう
export const deleteUser = (microcmsClient: any, successCallback: any, staff: any) => {
  // コードを追加しましょう！
  return staff;
}
