import useFetch from "../../../settings/hooks";
const EbtedayeeResult = () => {

  const { data } = useFetch(`http://localhost:5001/classonetofour/Ebtedayee`);
  return (
    <div>
      {data?.map((ele) => {
        const { _id, title, pdfFile } = ele
        return (
          <div style={{width: '90%', margin: "20px auto"}} key={_id}>
            <h3 style={{textAlign: "center", textTransform: "uppercase", padding: '20px', margin: '20px auto', background: "#0001"}}>{title}</h3>
            <embed
              src={`http://localhost:5001/${pdfFile}`}
              style={{ margin: '0 auto', display: 'block', boxShadow: "1px 20px 10px #0005" }}
              width="100%"
              height="650px"
              title={'samplePdf'}
            />
          </div>
        )
      })}
    </div>
  )
}
export default EbtedayeeResult
