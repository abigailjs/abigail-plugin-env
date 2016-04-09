// dependencies
import test from 'ava';
import AsyncEmitter from 'carrack';
import sinon from 'sinon';
import stripAnsi from 'strip-ansi';

// target
import Env from '../src';

// fixture
const createProcess = () => ({
  env: {},
});

// specs
test('if plugin enabled, it should set NODE_ENV to production', async (t) => {
  const process = createProcess();
  const logger = sinon.spy();
  const emitter = new AsyncEmitter;
  emitter.subscribe('log', logger);

  // eslint-disable-next-line no-unused-vars
  const env = new Env(emitter, true, { process });
  await emitter.emit('attach-plugins');

  t.true(process.env.NODE_ENV === 'production');
  t.true(stripAnsi(logger.args[0][0]) === 'NODE_ENV was changed to production.');
});

test('if specify value, it should set value to NODE_ENV', async (t) => {
  const process = createProcess();
  const logger = sinon.spy();
  const emitter = new AsyncEmitter;
  emitter.subscribe('log', logger);

  // eslint-disable-next-line no-unused-vars
  const env = new Env(emitter, 'development', { process });
  await emitter.emit('attach-plugins');

  t.true(process.env.NODE_ENV === 'development');
  t.true(stripAnsi(logger.args[0][0]) === 'NODE_ENV was changed to development.');
});

test('if specify options.full, it should set full values to process.env', async (t) => {
  const process = createProcess();
  const logger = sinon.spy();
  const emitter = new AsyncEmitter;
  emitter.subscribe('log', logger);

  const full = {
    port: 59798,
    host: 'berabou.me',
  };
  // eslint-disable-next-line no-unused-vars
  const env = new Env(emitter, true, { process, full });
  await emitter.emit('attach-plugins');

  t.true(process.env.port === 59798);
  t.true(process.env.host === 'berabou.me');
  t.true(stripAnsi(logger.args[0][0]) === 'process.env was changed using options.full.');
});
