const parseEnv = () => {
  const processEnv = process.env;
  const prefix = 'RSS_';
  let envVarsRSS = [];
  for (let key in processEnv) {
    if (processEnv.hasOwnProperty(key) && key.startsWith(prefix)) {
      envVarsRSS.push(`${key}=${processEnv[key]}`);
    }
  }
  
  const stringVarsRSS = envVarsRSS.join('; ');
  console.log(stringVarsRSS);
};

parseEnv();
