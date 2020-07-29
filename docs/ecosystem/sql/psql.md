---
title: PostgreSQL Client Setup
sidebar_label: PSQL Client
---


import Image from '@theme/IdealImage';


`psql` is the standard command line interface for interacting with a PostgreSQL database instance. Here we explain how to install psql on various platforms.


For help installing `psql`, check out the article form TimescaleDB titled [How to install psql on Mac, Ubuntu, Debian, Windows](https://blog.timescale.com/tutorials/how-to-install-psql-on-mac-ubuntu-debian-windows/).



<Image img={require('./psql-tutorial.png')} className='noShadow'/>




# Installing PSQL on MacOS using Homebrew
```shell
brew doctor
brew update
brew install libpq
```

Finally, symlink psql (and other libpq tools) into `/usr/local/bin`:

```shell
brew link --force libpq ail
```

Once PSQL is installed, connect to your database. As a reminder, remember you can get your connection details/credentials from a member of the Wisdom team.


# Installing on Ubuntu 16.04,18.04 and Debian 9,10
```shell
sudo apt-get update
sudo apt-get install postgresql-client
```


# Install Windows 10
We recommend using the installer from [PostgreSQL.org](https://www.postgresql.org/download/windows/).

```shell
psql \
   --port 5432 \
   --host ${ORG_ID}.sql.wisdom-dashboards.com \ 
   --dbname ${DATABASE} \
   --username ${USER_NAME}
```