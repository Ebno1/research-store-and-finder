const Uploaded=()=>{
    fetch("http://127.0.0.1:8000/file/allfiles").then((res)=>{
        return res
    }).then(data=>{
        return data.json()
    }).then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err)
    })
    return(
        <div></div>
    )
}
export default Uploaded;