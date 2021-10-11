function initSearch(){
    document.getElementById('default-search').addEventListener('input', updateSearch('default-search'), false);
}

function updateSearch(id){
    return function(){
        let searchbox = document.getElementById(`${id}`);
        let search = searchbox.value;

        if(search === ""){
            hideSearchResult();
            return;
        }
        
        updateSearchResultLocation(searchbox);
        search(search);
    }
}

function updateSearchResultLocation(input){
    let results = document.getElementById('search-results');
    //Show
    results.classList.remove('no-display');

    //Update location
    let y = getOffset(input).top + input.offsetHeight;
    let x = getOffset(input).left;
    let width = input.offsetWidth;

    results.style.top = y + "px";
    results.style.left = x + "px";
    results.style.width = width + "px";
}

function getOffset(e) {
    const rect = e.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

function hideSearchResult(){
    document.getElementById('search-results').classList.add('no-display');
}

function search(input){
    //Search google, youtube music, emails, messages, weather and saved keywords
    //Then decide on the most relevant results
}

initSearch();