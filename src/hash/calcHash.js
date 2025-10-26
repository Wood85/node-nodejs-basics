import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
  const errorMesage = 'Operation failed';
  const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  stream.on('data', (chunk) => {
    hash.update(chunk);
  });
  
  stream.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log(fileHash);
  });
  
  stream.on('error', (err) => {
    console.error(`${errorMesage}: `, err);
  });
};

await calculateHash();
