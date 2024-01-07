const NavItem = ({ label, func }) => {
  return (
    <li>
      <button onClick={func}>{label}</button>
    </li>
  );
};

export default NavItem;
