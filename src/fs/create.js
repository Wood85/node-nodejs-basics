import { writeFile, access } from "fs/promises";

const create = async () => {
  const directory = 'src/fs/files/';
  const fileName = 'fresh.txt'
  const path = `${directory}${fileName}`
  const text = 'I am fresh and young'
  try {
    await access(path);
    console.error('FS operation failed');
  } catch {
    await writeFile(path, text, 'utf8');
  }
}

await create();
