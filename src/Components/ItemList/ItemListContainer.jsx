import "./ItemListContainer.css";
function ItemList(props) {
  return (
    <div className="tituloItems">
      <h3>{ props.greeting }</h3>

    </div>
  )
}

export default ItemList