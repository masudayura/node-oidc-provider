// SUB3 文字の色を設定
const SET_BOLD_YELLOW_TEXT = '\x1b[33;1m';
const SET_BOLD_RED_TEXT = '\x1b[31;1m';
const RESET_ALL_ATTRIBUTES = '\x1b[0m';

// SUB3 標準出力関数
//      isTTY = readStream(?)
function colorizeStdout(str) {
  if (process.stdout.isTTY) {
    return `${SET_BOLD_YELLOW_TEXT}${str}${RESET_ALL_ATTRIBUTES}`;
  }
  return str;
}

// SUB3 標準エラー出力関数
function colorizeStderr(str) {
  if (process.stderr.isTTY) {
    return `${SET_BOLD_RED_TEXT}${str}${RESET_ALL_ATTRIBUTES}`;
  }
  return str;
}

// SUB3 標準出力関数を呼んでいる
//　　　 引数の文字列を黄色にして出力する
function info(str) {
  console.info(colorizeStdout(`oidc-provider NOTICE: ${str}`)); // eslint-disable-line no-console
}

// SUB3 標準エラー出力関数を呼んでいる
//　　　 引数の文字列を赤色にして出力する
function warn(str) {
  console.warn(colorizeStderr(`oidc-provider WARNING: ${str}`)); // eslint-disable-line no-console
}

// SUB3 info(str),warn(str)をexport
module.exports = {
  info,
  warn,
};
