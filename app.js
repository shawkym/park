let ideas = JSON.parse(localStorage.getItem('ideas')) || [];

function saveIdeas() {
  localStorage.setItem('ideas', JSON.stringify(ideas));
}

function renderIdeas() {
  const container = document.getElementById('ideaList');
  container.innerHTML = '';

  if(ideas.length === 0){
    container.innerHTML = '<p>No ideas yet. Add one above!</p>';
    return;
  }

  ideas.forEach((idea, idx) => {
    const ideaDiv = document.createElement('div');
    ideaDiv.className = 'idea';
    ideaDiv.innerHTML = `
      <h3>${idea.title}</h3>
      <p>${idea.notes}</p>
      <select onchange="changeCategory(${idx}, this.value)">
        <option value="Parked" ${idea.category==='Parked'?'selected':''}>Parked</option>
        <option value="Experimenting" ${idea.category==='Experimenting'?'selected':''}>Experimenting</option>
        <option value="Committed" ${idea.category==='Committed'?'selected':''}>Committed</option>
      </select>
      <button onclick="deleteIdea(${idx})">Delete</button>
    `;
    container.appendChild(ideaDiv);
  });
}

function addIdea() {
  const title = document.getElementById('ideaTitle').value.trim();
  const notes = document.getElementById('ideaNotes').value.trim();
  const category = document.getElementById('ideaCategory').value;
  if(!title) return alert("Idea needs a title!");
  ideas.push({title, notes, category});
  saveIdeas();
  renderIdeas();
  document.getElementById('ideaTitle').value = '';
  document.getElementById('ideaNotes').value = '';
}

function deleteIdea(index) {
  ideas.splice(index, 1);
  saveIdeas();
  renderIdeas();
}

function changeCategory(index, newCategory) {
  ideas[index].category = newCategory;
  saveIdeas();
  renderIdeas();
}

renderIdeas();
