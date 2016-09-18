/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'dist/app', // 'dist',

    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },

    // below lines are from Mathias
    "@angular/core": {
       main: "bundles/core.umd.js" //use the ESM entry point for bundling tools
    },
    "@angular/common": {
        main: "bundles/common.umd.js" //use the ESM entry point for bundling tools
    },
    "@angular/compiler": {
        main: "bundles/compiler.umd.js" //use the ESM entry point for bundling tools
    },
    "@angular/forms": {
        main: "bundles/forms.umd.js"
    },
    "@angular/http": {
        main: "bundles/http.umd.js"
    },
    "@angular/platform-browser": {
        main: "bundles/platform-browser.umd.js" //use the ESM entry point for bundling tools
    },
    "@angular/platform-browser-dynamic": {
        main: "bundles/platform-browser-dynamic.umd.js" //use the ESM entry point for bundling tools
    },
    "@angular/router": {
        main: "bundles/router.umd.js" //use the ESM entry point for bundling tools
    },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
