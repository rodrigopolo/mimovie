#movielib

A Node.js/MongoDB movie library creator.

####Requirements:

* [Node.js](http://nodejs.org/download/)  
  Download and install Node.js  
* [MongoDB](http://www.mongodb.org/downloads)  
  Download MongoDB, you can install it or add the bin path to your environment path.  
* [MediaInfo](http://mediaarea.net/en/MediaInfo/Download)  
  Download MediaInfo, you can install it or add the bin path to your environment path.  
* [The Movie Database API Key](https://www.themoviedb.org)


####Steps:

1. Obtain your API Key
  * Register on: https://www.themoviedb.org/account/signup
  * Go to your account: https://www.themoviedb.org/account/
  * Click on the link "API".
  * Generate a new API key.
  * Follow the steps until you get your key.
2. Clone github repository, enter the repo directory.  

   ```
   git clone https://github.com/rodrigopolo/movielib.git
     cd movielib
   ```
3. Install dependencies

   ```
   npm install
   ```
4. Create a config file from the example file  

   ```
   cp config-example.js config.js
   ```
5. Add your movie database key to the `config.js`.
6. Add your movie folder path to the `config.js`.
7. Run the main.js script:  

   ```
   node main.js
   ```
8. Enjoy!

-------

## License

Copyright 2017 Ry Rodrigo Polo - http://rodrigopolo.com

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License in the LICENSE file, or at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License
or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the Apache License and the GPL License for the specific language governing
permissions and limitations under the Apache License and the GPL License.
