import * as React from 'react';
import './GlobalFooter.css';

export const GlobalFooter = () => {
  const icons = [
    { link: "https://twitter.com/tekitou0110", iconName: "fa-twitter" },
    { link: "https://github.com/mm-masahiro", iconName: "fa-github" },
    { link: "https://www.facebook.com/profile.php?id=100024837240686", iconName: "fa-facebook-f" },
  ]
  
  return (
    <footer className="body_footer">
      <div className="footer_text">Account</div>
      <ul className="body_footer_icon">
        {
          icons.map(icon => (
            <li key={icon.link}>
              <a
                className="body_footer_icon_link"
                href={icon.link}
                target="_blank"
              >
                <i className={`fab ${icon.iconName} fa-2x`}></i>
              </a>
            </li>
          ))
        }
      </ul>
    </footer>
  );
}