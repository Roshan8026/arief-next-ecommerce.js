import { useState } from 'react';

const SidebarToggle = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar} style={{ position: 'fixed', top: '10px', left: '10px' }}>
        Toggle
      </button>
      <div style={{ display: isOpen ? 'block' : 'none', position: 'fixed', top: '0', left: '0', width: '200px', height: '100%', background: '#eee' }}>
        {children}
      </div>
    </div>
  );
};

export default SidebarToggle;
