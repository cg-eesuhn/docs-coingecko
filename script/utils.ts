const ANSI_RESET = '\x1b[0m';
const ANSI_BG_RED = '\x1b[41m';
const ANSI_BG_YELLOW = '\x1b[43m';
const ANSI_BG_MAGENTA = '\x1b[45m';
const ANSI_BG_GREEN = '\x1b[42m';

/**
 * Prints an error message with a red background for the "ERROR" label.
 *
 * @param m The error message to print.
 */
function printError(m: string): void {
  console.log(`${ANSI_BG_RED}ERROR${ANSI_RESET} ${m}`);
}

/**
 * Prints a warning message with a yellow background for the "WARNING" label.
 *
 * @param m The warning message to print.
 */
function printWarning(m: string): void {
  console.log(`${ANSI_BG_YELLOW}WARNING${ANSI_RESET} ${m}`);
}

/**
 * Prints an info message with a magenta background for the "INFO" label.
 *
 * @param m The info message to print.
 */
function printInfo(m: string): void {
  console.log(`${ANSI_BG_MAGENTA}INFO${ANSI_RESET} ${m}`);
}

/**
 * Prints a success message with a green background for the "SUCCESS" label.
 *
 * @param m The success message to print.
 */
function printSuccess(m: string): void {
  console.log(`${ANSI_BG_GREEN}SUCCESS${ANSI_RESET} ${m}`);
}

export { printError, printWarning, printInfo, printSuccess };
