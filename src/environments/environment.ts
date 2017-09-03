// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const CLIENT_ID = 'MUGV4CNDGTCTVQ4K40CLHYB4UPL33UNAAWXLA5WABSGHWOAS',
      CLIENT_SECRET = '310SPGWP42Y2BFWG52PP4JLXBPCD5EV3VNLYZW0JWEIN5EXV';

export const environment = {
  production: false,
  api: 'https://api.foursquare.com/v2/venues',
  clientId: 'MUGV4CNDGTCTVQ4K40CLHYB4UPL33UNAAWXLA5WABSGHWOAS',
  clientSecret: '310SPGWP42Y2BFWG52PP4JLXBPCD5EV3VNLYZW0JWEIN5EXV'
  // api: `https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20170815&near=Dublin,Ireland&section=topPicks&limit=20`
};
