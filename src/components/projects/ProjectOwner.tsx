import React from 'react';
import dfltAvatar from '@assets/images/DefaultAvatar.webp';

function ProjectOwner(): JSX.Element {
  return (
    <div className="flex items-center">
      <div
        className="h-14 lg:h-14 w-14 lg:w-14 rounded-full border lg:border-2 border-purple"
        style={{
          backgroundImage: `url(${dfltAvatar})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="ml-2">
        <p className="text-sm">Project Owner</p>
        <p className="text-xs font-thin text-gray-400">Nom du Project Owner</p>
      </div>
    </div>
  );
}

export default ProjectOwner;
