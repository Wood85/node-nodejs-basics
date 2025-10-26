import { readFile, access } from "fs/promises";

const read = async () => {
    const file = 'src/fs/files/fileToRead.txt';
    const errorMesage = 'FS operation failed';
  
    const fileExists = await access(file)
      .then(() => true)
      .catch(() => false);
  
    if(!fileExists) {
      console.error(errorMesage);
      return;
    }
  
    const content = await readFile(file, 'utf-8')
      .catch(() => console.error(errorMesage));
    
    console.log(content);
};

await read();
