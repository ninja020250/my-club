import { mergeBaseAPIUrl } from '@/utils';
import Request from '@/utils/request';

class AuthService extends Request {
  constructor() {
    super(mergeBaseAPIUrl('auth'));
  }

  public login = (
    username: string,
    password: string,
  ): Promise<APIResponse.ILoginResponse> => {
    return this.instance
      .post('/login', {
        username,
        password,
      })
      .then(({ data }) => data)
      .catch((e) => {
        console.log(e);
      });
  };
}

export default new AuthService();
