# auth-boilerplate

#### Start
  1. npm install
  2. Create config.js and mongoSecreKey.js files
  ----
  -config.js 
  Add the following line
  -----
  module.exports = {
  secret: "Makeup a key for jwt",
};

-mongoSecreKey.js 
  -----
  Go go mongodb website and sign up for a cloud account. Add the following line.
  -----
  
  module.exports = {
  url:
    "Add your mongo cloud url here",
};

  -----
  -----
  3. npm run dev


