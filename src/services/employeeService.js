const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const getDepartmentCollection = () => [
  { title: "Development", departmentId: 1 },
  { title: "Marketing", departmentId: 2 },
  { title: "Accounting", departmentId: 3 },
  { title: "HR", departmentId: 4 },
];

export function insertEmployee(data) {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  data["department"] = getDepartmentCollection().find((item) => item.departmentId === parseInt(data.departmentId))?.title;
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function updateEmployee(data) {
  let employees = getAllEmployees();
  let recordIndex = employees.findIndex((x) => x.id === data.id);
  data["department"] = getDepartmentCollection().find((item) => item.departmentId === parseInt(data.departmentId))?.title;
  employees[recordIndex] = { ...data };
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function deleteEmployee(id) {
  let employees = getAllEmployees();
  employees = employees.filter((x) => x.id !== id);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  const localEmployees = localStorage.getItem(KEYS.employees);
  return JSON.parse(localEmployees);
}
