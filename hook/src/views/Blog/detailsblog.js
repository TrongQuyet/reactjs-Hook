import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../custom/fetch";
const Detailsblog = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const {
    data: datablogs,
    loading,
    iserr,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

  return (
    <div style={{ color: "white" }}>
      {loading === true ? "loading..." : <h2>Title : {datablogs.title}</h2>}
      <p>{datablogs.body}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Detailsblog;
