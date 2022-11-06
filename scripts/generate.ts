import { readdir, readFile } from 'node:fs/promises';

const SOURCE_DIR = './source/';

interface Contract {
  source: string;
  compiler: {
    version: string;
    optimization: number;
    runs: number;
    constructor: string;
  };
}

const chains = await readdir(SOURCE_DIR);
for (const chain of chains) {
  const addresses = await readdir(`${SOURCE_DIR}/${chain}`);
  for (const address of addresses) {
    const contractString = await readFile(
      `${SOURCE_DIR}/${chain}/${address}`,
      'utf8',
    );
    const contract = JSON.parse(contractString) as Contract;
    // TODO compile
    // TODO save ABI + bytecode to generated dir
  }
}
