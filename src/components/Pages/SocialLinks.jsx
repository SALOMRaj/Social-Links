//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faTwitch, faDiscord } from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  { name: 'YouTube', url: 'https://www.youtube.com/c/UserName', icon: faYoutube },
  { name: 'Twitch', url: 'https://www.twitch.tv/UserName', icon: faTwitch },  
  { name: 'Discord', url: 'https://discord.gg/UserName', icon: faDiscord},
  { name: 'Twitter', url: 'https://twitter.com/UserName', icon: faTwitter },
  { name: 'Instagram', url: 'https://instagram.com/UserName', icon: faInstagram },
  { name: 'Facebook', url: 'https://facebook.com/UserName', icon: faFacebook },
];

const SocialLinks = () => {
  return (
    <div>
      <h2>Follow me on Social Media</h2>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={link.icon} size="2x" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
