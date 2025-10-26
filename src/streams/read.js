import { createReadStream } from 'node:fs';
import { access } from 'node:fs/promises';

const read = async () => {
  const path = 'src/streams/files/fileToRead.txt';

  try {
    await access(path);

    const stream = createReadStream(path, { encoding: 'utf-8' });

    await new Promise((resolve, reject) => {
      stream.on('data', chunk => {
        process.stdout.write(chunk);
      });
      stream.on('end', () => {
        process.stdout.write('\n');
        resolve();
      });
      stream.on('error', reject);
    });

  } catch (err) {
    process.stderr.write('Operation failed\n');
  }
};

await read();