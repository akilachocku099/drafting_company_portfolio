function ElectricalDiagram() {
  return (
    <svg viewBox="0 0 300 260" width="300" height="260" xmlns="http://www.w3.org/2000/svg">
      {/* Grid lines */}
      {[0,1,2,3,4,5].map(i => (
        <line key={`h${i}`} x1="10" y1={20+i*40} x2="290" y2={20+i*40} stroke="#1e3a5f" strokeWidth="0.5"/>
      ))}
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={`v${i}`} x1={10+i*40} y1="20" x2={10+i*40} y2="220" stroke="#1e3a5f" strokeWidth="0.5"/>
      ))}
      {/* Main circuit line */}
      <line x1="30" y1="100" x2="90" y2="100" stroke="#4a9eff" strokeWidth="2"/>
      {/* Transformer */}
      <circle cx="110" cy="100" r="18" fill="none" stroke="#4a9eff" strokeWidth="2"/>
      <circle cx="130" cy="100" r="18" fill="none" stroke="#4a9eff" strokeWidth="2"/>
      <line x1="148" y1="100" x2="200" y2="100" stroke="#4a9eff" strokeWidth="2"/>
      {/* Switchboard */}
      <rect x="200" y="80" width="50" height="40" fill="none" stroke="#4a9eff" strokeWidth="2" rx="2"/>
      <line x1="215" y1="80" x2="215" y2="120" stroke="#4a9eff" strokeWidth="1"/>
      <line x1="230" y1="80" x2="230" y2="120" stroke="#4a9eff" strokeWidth="1"/>
      <line x1="245" y1="80" x2="245" y2="120" stroke="#4a9eff" strokeWidth="1"/>
      {/* Branch circuits */}
      <line x1="210" y1="120" x2="210" y2="170" stroke="#7bc8ff" strokeWidth="1.5"/>
      <line x1="225" y1="120" x2="225" y2="170" stroke="#7bc8ff" strokeWidth="1.5"/>
      <line x1="240" y1="120" x2="240" y2="170" stroke="#7bc8ff" strokeWidth="1.5"/>
      {/* Ground symbols */}
      {[210,225,240].map(x => (
        <g key={x}>
          <line x1={x} y1="170" x2={x} y2="185" stroke="#7bc8ff" strokeWidth="1.5"/>
          <line x1={x-8} y1="185" x2={x+8} y2="185" stroke="#7bc8ff" strokeWidth="1.5"/>
          <line x1={x-5} y1="190" x2={x+5} y2="190" stroke="#7bc8ff" strokeWidth="1.2"/>
          <line x1={x-2} y1="195" x2={x+2} y2="195" stroke="#7bc8ff" strokeWidth="1"/>
        </g>
      ))}
      {/* Voltage label */}
      <rect x="20" y="85" width="40" height="16" fill="#0a1628" stroke="#4a9eff" strokeWidth="1" rx="2"/>
      <text x="40" y="97" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="monospace">415V</text>
      {/* Legend */}
      <rect x="10" y="225" width="280" height="22" fill="#0d2035" stroke="#1e3a5f" strokeWidth="1"/>
      <text x="150" y="240" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="monospace">ELECTRICAL SINGLE LINE DIAGRAM — DWG-001</text>
    </svg>
  );
}

export default ElectricalDiagram;
