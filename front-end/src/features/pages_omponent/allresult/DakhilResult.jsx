
import useFetch from "../../../settings/hooks";
const DakhilResult = () => {

  const { data } = useFetch(`https://madrasah-app.onrender.com/classonetofour/Dakhil`);
  return (
    <div>
      {data?.map((ele) => {
        const { _id, title, pdfFile } = ele
        return (
          <div style={{width: '90%', margin: "20px auto"}} key={_id}>
            <h2 style={{textAlign: "center", textTransform:  "uppercase", textShadow: '2px 2px 10px #0004', padding: '20px', margin: '20px auto', background: "#0001"}}>{title}</h2>
            <embed
              src={`https://madrasah-app.onrender.com/${pdfFile}`}
              style={{ margin: '0 auto', display: 'block', boxShadow: "0px 0px 10px #000" }}
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
export default DakhilResult
