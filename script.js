let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  function PrintDeveloper() {
    const developers = arr.filter(employee => employee.profession === 'developer');
    console.log('Developers:', developers);
  }
  
  function addData() {
    const newEmployee = { id: 4, name: 'susan', age: 20, profession: 'intern' };
    arr.push(newEmployee);
    console.log('New Data:', arr);
  }
  
  function removeAdmin() {
    const filteredEmployees = arr.filter(employee => employee.profession !== 'admin');
    console.log('Employees without Admin:', filteredEmployees);
  }
  
  function concatenateArray() {
    const additionalEmployees = [
      { id: 5, name: 'mike', age: 22, profession: 'developer' },
      { id: 6, name: 'lisa', age: 21, profession: 'admin' },
    ];
    const updatedEmployees = arr.concat(additionalEmployees);
    console.log('Concatenated Array:', updatedEmployees);
  }