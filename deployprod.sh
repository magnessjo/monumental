rsync -L -ave ssh --delete --exclude .git --exclude .gitignore --exclude .DS_Store --exclude deploy.sh  /Users/magnessjo/DigitalCodeMonkeys/sites/monumnental-realty/build/*  monumental:/srv/http/www
