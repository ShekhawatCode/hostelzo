import React from 'react';

type Props = object;

const Footer = (props: Props) => {
  return (
    <div className="px-20 bg-gray-lighs">
      <div className="flex space-x-80">
        <ul className="space-y-2">
          <h1 className="text-lg font-semibold text-black">Useful links</h1>
          <li className="text-gray-dim">Terms</li>
          <li className="text-gray-dim">Policy</li>
          <li className="text-gray-dim">Careers</li>
          <li className="text-gray-dim">Contact Us</li>
        </ul>
        <ul className="space-y-2">
          <h1 className="text-lg font-semibold text-black">Useful links</h1>
          <li className="text-gray-dim">Terms</li>
          <li className="text-gray-dim">Policy</li>
          <li className="text-gray-dim">Careers</li>
          <li className="text-gray-dim">Contact Us</li>
        </ul>
        <ul className="space-y-2">
          <h1 className="text-lg font-semibold text-black">Useful links</h1>
          <li className="text-gray-dim">Terms</li>
          <li className="text-gray-dim">Policy</li>
          <li className="text-gray-dim">Careers</li>
          <li className="text-gray-dim">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
