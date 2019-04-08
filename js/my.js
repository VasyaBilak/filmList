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
        <a href="#" data-target="${list.name}" class="nav-link">
           <li>${list.name}</li>
        </a>
      </ul>         
      
    </div>
  `
}

// // Search don't work 
// const list = document.querySelector('.list ul'),  //null
//       btn = document.querySelector('btn'),
//       searchBar = document.forms['search'].querySelector('input')

// searchBar.addEventListener('keyup', e => {

//   const val = e.target.value.toLowerCase(),
//         li = list.getElementsByTagName('li')

//   Array.from(li).forEach(filmName => {
//     const title = filmName.firstElementChild.textContent

//     if(title.toLowerCase().indexOf(val) != -1) {
//       filmName.style.display = 'block'
//     } else {
//       filmName.style.display = 'none'
//     }
//   })
// })
