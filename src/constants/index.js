export const FACTORY_ADDRESS = '0x508b60119a1538915C5b0329607D041Da6D14700'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
  'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json',
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
]

// pair blacklist
export const PAIR_BLACKLIST = ['0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5']

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

// DAO-USDT
export const PAID_USDT_DAO = '0x1dbcac9e084a25d542893b14128a5910df43a6b7'

// Node Type
export const USDT_DAO_STAKING_REWARDS_ADDRESS = '0xAe7184fcCCFc096f5F48Fffe384Cce8433FCE0E0'
export const NODE_TYPE_STELLAR_MIN_USD_VALUE = 50000
export const NODE_TYPE_PLANETARY_MIN_USD_VALUE = 5000
