import { useState, useEffect } from "react";

interface ToastProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ type, message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 4000); // Auto-hide after 4000ms

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  return (
    <div
      className={`fixed z-10 top-[80px] left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg text-white transition-all duration-300 ease-in-out ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-5 scale-95"
      } ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
    >
      <span>{message}</span>
      <button className="ml-4" onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default Toast;
