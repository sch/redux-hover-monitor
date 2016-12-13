import React from 'react';

const svg = `
<svg height="32" class="octicon octicon-versions" viewBox="0 0 14 16" version="1.1" width="28" aria-hidden="true">
  <path d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"></path>
</svg>`;

export default function Icon() {
  return React.createElement('div', {
    style: { color: 'rgba(1, 1, 1, 0.2)' },
    dangerouslySetInnerHTML: { __html: svg }
  });
}
