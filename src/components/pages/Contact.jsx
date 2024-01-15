import ContactItem from "../ContactItem.jsx";

const contacts = [
  {
    platform: 'LinkedIn',
    logo: '/LinkedIn.png',
    handle: '/PrestonColdwell',
    link: 'https://www.linkedin.com/in/prestoncoldwell'
  },
  {
    platform: 'GitHub',
    logo: '/GitHub.png',
    handle: '/PrestonColdwell',
    link: 'https://github.com/PrestonColdwell'
  },
  {
    platform: 'Instagram',
    logo: '/Instagram.png',
    handle: '/PrestonColdwell',
    link: 'https://www.instagram.com/prestoncoldwell/'
  },
  {
    platform: 'Email',
    logo: '/Email.png',
    handle: 'pscoldwell@gmail.com',
    email: 'pscoldwell@gmail.com'
  },
];

const Contact = () => {
  return (
    <div className="h-svh text-text max-w-screen-xl mx-auto m-8">
      <div className="flex flex-col border-2 border-text/50 rounded-xl p-8 text-center">
        <p className="text-nowrap text-4xl pb-4 underline">Contact Me!</p>
        <ul className="">
          {contacts.map(contact => {
            return (
              <ContactItem platform={contact.platform} logo={contact.logo} handle={contact.handle} link={contact.link} email={contact.email}/>
            )
          })}
        </ul>
        
      </div>
    </div>
  );
};

export default Contact;
