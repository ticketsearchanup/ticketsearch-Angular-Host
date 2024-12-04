const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "angularHostapp",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "angularHostapp",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },

        remotes: {
          

          react_remoteapp: "react_remoteapp@http://localhost:3001/remoteEntry.js",

        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "react": {singleton: true, eager: true, requiredVersion:'18.2.0'},
          "react-dom": { singleton: true, eager: true, requiredVersion:'18.2.0'},
          "react-chartjs-2": {
          singleton: true,
          eager: true, 
          requiredVersion: "^5.2.0" 
          },
          "chart.js": {
          singleton: true,
          eager: true, // Omit or set to false for lazy loading
          requiredVersion: "^4.4.4" // Match your specific project version
          },
          "react-date-range": {
            singleton: true,
          eager: true, // Omit or set to false for lazy loading
          requiredVersion: "^2.0.1" // Match your specific project version
          },
          "react-responsive": {
          singleton: true,
          eager: true, // Omit or set to false for lazy loading
          requiredVersion: "^10.0.0" // Match your specific project version
          },
          "react-responsive-decorator": {
          singleton: true,
          eager: true, // Omit or set to false for lazy loading
          requiredVersion: "^0.0.1" // Match your specific project version
          },
          "react-helmet": {
          singleton: true,
          eager: true, // Omit or set to false for lazy loading
          requiredVersion: "^6.1.0" // Match your specific project version
          },
          "@tailwindcss/forms": {
          singleton: true,
          eager: true, // Omit or set to false for lazy loading
          requiredVersion: "^0.5.8" // Match your specific project version
          },
          "tailwindcss": {
          singleton: true,
          eager: true, // Omit or set to false for lazy loading
          requiredVersion: "^3.4.14" // Match your specific project version
          },
          "@babel/plugin-transform-runtime": {
          singleton: true,
          eager: true, // Omit or set to false for lazy loading
          requiredVersion: "^7.15.8" // Match your specific project version
          },


          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
