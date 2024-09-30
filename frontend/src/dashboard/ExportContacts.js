// src/components/Dashboard/ExportContacts.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const ExportContacts = () => {
  const handleExport = () => {
    // Create a hidden link element
    const link = document.createElement('a');
    link.href = 'http://localhost:5000/api/contacts/export'; // Update with your backend URL if different
    link.download = 'Contacts.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleExport}
       className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded m-3"
    >
         <FontAwesomeIcon icon={faDownload} className="mr-2" />
      Export Database
    </button>
  );
};

export default ExportContacts;
