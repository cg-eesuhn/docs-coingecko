import chalk from 'chalk';

/**
 * Prints an error message with a red background for the "ERROR" label.
 *
 * @param m The error message to print.
 */
function printError(m: string): void {
  console.log(`${chalk.bgRed('ERROR')}${chalk.reset('')} ${m}`);
}

/**
 * Prints a warning message with a yellow background for the "WARNING" label.
 *
 * @param m The warning message to print.
 */
function printWarning(m: string): void {
  console.log(`${chalk.bgYellow('WARNING')}${chalk.reset('')} ${m}`);
}

/**
 * Prints an info message with a magenta background for the "INFO" label.
 *
 * @param m The info message to print.
 */
function printInfo(m: string): void {
  console.log(`${chalk.bgMagenta('INFO')}${chalk.reset('')} ${m}`);
}

/**
 * Prints a success message with a green background for the "SUCCESS" label.
 *
 * @param m The success message to print.
 */
function printSuccess(m: string): void {
  console.log(`${chalk.bgGreen('SUCCESS')}${chalk.reset('')} ${m}`);
}

export { printError, printWarning, printInfo, printSuccess };
