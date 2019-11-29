# Psammead Storybook Helpers Changelog

<!-- prettier-ignore -->
| Version | Description |
|---------|-------------|
| 8.1.5 | [PR#2704](https://github.com/bbc/psammead/pull/2704) Add exported styled paragraph to be wrapped with un-styled components, i.e inline link. |
| 8.1.4 | [PR#2704](https://github.com/bbc/psammead/pull/2704) Add longText to TEXT_EXAMPLES and add value to storyProp |
| 8.1.3 | [PR#2704](https://github.com/bbc/psammead/pull/2704) Add default value to variant |
| 8.1.2 | [PR#2695](https://github.com/bbc/psammead/pull/2695) Correct the variant value in the serbian TEXT_EXAMPLE  |
| 8.1.1 | [PR#2691](https://github.com/bbc/psammead/pull/2691) Remove `chineseTrad` & `chineseSimp` example as Zhongwen example covers it.  |
| 8.1.0 | [PR#2668](https://github.com/bbc/psammead/pull/2668) Add variant prop to `storyProps` and update text-variant examples |
| 8.0.2 | [PR#2543](https://github.com/bbc/psammead/pull/2543) updates readme with better withServicesKnob example |
| 8.0.1 | [PR#2488](https://github.com/bbc/psammead/pull/2488) Talos - Bump Dependencies - @bbc/gel-foundations |
| 8.0.0 | [PR#2453](https://github.com/bbc/psammead/pull/2453) ability to create RTL variants of all stories of a specific kind or specific stories of specific kind |
| 7.0.1 | [PR#2436](https://github.com/bbc/psammead/pull/2436) Update chinese locales |
| 7.0.0 | [PR#2404](https://github.com/bbc/psammead/pull/2404) replace inputProvider and dirDecorator with withServicesInput |
| 6.2.0 | [PR#2407](https://github.com/bbc/psammead/pull/2407) adds buildRTLSubstories to create right-to-left variants of all stories |
| 6.1.0 | [PR#2402](https://github.com/bbc/psammead/pull/2402) adds withServicesKnob decorator |
| 6.0.4 | [PR#2344](https://github.com/bbc/psammead/pull/2344) Update `punjabi` locale from `pa` to `pa-in` |
| 6.0.3 | [PR#2191](https://github.com/bbc/psammead/pull/2191) Talos - Bump Dependencies - @bbc/gel-foundations |
| 6.0.2 | [PR#2114](https://github.com/bbc/psammead/pull/2114) Update serbianCyr locale to `sr-cyrl`|
| 6.0.1 | [PR#2042](https://github.com/bbc/psammead/pull/1926) Update readme with changes to input provider |
| 6.0.0 | [PR#1926](https://github.com/bbc/psammead/pull/1926) Update input-provider to accept a single object rather than 4 arguments |
| 5.1.5 | [PR#1960](https://github.com/bbc/psammead/pull/1960) Change <React.Fragment> to <> |
| 5.1.4 | [PR#1931](https://github.com/bbc/psammead/pull/1931) Talos - Bump Dependencies |
| 5.1.3 | [PR#1826](https://github.com/bbc/psammead/pull/1826) Talos - Bump Dependencies |
| 5.1.2 | [PR#1804](https://github.com/bbc/psammead/pull/1804) Talos - Bump Dependencies |
| 5.1.1 | [PR#1803](https://github.com/bbc/psammead/pull/1803/) Patches broken links on badges in documentation |
| 5.1.0 | [PR#1794](https://github.com/bbc/psammead/pull/1794) Add david dependency badges |
| 5.0.1 | [PR#1734](https://github.com/bbc/psammead/pull/1734) Talos - Bump Dependencies |
| 5.0.0 | [PR#1714](https://github.com/bbc/psammead/pull/1714) Renamed `indonesian` to `indonesia` and `afaanOromoo` to `afaanoromoo`.  Input provider now has an optional 4th argument that allows the default service to be configured |
| 4.0.0 | [PR#1679](https://github.com/bbc/psammead/pull/1679) Remove text knob from input-provider |
| 3.3.4   | [PR#1685](https://github.com/bbc/psammead/pull/1685) Bump dependencies |
| 3.3.3 | [PR#1682](https://github.com/bbc/psammead/pull/1682) Move all dev dependencies to top level package.json |
| 3.3.2 | [PR#1595](https://github.com/bbc/psammead/pull/1595) Bump `@bbc/gel-foundations` |
| 3.3.1 | [PR#1479](https://github.com/bbc/psammead/pull/1479) Import all scripts from gel-foundations |
| 3.3.0 | [PR#1233](https://github.com/bbc/psammead/pull/1233) Add ESM modules entry |
| 3.2.0 | [PR#1244](https://github.com/bbc/psammead/pull/1244) `dirDecorator` now includes service `locale` in the object passed to the callback |
| 3.1.3 | [PR#1179](https://github.com/bbc/psammead/pull/1179) use `gel-foundations@3.0.3` and `psammead-test-helpers@1.0.2`|
| 3.1.2 | [PR#1083](https://github.com/bbc/psammead/pull/1083) use `react-helmet@5.2.1` |
| 3.1.1 | [PR#783](https://github.com/bbc/psammead/pull/783) Update to latest psammead-test-helpers. Update snapshots. |
| 3.1.0   | [PR#758](https://github.com/bbc/psammead/pull/758) Add ability to limit set of services |
| 3.0.0   | [PR#674](https://github.com/bbc/psammead/pull/674) Update inputProvider to pass an object with script, service, dir and slotTexts |
| 2.1.2   | [PR#677](https://github.com/bbc/psammead/pull/677) Use `@bbc/gel-foundations@3.0.0` |
| 2.1.1   | [PR#512](https://github.com/bbc/psammead/pull/512) Pass script and dir to storybook function |
| 2.1.0   | [PR#496](https://github.com/bbc/psammead/pull/496) Add dir storybook decorator |
| 2.0.0   | [PR#468](https://github.com/bbc/psammead/pull/468) Rewrite of inputProvider |
| 1.1.1   | [PR#432](https://github.com/bbc/psammead/pull/432) Alphabetise text variants by language |
| 1.1.0   | [PR#424](https://github.com/bbc/psammead/pull/424) Add Snyk badge to readme |
| 1.0.0   | [PR#378](https://github.com/bbc/psammead/pull/378) Create initial package, pulled in from [psammead](https://github.com/BBC-News/psammead/blob/latest/CONTRIBUTING.md). |
