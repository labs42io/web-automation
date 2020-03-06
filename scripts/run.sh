#!/bin/bash
set -e

./wait-for-it.sh -t 15 chrome:5555 && ./wait-for-it.sh -t 15 firefox:5555

if [ $? -ne 0 ]
then
  echo "Failure: Timed out to connect to selenium hub." >&2
  exit 1
fi

# run tests and get the exit code
./node_modules/.bin/wdio --spec || EXIT_CODE=$?

# generate report
npm run report

exit $EXIT_CODE