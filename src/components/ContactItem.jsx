const ContactItem = ( {platform, logo, handle, link, email} ) => {
  return (
    <li key={platform} className="p-4">
      {link && 
        <a className="flex flex-row items-center text-3xl" href={link}>
          <img className="h-12 pr-4" src={logo} alt="Logo for contact source" />
          {handle}
        </a>
      }
      {email &&
        <div className="flex flex-row items-center text-3xl">
          <img className="h-12 pr-4" src={logo} alt="Logo for contact source" />
          {handle}
        </div>
      }
    </li>
  )
}

export default ContactItem;