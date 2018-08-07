import { IClaim } from './i-claim';

export class AuthData {
  name: string;
  roles: string[];
  claims: IClaim[];
}
