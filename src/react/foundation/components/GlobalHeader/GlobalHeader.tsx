import * as React from 'react';
import { useState } from 'react';
import './GlobalHeader.css';

export const GlobalHeader = () => {
  const nav_items = [
    { text: "About", href: "about" },
    { text: "Job", href: "job" },
    { text: "Hobby", href: "hobby" }
  ]
  
  return (
    <header className="header">
      <p className="header_title">Masahiro's Portfolio</p>
      <ul className="header_menu">
        {
          nav_items.map(item => (
            <li
              className="header_munu_list"
              key={item.href}
            >
              <a
                className="header_munu_list_link"
                href={`#${item.href}`}
              >
                {item.text}
              </a>
            </li>
          ))
        }
      </ul>
    </header>
  );
}
