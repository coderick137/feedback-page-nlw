import React from 'react';

const WidgetForm: React.FC = () => {
  return (
      <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
          <header>

          </header>
          <span className='text-xl leadin-6'>
              deixe seu feedback
          </span>
          <footer className='text-xl text-neutral-400'>
              <a className='underline '></a>
          </footer>
      </div>
  );
}

export default WidgetForm;