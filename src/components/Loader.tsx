import React from 'react';

function Header(): JSX.Element {
  return (
    <div className="flex justify-center items-center">
      <div
        style={{ borderTopColor: 'transparent' }}
        className="w-16 h-16 border-4 border-lightPurple rounded-full animate-spin"
      />
    </div>
  );
}

export default Header;
