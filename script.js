const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
/* 
        <div class="col-md-4">
            <div class="team-card">
                <img src="" alt="Marco Bianchi">
                <div class="info">
                    <h5>Marco Bianchi</h5>
                    <p>Designer</p>
                    <a href="mailto:marcobianchi@team.com">marcobianchi@team.com</a>
                </div>
            </div>
        </div>*/


const rowEl = document.getElementById('teamMember');
const nameEl = document.getElementById('nome');
const roleEl = document.getElementById('role');
const imageEl = document.getElementById('image');
const emailEl = document.getElementById('email');
const formEl = document.getElementById('newMember');







for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  createCard(member);
}

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  // Crea un nuovo oggetto membro con i valori degli input
  const newMember = {
    name: nameEl.value,
    role: roleEl.value,
    email: emailEl.value,
    img: imageEl.value
  };

  teamMembers.push(newMember);

  // Crea la nuova scheda
  createCard(newMember);
  formEl.reset();

});


function createCard(member) {
  const cardMarkup = `
        <div class="col-12 col-sm-6 col-md-4 mb-4">
            <div class="team-card">
                <img src="${member.img}" alt="">
                <div class="info">
                    <h5>${member.name}</h5>
                    <p>${member.role}</p>
                    <a href="mailto:${member.email}">${member.email}</a>
                </div>
            </div>
        </div>
  `;
  rowEl.insertAdjacentHTML("beforeend", cardMarkup);
}
