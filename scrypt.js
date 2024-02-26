
async function getAddressByCep() {
    const cep = document.getElementById('cep').value;
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      console.log(data);
      document.getElementById ('rua').innerHTML += `<div>${data.logradouro}</div>`
      document.getElementById ('bairro').innerHTML += `<div>${data.bairro}</div>` 
      document.getElementById ('cidade').innerHTML += `<div>${data.localidade}</div>` 
    }
    catch (erro) {
      alert(erro.message)
    }

  }

  async function getPrevisao() {
    const lat = document.getElementById('latitude').value;
    const long = document.getElementById('longitude').value;
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`)
      const data = await response.json();
      console.log(data);
      document.getElementById ('resposta').innerHTML = "";
      for (let index = 0; index < 1; index++){
        document.getElementById ('resposta').innerHTML +=`<div> Previsão de tempo de acordo com a região ${data.hourly.temperature_2m[index]}°C </div>`;
      }
    }
    catch (erro) {
      alert (error.message);
    }
  }