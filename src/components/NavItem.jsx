const NavItem = ({ label, func }) => {
  return (
    <li>
      <button className="border-b-2 border-text text-text mb-2 md:mb-0" onClick={func}>{label}</button>
    </li>
  );
};

export default NavItem;
