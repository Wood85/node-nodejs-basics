const parseArgs = () => {
  const args = process.argv.slice(2);

  let format = [];

  let key = '';
  let value = '';

  for (let i = 0; i < args.length; i++) {
    const element = args[i];

    if (element.startsWith('--')) {
      key = element;
    } else {
      value = element;
      const str = `${key} is ${value}`;
      format.push(str);
    }
  }

  console.log(format.join(', '));
};

parseArgs();
