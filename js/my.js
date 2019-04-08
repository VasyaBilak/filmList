const key = '4f77d211170879ad8b833a60483052aa',
      filmsList = document.querySelector('main')

window.addEventListener('load', () => {
    updateFilms()
    history.replaceState({}, 'Home', '#Home')
})

async function updateFilms() {

    filmsList.innerHTML = ''

    const response = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${key}`),
          json = await response.json()

    filmsList.innerHTML = json.production_companies.map(createList).join('\n')

  }


  const createList = (list) => {
 
  return `
    <div class="list">
      
      <ul> 
      <a a href="#" data-target="${list.name}" class="nav-link">
      <li>${list.name}</li>
      </a>
      </ul>         
      
    </div>
  `
}
