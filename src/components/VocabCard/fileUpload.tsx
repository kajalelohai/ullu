import React from 'react';
import * as styles from './styles.module.scss';

export const FileUpload = () => {
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
   
    const updatedJSON = e.target.files[0];
    if (updatedJSON.type === 'application/json') {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        const result = e.target ? e.target.result : null;
        const data = JSON.parse(JSON.stringify(result));
        return data;
      };
    } else {
      return console.log('Invalid file Upload...');
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => onFileChange(e)} />
      <button className={styles.importButton}>Import</button>
    </div>
  );
};
