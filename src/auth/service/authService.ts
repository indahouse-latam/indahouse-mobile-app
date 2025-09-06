import { publicHttpClient, sleep } from '@/common';
import { HttpClient } from '@/http';
import { mockUser } from '@/user';

const createAuthService = (_httpClient: HttpClient) => ({
  checkAuthentication: async () => {
    await sleep();
    throw 'Authentication failed';
    // return mockUser;
  },
  sendVerificationCode: async (_email: string) => {
    await sleep();
  },
  verifyCode: async (_code: string) => {
    await sleep();
    return mockUser;
  },
  authenticateWithGmail: async () => {
    await sleep();
    return mockUser;
  },
});

export const authService = createAuthService(publicHttpClient);
