import { secretHandler } from '../handlers/handler.js';
import { secretHandler2 } from '../handlers/handler.js';

document.getElementById('the-secret').addEventListener('mouseover', secretHandler);

document.getElementById('the-secret').addEventListener('mouseout', secretHandler2);
