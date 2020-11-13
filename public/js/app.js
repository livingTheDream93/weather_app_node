let form = document.querySelector('form')

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  let term = document.getElementById("searchText").value;
  try {
    let weather = await fetch("/weather?address=" + term)
    let res = await weather.json()
    document.getElementById('result').innerText = JSON.stringify(res.main) + JSON.stringify(res.weather)
  } catch (err) {
    console.log(err)
  }
});
