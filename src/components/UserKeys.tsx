import apiUrl from '../apiUrl';
import React from 'react';
import axios from 'axios';

const UserKeys: React.FC = () => {
  const downloadKey = async (keyType: string) => {
    try {
      const idNumber = localStorage.getItem('idNumber');
      const idType = localStorage.getItem('idType');
      const response = await axios.get(`${apiUrl}/bank/download-key`, {
        params: {
          idNumber,
          idType,
          keyType,
        },
        responseType: 'blob', 
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${keyType}-key-${idNumber}.pem`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(`Error downloading ${keyType} key:`, error);
    }
  };

  const renewKeys = async () => {
    try {
      const idNumber = localStorage.getItem('idNumber');
      const idType = localStorage.getItem('idType');
      const response = await axios.post(`${apiUrl}/bank/renew-key`, {
        idNumber,
        idType,
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error renewing keys:', error);
    }
  };

  return (
    <div>
      <h2>Manage Your Keys</h2>
      <button onClick={() => downloadKey('public')}>Download Public Key</button>
      <button onClick={() => downloadKey('private')}>Download Private Key</button>
      <button onClick={renewKeys}>Renew Keys</button>
    </div>
  );
};

export default UserKeys;
