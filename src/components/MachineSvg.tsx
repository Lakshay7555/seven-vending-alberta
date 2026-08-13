export function MachineSvg() {
  const rows = [0, 1, 2, 3];
  const cols = [0, 1, 2, 3];
  return (
    <svg
      viewBox="0 0 240 360"
      width="240"
      height="360"
      role="img"
      aria-label="Flat illustration of a vending machine"
      className="h-auto w-56 md:w-64"
    >
      <rect x="1" y="1" width="238" height="358" fill="#0e1730" stroke="#C7CDD6" strokeWidth="2" />
      <rect x="16" y="16" width="140" height="240" fill="#14213D" stroke="#C7CDD6" strokeWidth="2" />
      {rows.map((r) =>
        cols.map((c) => (
          <rect
            key={`${r}-${c}`}
            x={26 + c * 32}
            y={28 + r * 58}
            width={24}
            height={40}
            fill={r === 1 && c === 2 ? "#FFB627" : "#F7F5F0"}
            opacity={r === 1 && c === 2 ? 1 : 0.85}
          />
        )),
      )}
      <rect x="170" y="16" width="54" height="70" fill="#14213D" stroke="#FFB627" strokeWidth="2" />
      <text x="197" y="60" textAnchor="middle" fill="#FFB627" fontFamily="monospace" fontSize="22">
        A1
      </text>
      {["B2", "C3", "D4", "E5"].map((code, i) => (
        <rect
          key={code}
          x={170 + (i % 2) * 28}
          y={100 + Math.floor(i / 2) * 28}
          width="24"
          height="24"
          fill="#14213D"
          stroke="#C7CDD6"
          strokeWidth="2"
        />
      ))}
      <rect x="170" y="164" width="54" height="92" fill="#14213D" stroke="#C7CDD6" strokeWidth="2" />
      <rect x="16" y="276" width="208" height="68" fill="#14213D" stroke="#C7CDD6" strokeWidth="2" />
      <rect x="32" y="292" width="176" height="36" fill="#0e1730" stroke="#FFB627" strokeWidth="2" />
    </svg>
  );
}