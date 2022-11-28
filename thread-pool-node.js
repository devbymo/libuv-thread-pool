const crypto = require('crypto');
process.env.UV_THREADPOOL_SIZE = 2;

const start = Date.now();
crypto.pbkdf2('TEST1', 'TEST2', 100000, 512, 'sha512', () => {
  console.log('1:', `${Date.now() - start}ms`);
});

crypto.pbkdf2('TEST1', 'TEST2', 100000, 512, 'sha512', () => {
  console.log('2:', `${Date.now() - start}ms`);
});

crypto.pbkdf2('TEST1', 'TEST2', 100000, 512, 'sha512', () => {
  console.log('3:', `${Date.now() - start}ms`);
});

crypto.pbkdf2('TEST1', 'TEST2', 100000, 512, 'sha512', () => {
  console.log('4:', `${Date.now() - start}ms`);
});

crypto.pbkdf2('TEST1', 'TEST2', 100000, 512, 'sha512', () => {
  console.log('5:', `${Date.now() - start}ms`);
});

crypto.pbkdf2('TEST1', 'TEST2', 100000, 512, 'sha512', () => {
  console.log('6:', `${Date.now() - start}ms`);
});
