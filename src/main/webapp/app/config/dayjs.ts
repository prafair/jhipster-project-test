import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import * as duration from 'dayjs/plugin/duration';
import * as relativeTime from 'dayjs/plugin/relativeTime';

// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here
import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/cs';
import 'dayjs/locale/fi';
import 'dayjs/locale/de';
import 'dayjs/locale/ru';
import 'dayjs/locale/es';
import 'dayjs/locale/uk';

// DAYJS CONFIGURATION
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
