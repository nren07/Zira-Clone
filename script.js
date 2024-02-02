const form=document.getElementById("create-task-form");
const model=document.getElementById("model");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    // const taskStatus=e.target.state.value;
    // or
    const taskStatus=form.state.value.toUpperCase();

    const taskInfo = {
        title: form.title.value,
        description: form.description.value,
        developer:form.developer.value,
        estamite:form.estimate.value
    }

    const taskCard=document.createElement("div");
    taskCard.className="task_card";
    taskCard.title=taskInfo.description;
    taskCard.innerHTML=`
    <h3>${taskInfo.title}</h3>
                <div>
                    <span class="badge">${taskInfo.estamite} days</span>
                    <span class="image">${taskInfo.developer[0].toUpperCase()}</span>
                </div>
    `;

    const taskContainer = document.getElementById(taskStatus);
    taskContainer.append(taskCard);
})

function toggleModel(element){
    model.classList.toggle("hide-model");

    element.innerText=="expand-more" ? element.innerText="expand_less" : element.innerText="expand_more";
}