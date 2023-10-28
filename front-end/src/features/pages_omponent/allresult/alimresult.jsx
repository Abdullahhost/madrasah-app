
import useFetch from "../../../settings/hooks";
const AlimResult = () => {

  const { data } = useFetch(`https://madrasah-app.onrender.com/classonetofour/Alim`);
  return (
    <div>
      {data?.map((ele) => {
        const { _id, title, pdfFile } = ele
        return (
          <div style={{width: '90%', margin: "20px auto"}} key={_id}>
            <h3 style={{textAlign: "center", textTransform: "uppercase", padding: '20px', margin: '20px auto', background: "#0001"}}>{title}</h3>
            <embed
              src={`https://madrasah-app.onrender.com/${pdfFile}`}
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
export default AlimResult
