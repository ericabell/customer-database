/*
  INFO I NEED FOR EACH ENTRY
  image - picture.large picture.medium picture.small
  first name last name - name.title name.first name.last
  email address - email
  address city state zip - location.street location.city location.state location.postcode
  phone number - phone
  social security - id.value
*/

let customerResults = customers.results;

let divForContent = document.createElement('div');

let customerDivData = `
  <h1 class="title">internal company directory</h1>
`;
customerResults.forEach(function(customer) {
  customerDivData += `
    <div class="customer">
      <img class="customer-image" src="${customer.picture.large}">
      <p class="customer-name">${customer.name.first} ${customer.name.last}</p>
      <p class="customer-email">${customer.email}</p>
      <p class="customer-street">${customer.location.street}</p>
      <p class="customer-csz">${customer.location.city}, ${customer.location.state} ${customer.location.postcode}</p>
      <p class="customer-ssn">${customer.id.value}</p>
    </div>
  `
});

let divContainerForData = document.querySelector('.container');
divContainerForData.innerHTML = customerDivData;
