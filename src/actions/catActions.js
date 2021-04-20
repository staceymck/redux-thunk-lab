export const fetchCats = () => {
  return (dispatch) => {
    dispatch({type: "LOADING_CATS"})
    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
    .then(res => res.json())
    .then(data => {
      dispatch({type: "ADD_CATS", cats: data.images})
    })
  }
}