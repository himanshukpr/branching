import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import './App.css';

function App() {
  const cards = [
    { id: 1, title: 'Drag Me!', content: 'This card can be moved anywhere', color: '#ffadad' },
    { id: 2, title: 'Move Me', content: 'Try positioning this one somewhere else', color: '#a0c4ff' },
    { id: 3, title: 'Draggable', content: 'All these cards are fully draggable', color: '#bdb2ff' },
    { id: 4, title: 'Position Freely', content: 'Place me wherever you want', color: '#caffbf' }
  ];

  // Create refs for each card
  const nodeRefs = cards.map(() => useRef(null));

  const handleDragStop = (id, e, data) => {
    // console.log(Card ${id} moved to:, { x: data.x, y: data.y });
  };

  return (
    <div className="app-container">
      <header>
        <h1>Himanshu baby</h1>
        <h1>Draggable Components</h1>
        <p className="subtitle">Drag and position the cards anywhere on the board</p>
      </header>

      <div className="drag-board">
        {cards.map((card, index) => (
          <Draggable 
            key={card.id} 
            nodeRef={nodeRefs[index]}
            defaultPosition={{x: 20 + (card.id * 40), y: 20 + (card.id * 30)}}
            grid={[5, 5]} 
            onStop={(e, data) => handleDragStop(card.id, e, data)}
          >
            <div 
              ref={nodeRefs[index]} 
              className="drag-card" 
              style={{ backgroundColor: card.color }}
            >
              <div className="drag-handle">⋮⋮⋮</div>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default App;