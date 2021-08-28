 // stateless 
// component function

const ProdItem = (props) => {
  let item = props.item;
  const showPrice = () => {
    alert(item.price);
  }

  return (
    <div className="col-lg-6 border p-2">
      <img src={item.image} alt={item.name} className="w-25 float-start me-2" />
      <h2>{item.name} -- </h2>
      <div>Price:{item.price}</div>
      <button onClick={showPrice}>show Price</button>
    </div>
  )
}

export default ProdItem;