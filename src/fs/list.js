import { readdir, access } from "fs/promises";

const list = async () => {
  const dir = 'src/fs/files';
  const errorMesage = 'FS operation failed';

  const dirExists = await access(dir)
    .then(() => true)
    .catch(() => false);

  if(!dirExists) {
    console.error(errorMesage);
    return;
  }

  const files = await readdir(dir)
    .catch(() => console.error(errorMesage));
  
  console.log(files);
};

await list();
