export default function Notesdata(props){
    return(
<>
<div class="card" style={{marginLeft:"20px",marginTop:"10px",width:"18rem",height:"10rem"}}>
<div class="card-body">
    <p class="card-text"><b>Note No : {props.id+1}</b>{props.noteData}</p>
</div>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onClick={()=>{
   props.deleteData(props.id)
}}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>
</div>
</>
    )
}