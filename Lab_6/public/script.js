const render = async() => {
    const data = await fetchData();
    console.log(data);
    const root = document.getElementById("root");
    root.innerHTML = `<table class="table table-striped table-sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Header</th>
        <th>Header</th>
      </tr>
    </thead>
    <tbody>
    ${data.map(elem => (
        `
    <tr>
        <td>${elem.id}</td>
        <td>${elem.user}</td>
        <td>${elem.password}</td>
      </tr>`
    ))}
    </tbody>` 

}

const fetchData= async() => 
{
const data = await fetch('http://localhost:3000/api/').then(response => {
        if(response.ok) {
            return response.json()
        }
    }).then(data => {
        return data;
    })
    return data;
}