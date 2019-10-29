import DataResult from './data-result';

export default interface DataQuote {
  base: string;
  values: string[];
  results: DataResult[];
}
