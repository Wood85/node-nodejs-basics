import { access, rename as fsRename } from "fs/promises";

const rename = async () => {
    const rootPath = 'src/fs/';
    const srcDirectory = `${rootPath}files/`;
    const fileName = 'wrongFilename.txt';
    const fileRename = 'properFilename';
    const newExt = '.md';
    const errorMesage = 'FS operation failed';
  
    const fileNameExists = await access(`${srcDirectory}${fileName}`)
      .then(() => true)
      .catch(() => false);
  
    const fileRenameExists = await access(`${srcDirectory}${fileRename}${newExt}`)
      .then(() => true)
      .catch(() => false);
  
    if(!fileNameExists || fileRenameExists) {
      console.error(errorMesage);
      return;
    }
  
    await fsRename(`${srcDirectory}${fileName}`, `${srcDirectory}${fileRename}${newExt}`)
      .catch(() => console.error(errorMesage));
};

await rename();
