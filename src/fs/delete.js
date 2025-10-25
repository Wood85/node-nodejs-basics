import { unlink, access } from "fs/promises";

const remove = async () => {
  const targetFile = 'src/fs/files/fileToRemove.txt';
  const errorMesage = 'FS operation failed';

  const targetFileExists = await access(targetFile)
    .then(() => true)
    .catch(() => false);

  if(!targetFileExists) {
    console.error(errorMesage);
    return;
  }

  await unlink(targetFile)
    .catch(() => console.error(errorMesage));
};

await remove();
