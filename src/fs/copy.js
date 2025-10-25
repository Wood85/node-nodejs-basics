import { cp, access } from "fs/promises";

const copy = async () => {
  const rootPath = 'src/fs/';
  const srcDirectory = `${rootPath}files/`;
  const destDirectory = `${rootPath}files_copy/`;
  const errorMesage = 'FS operation failed';

  const srcDirectoryExists = await access(srcDirectory)
    .then(() => true)
    .catch(() => false);

  const destDirectoryExists = await access(destDirectory)
    .then(() => true)
    .catch(() => false);

  if(!srcDirectoryExists || destDirectoryExists) {
    console.error(errorMesage);
    return;
  }

  await cp(srcDirectory, destDirectory, { recursive: true, errorOnExist: true })
    .catch(() => console.error(errorMesage));
};

await copy();
