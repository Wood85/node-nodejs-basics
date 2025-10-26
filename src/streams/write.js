import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const write = async () => {
  const path = 'src/streams/files/fileToWrite.txt';

  try {
    const stream = createWriteStream(path, { encoding: 'utf-8' });
    await pipeline(process.stdin, stream);
  } catch (err) {
    process.stderr.write('Operation failed\n');
  }
}; 

await write();
