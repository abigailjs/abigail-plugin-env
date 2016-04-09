// dependencies
import Plugin from 'abigail-plugin';
import chalk from 'chalk';

/**
* @class Env
* @extends Plugin
*/
export default class Env extends Plugin {
  /**
  * the plugin lifecycle method
  * execute only once before the launch
  *
  * @method pluginWillAttach
  * @returns {undefined}
  */
  pluginWillAttach() {
    const value = this.opts.value || 'production';

    if (this.opts.value === undefined && typeof this.opts.full === 'object') {
      Object.keys(this.opts.full).forEach((key) => {
        const envValue = this.opts.full[key];
        this.opts.process.env[key] = envValue;
      });
      this.parent.emit('log', `process.env was changed using ${chalk.inverse('options.full')}.`);
    } else {
      this.opts.process.env.NODE_ENV = value;
      this.parent.emit('log', `NODE_ENV was changed to ${chalk.inverse(value)}.`);
    }
  }
}
