const filterNames = (array, firstName, lastName) => {
  return array.filter((user) =>
    !user.firstName.toLowerCase().includes(firstName.toLowerCase()) ||
    !user.lastName.toLowerCase().includes(lastName.toLowerCase())
      ? console.log(firstName + lastName + ' not found.')
      : user.firstName.toLowerCase().includes(firstName.toLowerCase()) ||
        user.lastName.toLowerCase().includes(lastName.toLowerCase())
  );
};

module.exports = {
  filterNames: filterNames
};
