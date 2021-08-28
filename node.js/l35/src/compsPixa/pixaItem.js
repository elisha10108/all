const PixaItem = (props) => {
  let item = props.item
  return (
    <div className="col-lg-6 border p-2">
      <img src={item.previewURL} className="w-25 float-start me-2" alt={item.tags} />
      <h2>{item.tags} --</h2>
      <div>Likes: {item.likes}</div>
      <div>Views: {item.views}</div>
      <a className="btn btn-danger" target="_blank" href={item.pageURL}>More info</a>
    </div>
  )
}

export default PixaItem;