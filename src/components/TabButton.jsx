export default function TabButton({ children, onSelect, isActive }) {
  let active = isActive ? isActive.toUpperCase() : null;
  let content = children.toUpperCase();
  return (
    <li>
      <button
        className={active === content ? "active" : null}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
