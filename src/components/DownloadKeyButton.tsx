import React from 'react';
import axios from 'axios';

interface DownloadKeyButtonProps {
  userId: string;
  keyType: 'public' | 'private';
}

const DownloadKeyButton = ({ userId, keyType }: DownloadKeyButtonProps) => {
  const handleDownload = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/bank/downloadKey/${userId}`, {
        params: { keyType },
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${keyType}Key_${userId}.txt`); // nombre del archivo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading key:', error);
    }
  };

  return (
    <button onClick={handleDownload}>
      Download {keyType} Key
    </button>
  );
};

export default DownloadKeyButton;
