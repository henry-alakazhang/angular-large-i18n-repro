# Angular large i18n compiled component reproduction repo

`src/app/lazy/lazy.component.ts` has 50 `<div>` tags inside another `<div>` tag with `i18n` on it.
`src/app/smaller/smaller.component.ts` has 50 `<div>` tags inside an anchor tag with other directives (routerlink, ngClass, whatever)

To reproduce: `yarn build --configuration production`.

The `lazy` module is 20x larger than the `smaller` module despite containing the same amount of code.

```
Initial Chunk Files                            | Names                  |      Size
main.517b66fda9398afe0f03.js                   | main                   | 218.63 kB
polyfills.990a72e8631c4173d4d7.js              | polyfills              |  36.04 kB
runtime.cda1d6b363306b7b2332.js                | runtime                |   2.35 kB
styles.b9d695c2ef77dfe48e79.css                | styles                 |   0 bytes

                                               | Initial Total          | 257.02 kB

Lazy Chunk Files                               | Names                  |      Size
lazy-lazy-module.3bf7c504ce8655f8c5ff.js       | lazy-lazy-module       |  87.53 kB
smaller-smaller-module.ef69ff53a5453ee39ea4.js | smaller-smaller-module |   4.28 kB
```
