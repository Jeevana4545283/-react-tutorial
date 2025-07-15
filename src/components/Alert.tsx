// src/components/Alert.tsx
import React from 'react';

interface AlertProps {
  children: React.ReactNode; // ✅ Accepts JSX like <strong>
  onClose: () => void;
}

function Alert({ children, onClose }: AlertProps) {
  return (
    <div className="alert alert-primary alert-dismissible fade show" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert;
