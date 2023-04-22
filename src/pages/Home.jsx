import { useEffect, useState } from "react";
import { Request } from "../Request";
import CustomPagination from "../components/Pagination";
import { GET } from "../constant";
import getEndPoint from "../utils/getEndpoint";

export default function Home() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const apiData = await Request({ method: GET, endpoint: getEndPoint(page) });
      setData(apiData);
    })();
  }, [page]);

  return (
    <>
      {data?.data?.results &&
        data.data.results.map((item) => (
          <div key={item.id}>
            <h3>{item.id}</h3>
            <h4>{item.category}</h4>
          </div>
        ))}
      <CustomPagination
        page={page}
        setPage={setPage}
        count={data?.data?.count | 0}
      />
    </>
  );
}
