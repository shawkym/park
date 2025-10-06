<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parking Lot for Ideas</title>
    <style>
        :root {
            --parked-color: #3498db;
            --in-progress-color: #f39c12;
            --review-color: #9b59b6;
            --done-color: #2ecc71;
            --background-color: #f5f5f5;
            --text-color: #333;
            --asphalt-color: #5a5a5a;
            --line-color: #ffffff;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--background-color);
            color: var(--text-color);
            line-height: 1.6;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        header {
            text-align: center;
            margin-bottom: 30px;
        }

        h1 {
            color: #2c3e50;
            margin-bottom: 10px;
        }

        .parking-lot {
            background-color: var(--asphalt-color);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
            position: relative;
            min-height: 500px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .parking-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            position: relative;
        }

        .parking-row::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background-color: var(--line-color);
            opacity: 0.3;
        }

        .parking-space {
            width: 120px;
            height: 80px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 6px;
            border: 2px dashed var(--line-color);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            position: relative;
            transition: all 0.3s ease;
        }

        .parking-space.highlight {
            background-color: rgba(255, 255, 255, 0.2);
            border: 2px solid var(--line-color);
        }

        .parking-space.parked {
            border-color: var(--parked-color);
        }

        .parking-space.in-progress {
            border-color: var(--in-progress-color);
        }

        .parking-space.review {
            border-color: var(--review-color);
        }

        .parking-space.done {
            border-color: var(--done-color);
        }

        .zone-label {
            position: absolute;
            top: -25px;
            left: 0;
            font-weight: bold;
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 2px 8px;
            border-radius: 4px;
        }

        .idea-vehicle {
            width: 100px;
            height: 60px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: move;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: transform 0.2s, box-shadow 0.2s;
            position: relative;
            overflow: hidden;
            padding: 5px;
            text-align: center;
        }

        .idea-vehicle:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
        }

        .idea-vehicle.parked {
            background-color: var(--parked-color);
        }

        .idea-vehicle.in-progress {
            background-color: var(--in-progress-color);
        }

        .idea-vehicle.review {
            background-color: var(--review-color);
        }

        .idea-vehicle.done {
            background-color: var(--done-color);
        }

        .vehicle-title {
            font-size: 0.8rem;
            font-weight: bold;
            color: white;
            margin-bottom: 2px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 90%;
        }

        .vehicle-date {
            font-size: 0.6rem;
            color: rgba(255, 255, 255, 0.8);
        }

        .add-idea-form {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }

        input, textarea, select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: inherit;
        }

        textarea {
            min-height: 80px;
            resize: vertical;
        }

        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #2980b9;
        }

        .legend {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .legend-item {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .legend-color {
            width: 20px;
            height: 20px;
            border-radius: 4px;
        }

        .legend-color.parked {
            background-color: var(--parked-color);
        }

        .legend-color.in-progress {
            background-color: var(--in-progress-color);
        }

        .legend-color.review {
            background-color: var(--review-color);
        }

        .legend-color.done {
            background-color: var(--done-color);
        }

        .empty-space {
            color: rgba(255, 255, 255, 0.5);
            font-style: italic;
        }

        .dragging {
            opacity: 0.7;
            transform: rotate(5deg);
        }

        @media (max-width: 768px) {
            .parking-space {
                width: 90px;
                height: 70px;
            }
            
            .idea-vehicle {
                width: 80px;
                height: 50px;
            }
            
            .vehicle-title {
                font-size: 0.7rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Parking Lot for Ideas</h1>
            <p>Park your ideas as vehicles and move them through different stages until completion</p>
        </header>

        <div class="legend">
            <div class="legend-item">
                <div class="legend-color parked"></div>
                <span>Parked Ideas</span>
            </div>
            <div class="legend-item">
                <div class="legend-color in-progress"></div>
                <span>In Progress</span>
            </div>
            <div class="legend-item">
                <div class="legend-color review"></div>
                <span>Under Review</span>
            </div>
            <div class="legend-item">
                <div class="legend-color done"></div>
                <span>Done</span>
            </div>
        </div>

        <div class="add-idea-form">
            <h2>Add New Idea</h2>
            <form id="ideaForm">
                <div class="form-group">
                    <label for="ideaTitle">Idea Title</label>
                    <input type="text" id="ideaTitle" required>
                </div>
                <div class="form-group">
                    <label for="ideaDescription">Description</label>
                    <textarea id="ideaDescription"></textarea>
                </div>
                <div class="form-group">
                    <label for="ideaState">Initial State</label>
                    <select id="ideaState">
                        <option value="parked">Parked</option>
                        <option value="in-progress">In Progress</option>
                        <option value="review">Under Review</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <button type="submit">Park This Idea</button>
            </form>
        </div>

        <div class="parking-lot" id="parkingLot">
            <!-- Parking spaces will be generated by JavaScript -->
        </div>
    </div>

    <script>
        // Data structure to hold all ideas
        let ideas = [];

        // DOM elements
        const ideaForm = document.getElementById('ideaForm');
        const ideaTitle = document.getElementById('ideaTitle');
        const ideaDescription = document.getElementById('ideaDescription');
        const ideaState = document.getElementById('ideaState');
        const parkingLot = document.getElementById('parkingLot');

        // Parking lot configuration
        const parkingConfig = {
            'parked': { label: 'Parked Ideas', spaces: 6 },
            'in-progress': { label: 'In Progress', spaces: 4 },
            'review': { label: 'Under Review', spaces: 3 },
            'done': { label: 'Done', spaces: 4 }
        };

        // Initialize the app
        function init() {
            loadIdeas();
            setupEventListeners();
            renderParkingLot();
            renderIdeas();
        }

        // Load ideas from localStorage
        function loadIdeas() {
            const savedIdeas = localStorage.getItem('parkingLotIdeas');
            if (savedIdeas) {
                ideas = JSON.parse(savedIdeas);
            }
        }

        // Save ideas to localStorage
        function saveIdeas() {
            localStorage.setItem('parkingLotIdeas', JSON.stringify(ideas));
        }

        // Set up event listeners
        function setupEventListeners() {
            // Form submission
            ideaForm.addEventListener('submit', function(e) {
                e.preventDefault();
                addIdea();
            });

            // Drag and drop functionality
            setupDragAndDrop();
        }

        // Add a new idea
        function addIdea() {
            const title = ideaTitle.value.trim();
            const description = ideaDescription.value.trim();
            const state = ideaState.value;
            
            if (!title) {
                alert('Please enter an idea title');
                return;
            }

            const newIdea = {
                id: Date.now().toString(),
                title: title,
                description: description,
                state: state,
                createdAt: new Date().toISOString()
            };

            ideas.push(newIdea);
            saveIdeas();
            renderIdeas();
            
            // Reset form
            ideaForm.reset();
            ideaTitle.focus();
        }

        // Render the parking lot structure
        function renderParkingLot() {
            parkingLot.innerHTML = '';
            
            // Create rows for each state
            for (const [state, config] of Object.entries(parkingConfig)) {
                const row = document.createElement('div');
                row.className = 'parking-row';
                
                // Add zone label
                const label = document.createElement('div');
                label.className = 'zone-label';
                label.textContent = config.label;
                row.appendChild(label);
                
                // Create parking spaces
                for (let i = 0; i < config.spaces; i++) {
                    const space = document.createElement('div');
                    space.className = `parking-space ${state}`;
                    space.setAttribute('data-state', state);
                    space.setAttribute('data-index', i);
                    
                    // Add empty space indicator
                    const emptyIndicator = document.createElement('div');
                    emptyIndicator.className = 'empty-space';
                    emptyIndicator.textContent = 'Empty';
                    space.appendChild(emptyIndicator);
                    
                    row.appendChild(space);
                }
                
                parkingLot.appendChild(row);
            }
        }

        // Render all ideas in their respective parking spaces
        function renderIdeas() {
            // Clear all vehicles from parking spaces
            document.querySelectorAll('.idea-vehicle').forEach(vehicle => {
                vehicle.remove();
            });
            
            // Reset empty indicators
            document.querySelectorAll('.empty-space').forEach(indicator => {
                indicator.style.display = 'block';
            });

            // If no ideas, we're done
            if (ideas.length === 0) return;

            // Group ideas by state
            const ideasByState = {
                'parked': [],
                'in-progress': [],
                'review': [],
                'done': []
            };
            
            ideas.forEach(idea => {
                ideasByState[idea.state].push(idea);
            });

            // Render each idea in its parking space
            for (const [state, stateIdeas] of Object.entries(ideasByState)) {
                const spaces = document.querySelectorAll(`.parking-space[data-state="${state}"]`);
                
                stateIdeas.forEach((idea, index) => {
                    if (index < spaces.length) {
                        const space = spaces[index];
                        const vehicle = createIdeaVehicle(idea);
                        space.appendChild(vehicle);
                        
                        // Hide empty indicator for this space
                        space.querySelector('.empty-space').style.display = 'none';
                    }
                });
            }
        }

        // Create HTML element for an idea vehicle
        function createIdeaVehicle(idea) {
            const vehicle = document.createElement('div');
            vehicle.className = `idea-vehicle ${idea.state}`;
            vehicle.setAttribute('draggable', 'true');
            vehicle.setAttribute('data-id', idea.id);

            const date = new Date(idea.createdAt).toLocaleDateString();

            vehicle.innerHTML = `
                <div class="vehicle-title">${escapeHtml(idea.title)}</div>
                <div class="vehicle-date">${date}</div>
            `;

            return vehicle;
        }

        // Set up drag and drop functionality
        function setupDragAndDrop() {
            let draggedElement = null;

            // Drag start
            document.addEventListener('dragstart', function(e) {
                if (e.target.classList.contains('idea-vehicle')) {
                    draggedElement = e.target;
                    e.target.classList.add('dragging');
                    e.dataTransfer.setData('text/plain', e.target.getAttribute('data-id'));
                }
            });

            // Drag end
            document.addEventListener('dragend', function(e) {
                if (e.target.classList.contains('idea-vehicle')) {
                    e.target.classList.remove('dragging');
                    document.querySelectorAll('.parking-space').forEach(space => {
                        space.classList.remove('highlight');
                    });
                    draggedElement = null;
                }
            });

            // Drag over
            document.addEventListener('dragover', function(e) {
                e.preventDefault();
                
                // Highlight potential drop targets
                if (draggedElement) {
                    const space = e.target.closest('.parking-space');
                    if (space && !space.querySelector('.idea-vehicle')) {
                        document.querySelectorAll('.parking-space').forEach(s => {
                            s.classList.remove('highlight');
                        });
                        space.classList.add('highlight');
                    }
                }
            });

            // Drop
            document.addEventListener('drop', function(e) {
                e.preventDefault();
                
                if (draggedElement) {
                    const space = e.target.closest('.parking-space');
                    if (space && !space.querySelector('.idea-vehicle')) {
                        const ideaId = draggedElement.getAttribute('data-id');
                        const newState = space.getAttribute('data-state');
                        
                        // Update idea state
                        const ideaIndex = ideas.findIndex(idea => idea.id === ideaId);
                        if (ideaIndex !== -1) {
                            ideas[ideaIndex].state = newState;
                            saveIdeas();
                            renderIdeas();
                        }
                    }
                    
                    // Remove highlights
                    document.querySelectorAll('.parking-space').forEach(s => {
                        s.classList.remove('highlight');
                    });
                }
            });
        }

        // Helper function to escape HTML
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
    </script>
</body>
</html>
