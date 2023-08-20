import { mergeBaseAPIUrl } from '@/utils';
import Request from '@/utils/request';

class FundService extends Request {
  constructor() {
    super(mergeBaseAPIUrl('fund-history'));
  }

  public fetch = (
    fromDate: string,
    toDate: string,
  ): Promise<APIResponse.ILoginResponse> => {
    return this.instance
      .post('/find-all', { fromDate, toDate })
      .then(({ data }: any) => data)
      .catch((e: any) => {
        console.log(e);
      });
  };
}

export default new FundService();
