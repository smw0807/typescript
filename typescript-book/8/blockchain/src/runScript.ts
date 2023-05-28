import { spawn } from 'child_process';

const runScript = (path: string): void => {
  const process = spawn('node', [path]);

  process.stdout.on('data', data => {
    console.log(`stdout: \n${data}`);
  });

  process.stderr.on('data', data => {
    console.error(`stderr : ${data}`);
  });

  process.on('close', code => {
    console.log(`child process exited with code ${code}`);
  });
};

const scriptPath = process.argv[2];
runScript(`dist/${scriptPath}`);
