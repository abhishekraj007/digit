import util from '../util/util';

/* Phone Selection script */

// Add event handler on all searchh suggestion components
const searchSuggestions = selectAll('.search-suggestion');

if (searchSuggestions) {
  searchSuggestions.forEach(function (searchSuggestion) {
    searchSuggestion.onclick = function (event) {

      let target = event.target; // where was the click?

      let isSuggestedItemClicked = target.classList.contains('search-suggestion__item');

      if (isSuggestedItemClicked) {
        highlightAndInsert(target); // highlight it

      } else {
        return
      } // not clicked suggestion item, Then we're not interested

    };
  });
}


function highlightAndInsert(clickedItem) {
  // All suggested item
  let allSearchItems = clickedItem.parentNode.querySelectorAll('.search-suggestion__item');
  // search box
  let formInput = clickedItem.closest('form').querySelector('.search-box__input');
  // clicked text
  let clickedItemValue = clickedItem.textContent;

  // Remove highlight from all item
  allSearchItems.forEach((searchItem) => {
    searchItem.classList.remove('selected');
  });

  // Set clicked text
  formInput.value = clickedItemValue;
  // highlight the new selected item
  clickedItem.classList.add('selected');
}
