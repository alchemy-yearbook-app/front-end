import React from 'react';

export default function MemoryList({ memorybook }) {
  return (
    <div>
      {memorybook.map((item) => (
        <div class="item">
          <div class="polaroid">
            <img src={item.imageUrl} />
            <div class="caption">{item.text}</div>
            <div class="author">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
