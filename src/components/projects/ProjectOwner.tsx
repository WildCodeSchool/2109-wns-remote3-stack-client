import React from 'react';
import dfltAvatar from '../../assets/DefaultAvatar.webp';

function ProjectOwner(): JSX.Element {
  return (
    <div className="flex items-center pb-5 lg:float-right">
      <div
        className="h-24 lg:h-8 w-24 lg:w-8 rounded-full border-4 lg:border-2 border-purple"
        style={{
          backgroundImage: `url(${dfltAvatar})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="ml-2">
        <p className="text-xs text-lightPurple">Project Owner</p>
        <p className="text-xs">Nom du Project Owner</p>
      </div>
    </div>
  );
}

export default ProjectOwner;
