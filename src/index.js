import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla! Abu kut</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
for (let y = 1; y <= 10; y++) {
  let row = "";
  for (let x = 1; x <= 10; x++) {
    row += y * x + "\t";
  }
  console.log(row);
}
