import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// 핸들러들을 기반으로 Service Worker 설정
export const worker = setupWorker(...handlers);
