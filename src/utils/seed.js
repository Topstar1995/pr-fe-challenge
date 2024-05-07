import faker from "faker";
import { ulid } from "ulid";

const DEPARTMENTS = [
  { name: "Development", id: 1 },
  { name: "Marketing", id: 2 },
  { name: "Accounting", id: 3 },
  { name: "HR", id: 4 },
  { name: "None", id: 5 },
];

const DEFAULT_SEED_AMOUNT = 25;
const LOCALSTORAGE_KEY = "employees";
faker.locale = "en_GB";
faker.phone.phoneNumberFormat('e164')

export function seedEmployees() {
  const generatedEmployeeArr = generateEmployeeArray(DEFAULT_SEED_AMOUNT);
  customSetLocalStorage(generatedEmployeeArr);
}

function customSetLocalStorage(dataObj) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataObj));
}

function generateEmployeeArray(length) {
  return new Array(length).fill(null).map((_) => generateEmployee());
}

function generateEmployee() {
  const randomDepartmentId = Math.floor(Math.random() * DEPARTMENTS.length);
  return {
    city: faker.address.cityName(),
    department: DEPARTMENTS[randomDepartmentId]?.name,
    departmentId: DEPARTMENTS[randomDepartmentId]?.id,
    email: faker.internet.email(),
    fullName: faker.name.findName(),
    gender: "None",
    hireDate: "2021-12-16T17:01:00.000Z",
    id: ulid(),
    isPermanent: true,
    mobile: faker.phone.phoneNumber(),
  };
}
