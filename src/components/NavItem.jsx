const NavItem = ({ label, func }) => {
  return (
    <li>
      <button className="border-none md:border-b-2 border-text text-text" onClick={func}>{label}</button>
    </li>
  );
};

export default NavItem;
