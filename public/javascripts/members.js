const addMember = (memberCount) => {
    const counter = document.getElementById('memberCounter');
    console.log("before: "+ counter.value);
    memberCount = Number.parseInt(counter.value) + 1;

    const container = document.getElementById('members-container');
    
    const divider = document.createElement('div');
    divider.classList.add('divider');

    const template = document.getElementById('memberTemplate');
    const newMember = template.cloneNode(true);
    newMember.id = "member" + memberCount;
    newMember.classList.remove("hidden");

    const delBtn = document.createElement('button');
    delBtn.classList.add('text-button')
    delBtn.textContent = "- REMOVE PERSON";
    delBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentNode.remove();
        counter.value -= 1;
    })
    
    newMember.appendChild(delBtn);
    newMember.appendChild(divider);

    container.appendChild(newMember);
    counter.value = memberCount;
    console.log("after: "+ counter.value);
}