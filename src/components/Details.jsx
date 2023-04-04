import useDetails from "../utils/useDetails";

function Details({ id }) {
  const [details, loading] = useDetails(id);
  return loading ? (
    <div>loading..</div>
  ) : (
    <div>
      <div>
        {details.images?.map((image) => (
          <img key={image} src={image} alt={image} />
        ))}
      </div>
      <div>{details.discription}</div>
    </div>
  );
}
export default Details;
