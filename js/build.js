function build_add (c1, c2) {
    let table = document.getElementById("build");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = `${c1}`;
    cell2.innerHTML = `${c2}`;
}

function build_clear () {
  let table = document.getElementById("build");
  while(table.rows.length > 1) {
    table.deleteRow(1);
  }
}
