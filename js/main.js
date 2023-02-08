document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const options = {
    method: 'GET',
    headers: { 
      'X-RapidAPI-Key': '46acffddd6msh2dd0013c039590dp128e31jsnbab1cf5c867a',
      'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
    }
  };

  const cityName = document.querySelector('#city').value 
  const countryName = document.querySelector('#country').value
  console.log(city)
  console.log(country)

fetch(`https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=${cityName}&countryName=${countryName}`, options)
	.then(response => response.json())
	.then(response => {
      console.log(response)
      document.querySelector('h2').innerText = response.name
      const link = document.querySelector("a");
      link.href = response.link;
      link.innerHTML = response.link;
      document.getElementById('pup').innerText = response.rating
  })


	.catch(err => console.error(err));
}


  

