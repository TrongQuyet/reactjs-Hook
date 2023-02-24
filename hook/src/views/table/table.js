import "./table.scss";
import useFetch from "../custom/fetch";
// https://reqres.in/api/users?delay=1
const Table = (props) => {
  const {
    data: datacovid,
    loading,
    iserr,
  } = useFetch(
    "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z",
    true
  );
  console.log(datacovid);
  return (
    <div className="table-content">
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {loading === false &&
            datacovid &&
            datacovid.length > 0 &&
            datacovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Country}</td>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Deaths}</td>
                </tr>
              );
            })}
          {loading === true && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <span className="loading">Loading.... </span>
              </td>
            </tr>
          )}
          {iserr === true && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                <span className="loading">thôi chết hỏng rồi</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
