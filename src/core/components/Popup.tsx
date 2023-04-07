import { useState } from "react";

interface PopupProps {
  message: string;
}

function Popup({ message }: PopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //

  return (
    <div>
      {/* Modal açma butonu */}
      <button onClick={openModal}></button>

      {/* Modal */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* Modal içeriği */}
            <h2>Modal Başlığı</h2>
            <p>Modal içeriği buraya gelecek</p>

            {/* Modal kapatma butonu */}
            <button onClick={closeModal}>Kapat</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
