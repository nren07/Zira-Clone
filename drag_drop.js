const todoContainer=document.getElementById("TODO");
const container=document.querySelectorAll(".container");
let draggingElement=null; 

const onDragOver=(event)=>{
    //prevent default should be conditional 
    // within same container it is not dropable
    if(event.currentTarget.id===draggingElement.parentNode.id) return;

    else if(draggingElement.parentNode.id=="INPROGRESS" && event.currentTarget.id=="TODO"){
        return;
    }
    else if(draggingElement.parentNode.id=="DONE" && event.currentTarget.id=="INPROGRESS" || 
        event.currentTarget.id=="TODO"){
        return;
    }
    else event.preventDefault();
    
    
};
const onDrop=(event)=>{
    
    
    event.currentTarget.appendChild(draggingElement);
    // draggingElement=null;
}

for(let i=0;i<container.length;i++){
    container[i].addEventListener("dragover",onDragOver);
    container[i].addEventListener("drop",onDrop);
}

let onDragStart=(event)=>{
    draggingElement=event.currentTarget;
}