const renumberMembers = () => {
  const members = document.querySelectorAll('.member');
  let count = 1;
  members.forEach((member) => {
    member.id = `member${count}`;

    const inputs = member.querySelectorAll('.member-input');
    inputs.forEach((input) => {
      const newName = input.name.substr(0, input.name.length - 1);
      input.name = `${newName}${count}`;
      input.id = input.name;
    });

    count += 1;
  });
};

const removeMember = (e) => {
  const counter = document.getElementById('memberCounter');
  e.preventDefault();
  e.target.parentNode.remove();
  counter.value -= 1;
  renumberMembers();
};

const addMember = () => {
  const counter = document.getElementById('memberCounter');
  const newMemberCount = Number.parseInt(counter.value, 10) + 1;

  const container = document.getElementById('members-container');

  const divider = document.createElement('div');
  divider.classList.add('divider');

  const template = document.getElementById('memberTemplate');
  const newMember = template.cloneNode(true);
  newMember.id = `member${newMemberCount}`;
  newMember.classList.remove('hidden');

  const inputs = newMember.querySelectorAll('.member-input');
  inputs.forEach((input) => {
    input.name = `${input.name}${newMemberCount}`;
    input.id = input.name;
  });

  const delBtn = document.createElement('button');
  delBtn.classList.add('text-button');
  delBtn.textContent = '- REMOVE PERSON';
  delBtn.addEventListener('click', removeMember);

  newMember.appendChild(delBtn);
  newMember.appendChild(divider);

  container.appendChild(newMember);
  counter.value = newMemberCount;
};

