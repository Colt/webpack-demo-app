# webpack-demo-app
Accompanies my 10-part Youtube Webpack course.  Each commit comes with detailed notes.

##### git commit 991f703d058ece361b83180ada43dc5f61b40984    
`git checkout 991f703d058ece361b83180ada43dc5f61b40984 `
Author: Colt Steele <colt@steele.com>
Date:   Tue Mar 5 21:02:05 2019 -0800

    Minify JS, CSS, and HTML in production
    
    - Extracted CSS into own file in production
    - Minified CSS in production
    - Added TerserJS back in to minify JS in production
    - Minified HTML in production as well
___
##### git commit 34e7d30aefa510e7f10dc8b496b88eab8e4e9ce0
`git checkout 34e7d30aefa510e7f10dc8b496b88eab8e4e9ce0`
Author: Colt Steele <colt@steele.com>
Date:   Tue Mar 5 18:37:07 2019 -0800

    Add entrypoint for vendor js file, add bootstrap js
    
    - Now we have 2 entry files and 2 bundles
    - The vendor file houses code that is less likely to change, 3rd party libraries
    - The main file has all of our app code
___
##### git commit 947290016d91f0cc2298faa86bedb1ee2180c276
`git checkout 947290016d91f0cc2298faa86bedb1ee2180c276`
Author: Colt Steele <colt@steele.com>
Date:   Tue Mar 5 18:13:21 2019 -0800

    Add html-loader, file-loader, and clean-webpack-plugin
    
    - Added html-loader to automatically require the files we reference in img tags
    - Added file-loader to handle the svg,png,jpg,gif files from our images
    - Configured file-loader to add our images to an imgs directory in dist
    - Also configured it to add a hash to their filenames
    - Lastly, added clean-webpack-plugin to our production config to clean out the dist directory each time we build
___
##### git commit eb66c0dc93141080f5b1abb335ec998a1e91d72e
`git checkout eb66c0dc93141080f5b1abb335ec998a1e91d72e`
Author: Colt Steele <colt@steele.com>
Date:   Tue Mar 5 17:24:01 2019 -0800

    Add prod and dev configs, dev-server
    
    - Broke our webpack.config file into 3 files
    - webpack.common.js, webpack.dev.js, and webpack.prod.js
    - installed webpack-merge to share the common functionality
    - updated our package.json to use the new config files
    - installed webpack-dev-server and added it to start script in package.json
___
##### git commit c932911657e0a7beb9c03f604eaafa7e954d51ba
`git checkout c932911657e0a7beb9c03f604eaafa7e954d51ba`
Author: Colt Steele <colt@steele.com>
Date:   Tue Mar 5 15:24:55 2019 -0800

    Cache busting and HtmlWebpackPlugin
    
    - Configured webpack to use contentHash in bundle file name
    - This caused a problem with out script tag in index.html
    - We installed HtmlWebpackPlugin to help us generate a new index.html
    - It automatically includes the correct script tag at the bottom
    - We created a template file that we passed in called template.html
    - We deleted the original index.html because we don't need it anymore
    - Make sure you are opening dist/index.html now to view the app
___
##### git commit 21c9e3b62306c8b21b3277af5d5d931af5e9bd2a
`git checkout 21c9e3b62306c8b21b3277af5d5d931af5e9bd2a`
Author: Colt Steele <colt@steele.com>
Date:   Tue Mar 5 15:00:12 2019 -0800

    Add Sass loader, override bootstrap colors
    
    - Changed our main.css to main.scss
    - Installed bootstrap locally so we can tweak it
    - Installed sass-loader and node-sass
    - Updated webpack.config file to include a .scss rule
___
##### git commit 65c2ac47091e301b3adc5b35a68c1870b16eafb7
`git checkout 65c2ac47091e301b3adc5b35a68c1870b16eafb7`
Author: Colt Steele <colt@steele.com>
Date:   Tue Mar 5 14:50:31 2019 -0800

    Add first loaders to handle css
    
    - Installed style-loader and css-loader
    - Configured webpack.config to use both loaders on css files
    - Remember the order we use them in webpack.config matters
___
##### git commit d13f75ab6c6c90e1e7232c2b03fde96b0dd8e6a5
`git checkout d13f75ab6c6c90e1e7232c2b03fde96b0dd8e6a5`
Author: Colt Steele <colt@steele.com>
Date:   Tue Mar 5 11:48:38 2019 -0800

    Add webpack config file
    
    - Created webpack.config.js
    - Added some basic configuration
    - Modified package.json, so that webpack uses our config file
___
##### git commit 2b11dd3624422ac8f57fced592dd824230c83693
`git checkout 2b11dd3624422ac8f57fced592dd824230c83693`
Author: Colt Steele <colt@steele.com>
Date:   Tue Mar 5 11:18:36 2019 -0800

    Webpack now bundling all our app code
    
    - We use import/export to indicate dependencies
    - Webpack makes sure everything loads in the correct order
    - We can remove all our additional script tags in index.html
___
##### git commit 2400d188ea69f4a3bc6dd0f35e58f81dd8135e35
`git checkout 2400d188ea69f4a3bc6dd0f35e58f81dd8135e35`
Author: Colt Steele <colt@steele.com>
Date:   Mon Mar 4 23:09:36 2019 -0800

    Installed webpack
    
    - Installed webpack and webpack-cli
    - Added a start script in package.json which calls webpack
    - Made an index.js file, which is the file webpack looks for by default
    - Webpack spits out our code in dist/main.js by default
    - Currently our main app code has nothing to do with webpack, but it will soon
___
##### git commit dd5492493336955c66c8960d4e50d76297199fbb
`git checkout dd5492493336955c66c8960d4e50d76297199fbb`
Author: Colt Steele <colt@steele.com>
Date:   Mon Mar 4 23:00:28 2019 -0800

    Break code into separate scripts, no webpack
    
    - Broke up app.js into 5 scripts
    - We have to manually include each script in index.html
    - We have to pay attention to the order they load in
___
##### git commit b96a9dbce0d4abbf156612ccb23e4be74d6fd313
`git checkout b96a9dbce0d4abbf156612ccb23e4be74d6fd313`
Author: Colt Steele <colt@steele.com>
Date:   Mon Mar 4 22:51:35 2019 -0800

    Initial app code, no webpack
    
    - Pre-webpack version of our simple app
    - One app.js file with all the code
    - Bootstrap included via CDS, no SASS or customization
    - Single SVG included in assets folder
