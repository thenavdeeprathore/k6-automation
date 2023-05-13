import http from 'k6/http';
import { sleep } from 'k6';

// Load
// Response Time
// Stability
export const options = {
    vus: 10,
    duration: '30s',
}

export default function () {
    http.get('https://k6.io');
    sleep(1);
}