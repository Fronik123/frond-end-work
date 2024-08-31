dataTable = [
  {
    customer: "Nick",
    company: "Apple",
    phone: "(225) 555-0118",
    email: "testsdfs@gmail.com",
    country: "Brazil",
    status: false,
  },
  {
    customer: "Floyd Miles",
    company: "Ford",
    phone: "(225) 555-0111",
    email: "testsdfs@gmail.com",
    country: "Brazil",
    status: false,
  },
  {
    customer: "Gleb",
    company: "Tesla",
    phone: "(225) 445-0111",
    email: "lasdwef@gmail.com",
    country: "Itan",
    status: true,
  },
  {
    customer: "Gleb",
    company: "Yahoo",
    phone: "(225) 877-0111",
    email: "lasdwef@gmail.com",
    country: "Itan",
    status: true,
  },
  {
    customer: "Kathryn Murphy",
    company: "Facebook",
    phone: "(225) 502-0111",
    email: "lasdwef@gmail.com",
    country: "Itan",
    status: true,
  },
  {
    customer: "Kristin Watson",
    company: "Google",
    phone: "(225) 032-0111",
    email: "lasdwef@gmail.com",
    country: "Itan",
    status: true,
  },
];

const tbody = document.querySelector(".main__table-content");

const rows = dataTable
  .map(
    (data) => `
  <tr class='main__table-list main__table-list--tbody'>
    <td class="th--first">${data.customer}</td>
    <td class="th--second">${data.company}</td>
    <td class="th--third">${data.phone}</td>
    <td class="th--four">${data.email}</td>
    <td class="th--five">${data.country}</td>
    <td class="th--six"> <button class="button button__table ${
      data.status ? "button--active" : "button--inactive"
    }">${data.status ? "Active" : "Inactive"}</button>   </td>
  </tr>
  <tr class="separator">
     <td></td> 
  </tr>
`
  )
  .join("");

tbody.innerHTML = rows;
