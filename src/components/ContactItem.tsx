interface ContactItemProps {
  platform: string;
  logo: string;
  handle: string;
  link?: string;
  email?: string;
}

const ContactItem = ({
  platform,
  logo,
  // handle,
  link,
  email,
}: ContactItemProps) => {
  return (
    <li key={platform} className="p-4 pointer-events-auto">
      {link && (
        <a className="flex flex-row items-center text-3xl" href={link}>
          <img className="h-12 pr-4" src={logo} alt="Logo for contact source" />
        </a>
      )}
      {email && (
        <a href="mailto:pscoldwell@gmail.com?subject=Professional Interest">
          <div className="flex flex-row items-center text-3xl">
            <img
              className="h-12 pr-4"
              src={logo}
              alt="Logo for contact source"
            />
          </div>
        </a>
      )}
    </li>
  );
};

export default ContactItem;
