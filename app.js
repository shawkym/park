// Load ideas from localStorage
let ideas = JSON.parse(localStorage.getItem('ideas')) || [];

function saveIdeas() {
  localStorage.setItem('ideas', JSON.stringify(ideas));
}

function renderIdeas() {
  const container = document.getElementById('ideaList');
  container.innerHTML = '';

  const categories = ['Parked', 'Experimenting', 'Committed'];
  categories.forEach(cat => {
    const catIdeas = ideas.filter(i => i.category === cat);
    if (catIdeas.length > 0) {
      const catTitle = document.createElement('div');
      catTitle.className = 'category';
      catTitle.textContent = cat;
      container.appendChild(catTitle);

      catIdeas.forEach((idea, idx) => {
        const ideaDiv = document.createElement('div');
        ideaDiv.className = 'idea';
        ideaDiv.innerHTML = `
          <h3>${idea.title}</h3>
          <p>${idea.notes}</p>
          <select onchange="changeCategory(${ideas.indexOf(idea)}, this.value)">
            <option value="Parked" ${idea.category==='Parked'?'selected':''}>Parked</option>
            <option value="Experimenting" ${idea.category==='Experimenting'?'selected':''}>Experimenting</option>
            <option value="Committed" ${idea.category==='Committed'?'selected':''}>Committed</option>
          </select>
          <button onclick="deleteIdea(${ideas.indexOf(idea)})">Delete</button>
        `;
        container.appendChild(ideaDiv);
      });
    }
  });
}

function addIdea() {
  const title = document.getElementById('ideaTitle').value.trim();
  const notes = document.getElementById('ideaNotes').value.trim();
  const category = document.getElementById('ideaCategory').value;
  if (!title) return alert("Idea needs a title!");
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

// Initial render
renderIdeas();
